//longest subsequence
let lcs = (str1, str2) => {
  let result = '';
  let currentTarget;
  let lastFoundIndex = 0;
  let newString2 = str2;

  for (let i = 0; i < str1.length; i++){
    currentTarget = str1[i];
    while (newString2.length && i < str1.length){
      if(newString2.indexOf(currentTarget) > -1){
        result = result + currentTarget;
        newString2 = newString2.slice(newString2.indexOf(currentTarget) + 1);
        break;
      }
    }
  }
  return result;
}
