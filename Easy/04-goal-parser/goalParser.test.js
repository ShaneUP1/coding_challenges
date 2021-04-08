const { goalParser } = require('./goalParser');

describe('goalParser fn', () => {
    it('You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.   Given the string command, return the Goal Parsers interpretation of command.', () => {

        const expected1 = "Goal";
        const actual1 = goalParser("G()(al)");

        expect(expected1).toEqual(actual1);

        const expected2 = "Gooooal";
        const actual2 = goalParser("G()()()()(al)");

        expect(expected2).toEqual(actual2);

        const expected3 = "alGalooG";
        const actual3 = goalParser("(al)G(al)()()G");

        expect(expected3).toEqual(actual3);

    });
});