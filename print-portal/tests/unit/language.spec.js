import languages from '@/data/languages'
import dictionary from '@/data/language/dictionary'


describe('Language', () => {
    it('Each language should have a dictionary', () => {
        for (const language of languages) {
            expect(dictionary[language.locale]).not.toBeUndefined()
        }
    })

    const loopKeys = (obj, dict, levels) => {
        for (const key in obj) {
            const entry = obj[key];
            if (typeof entry === 'string') {
                let locationInDict = dict;
                for (const level of levels) {
                    locationInDict = locationInDict[level];
                }
                console.log(levels.join('/') + '/' + key);
                expect(locationInDict[key]).not.toBeUndefined()
            } else if (Object.prototype.toString.call(entry) === '[object Array]') {
                // skip for now
            } else {
                const newLevels = [...levels]
                newLevels.push(key)
                loopKeys(entry, dict, newLevels);
            }
        }
    }

    it('Each language should have the dutch keys', () => {
        const dutchDict = dictionary.nl;
        for (const language of languages) {
            if (language.locale !== 'nl') {
                const thisDict = dictionary[language.locale];
                loopKeys(dutchDict, thisDict, []);
            }
        }
    })
})
