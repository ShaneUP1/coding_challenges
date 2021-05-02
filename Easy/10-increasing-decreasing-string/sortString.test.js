const { sortString } = require('./sortString');

describe('sortString fxn', () => {
    it('takes in a string and reorders the string working one character at a time, taking the smallest character from the remaining string that is larger than the last appended character on the mutated string and appends it', () => {

        const string1 = 'aaaabbbbcccc';
        const expected1 = 'abccbaabccba';
        const actual1 = sortString(string1);

        expect(actual1).toEqual(expected1);

        const string2 = 'rat';
        const expected2 = 'art';
        const actual2 = sortString(string2);

        expect(actual2).toEqual(expected2);

        const string3 = 'leetcode';
        const expected3 = 'cdelotee';
        const actual3 = sortString(string3);

        expect(actual3).toEqual(expected3);

        const string4 = 'gggggg';
        const expected4 = 'gggggg';
        const actual4 = sortString(string4);

        expect(actual4).toEqual(expected4);
    });
});