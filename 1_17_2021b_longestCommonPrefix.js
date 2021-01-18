// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    let checkCommon = (str1, str2) => {
        let currentPre = '';
        let shorterStr = str1.length >= str2.length? str2:str1;
        let longerStr = str1.length < str2.length? str2:str1;
        for(var i = 0; i < shorterStr.length; i++){
            if(shorterStr[i] === longerStr[i]){
              currentPre += shorterStr[i];
            }
            else{
              return currentPre;
            }
        }
        return currentPre;
    }
  if(strs.length === 0)return '';
  if(strs.length === 1)return strs[0];
  let longestPre = checkCommon(strs[0], strs[1]);
    for(var j = 2; j < strs.length ; j++){
      longestPre = checkCommon(longestPre, strs[j]);
    }
    return longestPre;
};
