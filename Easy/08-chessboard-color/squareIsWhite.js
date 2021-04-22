//link: https://leetcode.com/problems/determine-color-of-a-chessboard-square/ 

// Constraints:
// coordinates.length == 2
// 'a' <= coordinates[0] <= 'h'
// '1' <= coordinates[1] <= '8'

function squareIsWhite(coordinates) {
    const evenLetters = ['a', 'c', 'e', 'g'];
    const oddLetters = ['b', 'd', 'f', 'h'];
  
    if (evenLetters.includes(coordinates[0]) && coordinates[1] % 2 === 0) return true;
    else if (oddLetters.includes(coordinates[0]) && coordinates[1] % 2 !== 0) return true;
    else return false;
  
  
    // find what letter the first coordinate is
  // find what number the second coordinate is
  // set a variable to hold true/false value
  // if letter is even, return true
}

module.exports = {
    squareIsWhite
};