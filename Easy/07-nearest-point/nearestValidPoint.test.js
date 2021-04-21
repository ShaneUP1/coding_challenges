const { nearestValidPoint } = require('./nearestValidPoint');

describe('nearestValidPoint fxn', () => {
    it('takes in 2 coordinate point, x and y, and an array of points and it returns the index of the points with the smallest Manhattan Distance from the x and y coordinates', () => {

        const expected1 = 2;
        const actual1 = nearestValidPoint(3, 4, [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]]);

        expect(actual1).toEqual(expected1);

        const expected2 = 0;
        const actual2 = nearestValidPoint(3, 4, [[3, 4]]);

        expect(actual2).toEqual(expected2);

        const expected3 = -1;
        const actual3 = nearestValidPoint(3, 4, [[2, 3]]);

        expect(actual3).toEqual(expected3);
    });
});