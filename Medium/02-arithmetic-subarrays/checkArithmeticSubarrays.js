
function checkArithmeticSubarrays(nums, l, r) {
  //grab our subarray based on l and r
    const subArrays = l.map((x, i) => [x, r[i]]);
    
    const orderedArrays = subArrays.map(subArr => {
        return nums.slice(subArr[0], subArr[1] + 1);
    });
  
  //reorder subarray from least to greatest
    const ascendingArr = orderedArrays.map(orderedArr => {
        return orderedArr.sort(function(a, b){
            return a - b;
        });
    });
    console.log(ascendingArr);

  
  //find the difference between each set of consecutive numbers
    const differenceArr = ascendingArr.map(eachArr => {
        let difference = [];  
        for (let i = 1; i < eachArr.length; i++){
            let j = i - 1;
            const currentNum = eachArr[i];
            const prevNum = eachArr[j];
            const delta = currentNum - prevNum;
            difference.push(delta);
        }
        return difference;
    });
    console.log('diffArr', differenceArr);

    const result = differenceArr.map(subDiffArr => {
        return new Set(subDiffArr).size === 1;
    });
    return result;
}

module.exports = {
    checkArithmeticSubarrays
};