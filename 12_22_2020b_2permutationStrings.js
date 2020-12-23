//check if 2 strings are permutations of each other: check if 2 strings have the same characters, same character counts, but in different orders

// is this case sensitive? yes
// does white space count? yes

//solution 1: sort first
let checkPermutations = (string1, string2) => {
  string1 = string1.split('').sort();
  string2 = string2.split('').sort();
  if(string1.length != string2.length) {
    return false;
  }
  else {
    for(var i = 0 ; i < string1.length; i++){
        if(string1[i] !== string2[i]){
          return false;
        }
    }
    return true;
  }
}
