// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.
//
// But some of the rats are deaf and are going the wrong way!
//
// Kata Task
// How many deaf rats are there?
//
// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats
// ex2 P O~ O~ ~O O~ has 1 deaf rat
// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

var countDeafRats = function(town) {
  let leftDeafCount = 0;
  let rightDeafCount = 0;

  let noSpaceTown = town.replace( /\s/g, '');
  let piperAt = noSpaceTown.indexOf("P");

  for (var i = 0; i < piperAt; i = i + 2){
    if (noSpaceTown[i] + noSpaceTown[i+1] == 'O~'){
        leftDeafCount++
    }
  }
  for (var i =  piperAt + 1; i < noSpaceTown.length; i = i + 2){
    if (noSpaceTown[i] + noSpaceTown[i+1] == '~O'){
        rightDeafCount++
    }
  }
  return leftDeafCount + rightDeafCount;
}
