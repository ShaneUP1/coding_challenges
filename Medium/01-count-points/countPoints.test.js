const { countPoints } = require('./countPoints');

describe('countPoints function', () => {
    it('Queries on Number of Points Inside a Circle', () => {

        const points1 = [[1, 3], [3, 3], [5, 3], [2, 2]];
        const queries1 = [[2, 3, 1], [4, 3, 1], [1, 1, 2]];

        const expected1 = [3, 2, 2];
        const actual1 = countPoints(points1, queries1);

        expect(actual1).toEqual(expected1);

        const points2 = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
        const queries2 = [[1, 2, 2], [2, 2, 2], [4, 3, 2], [4, 3, 3]];

        const expected2 = [2, 3, 2, 4];
        const actual2 = countPoints(points2, queries2);

        expect(actual2).toEqual(expected2);

    });
});