
// export function sortString(s) {
//   //initialize a 'return' string
//   //iterate through s and find the smallest character and append it to the return string
//   //after the first letter you'll need to check that the smallest letter must also be bigger than the last letter appended
//   //can probably use recursion to finish this out or just keep looping
//   //return 'return' string
// }

const checkArithmeticSubarrays = (nums, l, r) => {
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
  
  //find the difference between each set of consecutive numbers
    const differenceArr = ascendingArr.map(eachArr => {
        for (let i = 0; i <= eachArr.length; i++){
            const currentNum = eachArr[i];
            console.log('currentNum', currentNum);
            const difference = eachArr[i + 1] - currentNum;
            console.log('difference', difference);
            return difference;
        }
    });

    console.log(differenceArr);
      

  
  //return true if the differences are equal, false if not
};

checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5]);
