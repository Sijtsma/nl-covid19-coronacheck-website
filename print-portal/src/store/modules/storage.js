const key = 'withPositiveTest'
const withPositiveTest = localStorage?.getItem(key) === 'true';
localStorage?.removeItem(key);

export const events = {
    WITH_POSITIVE_TEST: 'storage/WITH_POSITIVE_TEST',
    WITH_POSITIVE_TEST_FLOW: 'storage/WITH_POSITIVE_TEST_FLOW'
}

const state = {
    withPositiveTest,
    withPositiveTestFlow: withPositiveTest
};

const actions = {
    [events.WITH_POSITIVE_TEST]: ({ commit }, value) => {
        commit(events.WITH_POSITIVE_TEST, value)
    }
};

const mutations = {
    [events.WITH_POSITIVE_TEST]: (state, value) => {
        state.withPositiveTest = value
        if (!localStorage) {
            return
        }
        if (value) localStorage.setItem(key, value);
        else localStorage.removeItem(key);
    }
};

const getters = {
    [events.WITH_POSITIVE_TEST]: ({ withPositiveTest }) => withPositiveTest,
    [events.WITH_POSITIVE_TEST_FLOW]: ({ withPositiveTestFlow }) => withPositiveTestFlow
};

export default {
    state,
    getters,
    actions,
    mutations
}
