const { shuffle } = require('./shuffle');

describe('shuffle fn', () => {
    it('takes in an array in the form [x1,x2,...,xn,y1,y2,...,yn] and a number, and returns an array in the form [x1,y1,x2,y2,...,xn,yn]', () => {
        const expected1 = [2, 3, 5, 4, 1, 7];
        const actual1 = shuffle([2, 5, 1, 3, 4, 7], 3);

        expect(actual1).toEqual(expected1);

        const expected2 = [1, 4, 2, 3, 3, 2, 4, 1];
        const actual2 = shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4);

        expect(actual2).toEqual(expected2);

        const expected3 = [1, 2, 1, 2];
        const actual3 = shuffle([1, 1, 2, 2], 2);

        expect(actual3).toEqual(expected3);
    });
});
