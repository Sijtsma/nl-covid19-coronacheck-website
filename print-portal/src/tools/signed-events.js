import axios from 'axios';
import store from '@/store'

const collect = async (token) => {
    return new Promise((resolve, reject) => {
        getTokens(token).then((tokenSets) => {
            getEvents(tokenSets).then(events => {
                resolve(events);
            }, (error) => {
                reject(error)
            })
        }, (error) => {
            reject(error)
        })
    })
}

const getTokens = async (token) => {
    return new Promise((resolve, reject) => {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        axios({
            method: 'post',
            url: 'https://holder-api.acc.coronacheck.nl/v4/holder/access_tokens',
            headers
        }).then((response) => {
            if (response.data && response.data.payload) {
                const payload = JSON.parse(atob(response.data.payload));
                resolve(payload.tokens);
            }
        }).catch((error) => {
            reject(error);
        })
    })
}

const getEvents = async (tokenSets) => {
    const allEvents = []
    for (const tokenSet of tokenSets) {
        // only do GGD for now
        if (tokenSet.provider_identifier === 'ZZZ') {
            const eventProvider = store.getters['eventProviders/getTestProviderByIdentifier'](tokenSet.provider_identifier);
            if (eventProvider) {
                const result = await unomi(eventProvider, tokenSet)
                if (result && result.informationAvailable) {
                    await getEvent(eventProvider, tokenSet).then(signedEvent => {
                        allEvents.push(signedEvent)
                    })
                }
            }
        }
    }
    return allEvents;
}

const unomi = async (eventProvider, tokenSet) => {
    return new Promise((resolve, reject) => {
        const url = eventProvider.unomi_url;
        const headers = {
            'Authorization': `Bearer ${tokenSet.unomi}`,
            'Content-Type': 'application/json'
        };
        axios({
            method: 'post',
            headers: headers,
            url: url
        }).then((response) => {
            const payload = JSON.parse(atob(response.data.payload));
            resolve(payload)
        }).catch((error) => {
            console.log(error);
            reject(error);
        })
    })
}

const getEvent = async (eventProvider, tokenSet) => {
    return new Promise((resolve, reject) => {
        const url = eventProvider.event_url;
        const headers = {
            'Authorization': `Bearer ${tokenSet.unomi}`,
            'Content-Type': 'application/json'
        };
        axios({
            method: 'post',
            headers: headers,
            url: url
        }).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            console.log(error);
            reject(error);
        })
    })
}

export default {
    collect
}
