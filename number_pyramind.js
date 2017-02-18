// Description:

// Task:

// You have to write a function pattern which creates the following Pattern(See Examples) upto n(parameter) number of rows.

// Rules/Note:

// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
// All the lines in the pattern have same length i.e equal to the number of characters in the last line.
// Range of n is (-∞,100]
// Examples:

// pattern(5):

//     1    
//    121   
//   12321  
//  1234321 
// 123454321
// pattern(10):

//          1         
//         121        
//        12321       
//       1234321      
//      123454321     
//     12345654321    
//    1234567654321   
//   123456787654321  
//  12345678987654321 
// 1234567890987654321
// pattern(15):

//               1              
//              121             
//             12321            
//            1234321           
//           123454321          
//          12345654321         
//         1234567654321        
//        123456787654321       
//       12345678987654321      
//      1234567890987654321     
//     123456789010987654321    
//    12345678901210987654321   
//   1234567890123210987654321  
//  123456789012343210987654321 
// 12345678901234543210987654321
// pattern(20):

//                    1                   
//                   121                  
//                  12321                 
//                 1234321                
//                123454321               
//               12345654321              
//              1234567654321             
//             123456787654321            
//            12345678987654321           
//           1234567890987654321          
//          123456789010987654321         
//         12345678901210987654321        
//        1234567890123210987654321       
//       123456789012343210987654321      
//      12345678901234543210987654321     
//     1234567890123456543210987654321    
//    123456789012345676543210987654321   
//   12345678901234567876543210987654321  
//  1234567890123456789876543210987654321 
// 123456789012345678909876543210987654321


function pattern(n){
    if(n < 1)
     return "";
    if(n === 1)
      return "1";
   
   var output="";
   var charsPerRow = 1 + (2*(n-1));
   var count = 1;
   
   for(var i = 1; i <= n; i++){
     var row = 1+(2*(i-1));
     var start = Math.floor(charsPerRow/2) - Math.floor(row/2);
     var end = Math.floor(charsPerRow/2) + Math.floor(row/2);
     for(var k = 0; k < charsPerRow; k++){
       if(k < start || k > end){
         output += " ";
       }
       else{
          output += (count%10);
          if(k < Math.floor(charsPerRow/2))
            count++;
          else
            count--;
       }
     }
     count = 1;
     if(i < n)
       output += "\n";
   }
   
 return output;
}