// link: https://leetcode.com/problems/goal-parser-interpretation/

function goalParser(command) {
  // take the incoming string and split it up, looking for patters of either 'g', '()', or '(al)'. 
  const commandArr = [...command]; //this isn't what you meant, I don't believe, so I'd be interested to hear what you had in mind

  // initialize new array 
  let answerString = '';

  // g can be pushed into the array as is.
  // () should instead push an 'o' into the array. and 'al' instead of '(al)'.
  // iterate through the array and join each string into one new string.
  for (let i = 0; i < commandArr.length; i++) {
    if (commandArr[i] === 'G') {
      answerString = answerString.concat('G');
    }
    else if (commandArr[i] === '(') {
      if (commandArr[i + 1] === ')') {
        answerString = answerString.concat('o');
        i = i + 1;
      }
      if (commandArr[i + 1] === 'a') {
        answerString = answerString.concat('al');
        i = i + 3;
      }
      // if (commandArr[i] === '(' && commandArr[i + 1] === ')') {
      //     answerString = answerString.concat('o');
      //     i = i + 1;
      //     console.log('inside if', i);
      // }
      // else if (
      //     commandArr[i] === '(' && commandArr[i + 1] === 'a') {
      //     console.log(commandArr[i + 1]);
      //     answerString.concat('al');
      //     i = i + 3;
      // }
    }
  }
  // return string
  return answerString;
}

module.exports = {
  goalParser
};