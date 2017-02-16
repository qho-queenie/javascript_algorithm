// Description:

// To participate in a prize draw each one gives his/her firstname.

// Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

// The length of the firstname is added to the sum of these ranks hence a number n. An array of random weights is linked to the firstnames and each n is multiplied by its corresponding weight to get what they call a winning number.

// Example: names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1]

// PAUL -> n = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54 The weight associated with PAUL is 2 so Paul's winning number is 54 * 2 = 108.

// Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.

// Task:

// parameters: st a string of firstnames, we an array of weights, n a rank

// return: the firstname of the participant whose rank is n (ranks are numbered from 1)

// Example:

// names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1] n: 4

// The function should return: PauL

// Note:

// If st is empty return "No participants".

// If n is greater than the number of participants then return "Not enough participants".

function rank(st, we, n) {
console.log(st, "st");
console.log(we, "we");
console.log(n, "n");
    if (st == "" || st == undefined){
      return "No participants";
    }
    else if (n > st.length || we.length < n ){
      return "Not enough participants";
    }
    var names = st.split(",");
    var weights = [];
    for (var i = 0; i < names.length; i++){
    var count = 0;
      for (var j = 0; j < names[i].length; j++){
        count += (names[i].toUpperCase().charCodeAt(j) - 64);
      }
      count += names[i].length;
      count *= we[i];
      weights.push({"name" : names[i], "weight" : count});
    }
    weights.sort(function(a, b){
      var difference = b.weight - a.weight;
        if (difference === 0){
        	return a.name > b.name? 1 : -1;
        }
        return difference;
    })
    console.log(weights[n - 1], "test");
    return (weights[n - 1].name);
}