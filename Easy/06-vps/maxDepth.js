// link: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

function maxDepth(s) {
  // initialize two accumulators

    let acc1 = 0;
    let acc2 = [0];
    const sArray = [...s];

  // iterate through s
  // for every open parenthesis, increment first accumulator
  // for every closed parenthesis, decrement that same accumulator
  // second accumulator should track the max number that the accumulator reaches

    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] === '(') {
            acc1 ++;
            acc2.push(acc1);
        } if (sArray[i] === ')') {
            acc1 --;
            acc2.push(acc1);
        }
    }
     // return second accumulator
    return Math.max(...acc2);
}

module.exports = {
    maxDepth
};