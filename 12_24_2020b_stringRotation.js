//given 2 strings and a method to check substring, determine whether s2 is a rotation of s1
//eg s1 is 'waterbottle', s2 is 'erbottlewat'. Therefore function returns true

//if s2 is a rotation of s1, we can definitely find s2 in s1s1

let stringRotation = (s1, s2) => {
  //if they are diff lengths, must be false
  if(s1.length !== s2.length && s1.length > 0){
    return false;
  }
  let s1Double = s1 + s1;
  //match() not works with string literals, must use Regex constructor:
  let re = new RegExp(s2, 'gi');
  let res = s1Double.match(re);
  return res? true:false;
}

let stringRotation = (s1, s2) => {
  //if they are diff lengths, must be false
  if(s1.length !== s2.length && s1.length > 0){
    return false;
  }
  let s1Double = s1 + s1;
  return s1Double.includes(s2)? true:false;
}
