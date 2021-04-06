
//link: https://leetcode.com/problems/shuffle-the-array/

function shuffle(nums, n) {
  //initialize a new array
    let arr = [];
  //push the first value of the original array into the new array
  //push the value at n into the new array next
  //alternate this process back and forth, iterating by 1 each time until the array length has been reached
    for (let i = 0; i < n; i++) {
        arr.push(nums[i]);
    // nums[0],
    // nums[1]...
        arr.push(nums[n + i]);
    // nums[3 + 0],
    // nums[3 + 1]...
    }

  //return the new array
    return arr;
}

module.exports = {
    shuffle
};