// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
//
// Tower block is represented as *
//
// Tower of 6 floors looks like below
//
// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

function towerBuilder(nFloors) {
  let resultArr = [];
  let position = 0;
  let mostAst = ((2 * nFloors) - 1);

  while (nFloors > 0){
    position = Math.floor((mostAst - ((2 * nFloors) - 1))/2);
    if(nFloors == mostAst) {
      resultArr.push('*'.repeat((2 * nFloors) - 1));
    }
    else {
      resultArr.push(' '.repeat(position) + '*'.repeat((2 * nFloors) - 1) + ' '.repeat(position));
    }
    nFloors -= 1;
  }
  return resultArr.reverse();
}
