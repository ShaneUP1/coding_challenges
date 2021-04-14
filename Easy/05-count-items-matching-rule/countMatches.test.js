const { countMatches } = require('./countMatches');

describe('countMatches fxn', () => {
    it('takes in 3 parameters: an array of string arrays that each have a type, color, and name (in that order), and two string parameters, ruleValue and ruleKey. It returns the amount of objects in the array that match up with the ruleKey and ruleValue strings.', () => {

        const expected1 = 1;
        const actual1 = countMatches([['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']], 'color', 'silver');

        expect(expected1).toEqual(actual1);

        const expected2 = 2;
        const actual2 = countMatches([['phone', 'blue', 'pixel'], ['computer', 'silver', 'phone'], ['phone', 'gold', 'iphone']], 'type', 'phone');

        expect(expected2).toEqual(actual2);
    });
});