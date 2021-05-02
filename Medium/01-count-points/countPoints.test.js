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

        const points3 = [[99, 113], [150, 165], [23, 65], [175, 154], [84, 83], [24, 59], [124, 29], [19, 97], [117, 182], [105, 191], [83, 117], [114, 35], [0, 111], [22, 53]];
        const queries3 = [[105, 191, 155], [114, 35, 94], [84, 83, 68], [175, 154, 28], [99, 113, 80], [175, 154, 177], [175, 154, 181], [114, 35, 134], [22, 53, 105], [124, 29, 164], [6, 99, 39], [84, 83, 35]];

        const expected3 = [11, 7, 8, 2, 7, 11, 13, 10, 10, 14, 3, 3];
        const actual3 = countPoints(points3, queries3);

        expect(actual3).toEqual(expected3);

    });
});