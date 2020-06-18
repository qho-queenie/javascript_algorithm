// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.
//
// We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .
//
// Your task is to find their comparison points by comparing  with ,  with , and  with .
//
// If , then Alice is awarded  point.
// If , then Bob is awarded  point.
// If , then neither person receives a point.
// Comparison points is the total points a person earned.
//
// Given  and , determine their respective comparison points.
//
// For example,  and . For elements , Bob is awarded a point because . For the equal elements  and , no points are earned. Finally, for elements ,  so Alice receives a point. Your return array would be  with Alice's score first and Bob's second.
//
// Function Description
//
// Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.
//
// compareTriplets has the following parameter(s):
//
// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating

function compareTriplets(a, b) {
    var aScore = 0;
    var bScore = 0;
    var result = [];

    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) aScore++;
        if (a[i] < b[i]) bScore++;
    }

    result.push(aScore, bScore);
    return result;
}
