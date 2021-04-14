const { maxDepth } = require('./maxDepth');

// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Constraints:

// 1 <= s.length <= 100
// s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
// It is guaranteed that parentheses expression s is a VPS.

describe('Maximum Nesting Depth of the Parentheses', () => {
    it('Given a VPS represented as string s, return the nesting depth of s.', () => {

        const expected1 = 3;
        const actual1 = maxDepth("(1+(2*3)+((8)/4))+1");

        expect(expected1).toEqual(actual1);

        const expected2 = 3;
        const actual2 = maxDepth("(1)+((2))+(((3)))");

        expect(expected2).toEqual(actual2);

        const expected3 = 1;
        const actual3 = maxDepth("1+(2*3)/(2-1)");

        expect(expected3).toEqual(actual3);

        const expected4 = 0;
        const actual4 = maxDepth("1");

        expect(expected4).toEqual(actual4);

    });
});