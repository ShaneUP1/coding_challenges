// link: https://leetcode.com/problems/jewels-and-stones/

function numJewelsInStones(jewels, stones) {
  //initialize an empty "answer" array
    let answer = 0;
  //compare the first letter in jewels to each letter in stones and add 1 to the answer array for each match
  //**constraints say that jewels will always be <= 1 and that all characters of jewels are unique**
    for (let i = 0; i <= jewels.length; i++) {
        for (let j of stones) {
            if (jewels[i] === j) {
                answer++;
            }
        }
    }
  //repeat process until you've checked each letter in jewels and return the answer array
    return answer;
  //bonus points for regex!
}

module.exports = {
    numJewelsInStones
};