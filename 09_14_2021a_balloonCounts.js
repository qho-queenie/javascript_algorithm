// create a bMap with all the letter counts of balloon
// create a map with the the input text of letter counts

// loop thru inputMap, if found use the the inputMap's value to minus the corresponding value in bMap
// keep track of a var count, for how many times inputMap completes a cycle
// any time the minus results a negative, return count

let maxNumberOfBalloons = text => {
    const bMap = {'b' : 1,
                  'a' : 1,
                  'l' : 2,
                  'o' : 2,
                  'n' : 1
                 };
    let inputMap = new Map();

    let count = 0;

    [...text].forEach(x => inputMap.has(x)? inputMap.set(x, inputMap.get(x) + 1) : inputMap.set(x, 1));

    let checkValues = aMap => {
        let balloonLettersCount = 7;
        let remainingLetterCount = 0;
        for (let value of aMap.values()){
            value = value * 1;
            remainingLetterCount += value;
        }
        return remainingLetterCount >= balloonLettersCount? true : false;
    }

    while (checkValues(inputMap) === true ) {
        for (let [key, value] of inputMap) {
            if(bMap[key]){
                if(value - bMap[key] > -1){
                    inputMap.set(key, value - bMap[key]);
                }
                else {
                    return count;
                }
            }
        }
        count++;
    }
    return count;
}


// create a bMap with all the letter counts of balloon
// create a map with the the input text of letter counts

// loop thru bMap, use the corresponding value in inputMap to divide the value in inputMap by bMap
// // if the bMap's value doesnt exist in inputMap --> return 0; (looping once, only 1 chance)
// if current result < the last smallest result, replace it with the current division result
let maxNumberOfBalloons = text => {
    const bMap = {'b' : 1,
                  'a' : 1,
                  'l' : 2,
                  'o' : 2,
                  'n' : 1
                 };
    let inputMap = new Map();
    let smallest = Number.POSITIVE_INFINITY;
    [...text].forEach(x => inputMap[x]? inputMap[x]++ : inputMap[x] = 1);

    for(key in bMap) {
      if(!inputMap[key]){
        return 0;
      }
      else if(inputMap[key]/bMap[key] < smallest){
        smallest = Math.floor(inputMap[key]/bMap[key]);
      }
    }
    return smallest;
}
