const { squareIsWhite } = require('./squareIsWhite');

describe('Determine Color of a Chessboard Square using squareIsWhite function', () => {
    it('You are given coordinates, a string that represents the coordinates of a square of the chessboard. Return true if the square is white, and false if the square is black. The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.', () => {

        const expected1 = false;
        const actual1 = squareIsWhite(a1);

        expect(actual1).toEqual(expected1);

        const expected2 = true;
        const actual2 = squareIsWhite(h3);

        expect(actual2).toEqual(expected2);

        const expected3 = false;
        const actual3 = squareIsWhite(c7);

        expect(actual3).toEqual(expected3);
    });
});