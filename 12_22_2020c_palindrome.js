//given a string, check if it is a permutation for a palindrome
//case sensitive? no
//white spaces matter? yes
//all just alpha characters? yes

let permPalindrome = string => {
  string = string.toLowerCase();
  string = string.split('');
  let countObj = {};
  string.forEach(char => countObj.hasOwnProperty(char)? countObj[char] += 1 : countObj[char] = 1);

  return Object.values(countObj).filter(x => x % 2 !== 0).length > 1? false:true;

}

let isPalindrome = string => {
  let string1 = string.slice(0, Math.ceil(string.length / 2));
  let string2 = (string.slice(Math.ceil(string.length / 2))).split('').reverse();
  for(var i = 0; i < string2.length; i++){
    if(string1[i] !== string2[i]){
      return false;
    }
  }
  return true;
}


let isPalindrome = string => {
  let reversedStr = string.split('').reverse();
  if(string.length < 2 || reversedStr.toString() !== string.split('').toString()){
    return false;
  }
  else {
    return true
  }
}

let isPalindrome = string => [...string].every((char, i) => char === [...string][string.length - 1 - i]);
