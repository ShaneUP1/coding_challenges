//link: https://leetcode.com/problems/count-items-matching-a-rule/

function countMatches(items, ruleKey, ruleValue) {
  //initialize an accumulator
    let accumulator = 0;
  //iterate through items
    for (let item of items) {
    //for each item that matches the ruleKey with the ruleValue value add 1 to the accumulator
        if (ruleKey === 'type' && ruleValue === item[0]) {
            accumulator++;
        }
        if (ruleKey === 'color' && ruleValue === item[1]) {
            accumulator++;
        }
        if (ruleKey === 'name' && ruleValue === item[2]) {
            accumulator++;
        }

    }

  //return accumulator
    return accumulator;
}

module.exports = {
    countMatches
};