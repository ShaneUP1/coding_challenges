const { checkArithmeticSubarrays } = require ('./checkArithmeticSubarrays.js');

describe('checkArithmeticSubarrays fxn', () => {
    it.only('takes in an array of numbers and two other arrays describing slices of the original number array, and it returns true if those slices have equal differences between the consecutive numbers and false otherwise', () => {
        const expected1 = [true, false, true];
        const l = [0, 0, 2];
        const m = [2, 3, 5];
        const nums = [4, 6, 5, 9, 3, 7];

        const actual1 = checkArithmeticSubarrays(nums, l, m);

        expect(actual1).toEqual(expected1);
    });
});