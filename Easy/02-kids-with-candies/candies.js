
//link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

function kidsWithCandies(candies, extraCandies) {
  // initialize a new array
    let arr = [];

  // find currentGreatest number of candies in array
    const mostCandies = Math.max(...candies);

  // iterate through candies array
  // for each 'kid' in the array, add the extraCandies
  // then compare to currentGreatest
  // if adding the extraCandies is equal to or greater than currentGreatest, push true into new array
  // else push false into new array
    let i = 0;
    while (i < candies.length){
        const kidWithNewCandies = candies[i] + extraCandies;
        i++;
        if (kidWithNewCandies >= mostCandies){
            arr.push(true);
        } else {
            arr.push(false); 
        }
    }
    return arr;
}

module.exports = {
    kidsWithCandies
};