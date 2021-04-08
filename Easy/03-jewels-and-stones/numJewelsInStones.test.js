const { numJewelsInStones } = require('./numJewelsInStones');

describe('numJewelsInStones fn', () => {
    it('takes in 2 strings, jewels and stones respectively, and return an integer describing how many total jewels are found in the stones', () => {
        const expected1 = 3;
        const actual1 = numJewelsInStones('aA', 'aAAbbbb');

        expect(expected1).toEqual(actual1);

        const expected2 = 0;
        const actual2 = numJewelsInStones('z', 'ZZ');

        expect(expected2).toEqual(actual2);
    });
});