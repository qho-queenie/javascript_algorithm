Write a method to replace all spaces in a string with '%20'.
Example:
Input: 'Mr John Smith   ',
Output: 'Mr%20John%Smith'


// Do trailing spaces count? No
// If there are n consecutive empty spaces, should there be n replacements? no, just 1

// trim() to end trailing empty spaces
// use spread operator to change it into an array
// loop find all empty spaces, and see if they are more than 1 consecutively
// if input[i] == ' ', let start = i,
// then if input[i + 1] === ' ' yes? let end = i + 1
// keep checking input[i + 1] and if yes, end = i + 1
// until input[i + 1] !== empty sapce, url.splice(start, end - start + 1, '%20')
// finally join back by ''


let urlify = input => {
  let splitInput = [...input.trim()];

  let start = 0;
  let end = 0;

  for(var i = 0; i < splitInput.length; i++) {
    if(splitInput[i] === ' '){
      start = i;
      end = i;

      while (splitInput[end + 1] === ' ') {
        end++;
      }
      splitInput.splice(start, end - start + 1, '%20');
    }
  }
  return splitInput.join('');
}
