// check if 2 strings are just 1 variation away:
// 1.insert a char 2.remove a char 3.replace a char

//white space? no
//case-sensitive? no

// if lengths are the same, check index by index, and the count var for difference can only be 1
// if length difference is greater than 1, false
// if lengths diff is 1, there can only be 1 difference by 1 character

let oneAway = (str1, str2) => {
  let diffCount = 0;
  if(str1.length == str2.length){ // replacement
    for(var i = 0; i < str1.length; i++){
      if(str1[i] !== str2[i]){
        diffCount++;
      }
    }
    return diffCount <= 1? true:false;
  }
  else {
    if(Math.abs(str1.length - str2.length) > 1){ // more than 1 difference
      return false;
    }
    else { // if length diff is 1, the only other diff is insertion or deletion?
      let diffCount2 = 0;
      for(var i = 0, j = 0; i < str1.length && j < str2.length; i++,j++){
        if(str1[i] !== str2[j]){
          diffCount2++;
          str1.length < str2.length? i--:j--;
          //whichever is the shorter string, stay at the same index
        }
      }
      return diffCount2 > 1? false:true;
    }
  }
}
