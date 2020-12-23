// An algorithm to determine if a string has all unique characters.
// assume its an ASCII string instead of a unicode string

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

let isUniqueChars = string => {
  //sort first
  arr = string.split('').sort();
  for(var i = 0; i < arr.length - 1; i++){
    if(arr[i] == arr[i+1]){
      return false;
      break;
    }
  }
  return true;
}
