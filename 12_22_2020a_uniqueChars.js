// An algorithm to determine if a string has all unique characters.
let allUniqueChar = string => {
  let mySet = new Set(string)
  return string.length == mySet.size? true: false;
}

let allUniqueChar = string => {
  for(var i = 0 ; i < string.length; i++){
    if(string.indexOf(string[i]) !== string.lastIndexOf(string[i])){
      return false;
      break;
    }
  }
  return true;
}

let allUniqueChar = string => {
  string = string.split('');
  return string.filter(char => string.indexOf(char) !== string.lastIndexOf(char)).length? false:true;
}
