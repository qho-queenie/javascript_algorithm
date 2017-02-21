// Description:
//
// Description:
//
// Each exclamation mark weight is 2; Each question mark weight is 3. Put two string left and right to the balance, Are they balanced?
//
// If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; If they are balanced, return "Balance".
// Examples
//
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"

function balance(left,right){
  var leftlength = left.length;
  var rightlength = right.length;
  var weight1 = 0;
  var weight2 = 0;
  var longer = rightlength;
if (leftlength > rightlength){
   longer = leftlength;
}
  for(var k = 0; k < longer; k++){
    if (left[k] === "!"){
    weight1 += 2;
    }
    else if(left[k] === "?"){
    weight1 += 3;
    }
    if (right[k] === "!"){
    weight2 += 2;
  }
    else if(right[k] === "?"){
    weight2 += 3;
    }
}
console.log(weight1, "weight 1");
console.log(weight2, "weight 2");

  if (weight1 === weight2){
    return "Balance";
  }
  else {
  return (weight1 > weight2)? "Left":"Right";
  }
}
