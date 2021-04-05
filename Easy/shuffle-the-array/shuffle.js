
//link: https://leetcode.com/problems/shuffle-the-array/

function shuffle(nums, n) {
  //initialize a new array
  let arr = [];
  //push the first value of the original array into the new array
  arr.push(nums[0]);
  //push the value at n into the new array next
  arr.push(n);
  //alternate this process back and forth, iterating by 1 each time until the array length has been reached
  arr.push(nums[0 + 1]);
  arr.push(nums[n + 1]);
  // console.log(nums[n + 1]);

  arr.push(nums[0 + 2]);
  arr.push(nums[nums.length - 1]);

  console.log('array:', arr);
  //return the new array
  return arr;
}

module.exports = {
  shuffle
};