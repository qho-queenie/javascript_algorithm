// Description:

// Create a function that transforms any positive number to a string representing the number in words. The function should work for all numbers between 0 and 999999.

// For example,

// number2words(0) should return "zero"

// number2words(1) should return "one"

// number2words(9) should return "nine"

// number2words(10) should return "ten"

// number2words(17) should return "seventeen"

// number2words(20) should return "twenty"

// number2words(21) should return "twenty-one"

// number2words(45) should return "forty-five"

// number2words(80) should return "eighty"

// number2words(99) should return "ninety-nine"

// number2words(100) should return "one hundred"

// number2words(301) should return "three hundred one"

// number2words(799) should return "seven hundred ninety-nine"

// number2words(800) should return "eight hundred"

// number2words(950) should return "nine hundred fifty"

// number2words(1000) should return "one thousand"

// number2words(1002) should return "one thousand two"

// number2words(3051) should return "three thousand fifty-one"

// number2words(7200) should return "seven thousand two hundred"

// number2words(7219) should return "seven thousand two hundred nineteen"

// number2words(8330) should return "eight thousand three hundred thirty"

// number2words(99999) should return "ninety-nine thousand nine hundred ninety-nine"

// number2words(888888) should return "eight hundred eighty-eight thousand eight hundred eighty-eight"

var obj = {"0" : "",
          "00" : "",
          "1"  : "one",
          "2"  : "two",
          "3"  : "three",
          "4"  : "four",
          "5"  : "five",
          "6"  : "six",
          "7"  : "seven",
          "8"  : "eight",
          "9"  : "nine",
          "10"  : "ten",
          "11"  : "eleven",
          "12"  : "twelve",
          "13"  : "thirteen",
          "14"  : "fourteen",
          "15"  : "fifteen",
          "16"  : "sixteen",
          "17"  : "seventeen",
          "18"  : "eighteen",
          "19"  : "nineteen",
          "20" : "twenty",
          "30" : "thirty",
          "40" : "forty",
          "50" : "fifty",
          "60" : "sixty",
          "70" : "seventy",
          "80" : "eighty",
          "90" : "ninety"}


function number2words(n){
   var str = n.toString();
   var start = str.length;
   var result = "";
   if (n == 0){
     return "zero";
   }
   if (n <= 20){
     return obj[str];
   }
   for (var i = 0; i < str.length; i++){
     if (start === 6 && str[i] !== "0"){
       result += obj[str[i]] + " hundred";
       if (str[i + 1] !== "0" || str[i + 2] !== "0"){
       result += " ";
       }
     }
     else if (start === 5){
       if (str[i] === "1"){
         result += obj[str[i] + str[i + 1]]
         i++
         start--
         result += " thousand ";
       }
       else {
         result += obj[str[i] + "0"];
         if(str[i] !== "0" && str[i + 1] !== "0"){
           result += "-";
       }
       }
     }
     else if (start === 4){
       result += obj[str[i]] + " thousand";
       if (str[i + 1] !== "0" || str[i + 2] !== "0" || str[i + 3] !== "0"){
       result += " ";
       }
     }
     else if (start === 3 && str[i] !== "0"){
       result += obj[str[i]] + " hundred";
       if (str[i + 1] !== "0" || str[i + 2] !== "0"){
       result += " ";
       }
     }
     else if (start === 2){
     var test = (str.length - 2);
     console.log(str, "str");
     console.log(str[test], "ooo");
       if (str[test] === "1"){
      console.log(str[test + 1], str[test], "the i");
         result += obj[str[test] + str[test + 1]]
         i++
       }
       else {
         result += obj[str[i] + "0"];
         if(str[i] !== "0" && str[i + 1] !== "0"){
           result += "-";
       }
       }
     }  
     else if (start === 1){
     console.log(str[i], "111");
       result += obj[str[i]];
     }
    start--
   }
   return result.trim();
}