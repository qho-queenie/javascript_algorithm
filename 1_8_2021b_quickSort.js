// quicksort

let quickSort = arr => {
  // if arrA or arrB is empty, we just return the array.
  // So that in the recursion, nothing is empty and we dont have to // take
  care of these empty cases
  if(arr.length <= 1){
    return arr;
  }

  let pivot = arr[(arr.length - 1)];
  let arrA = [];
  let arrB = [];


  for(var i = 0; i < arr.length - 1; i++){
    if( i !== arr.length - 1){
      arr[i] <= pivot? arrA.push(arr[i]) : arrB.push(arr[i]);
    }
  }

  // how do we recursively call quickSort until arr.length === 1?:

  return [...quickSort(arrA),pivot,...quickSort(arrB)];


  // we dont need to cover the following cases anymore
  // else if(arrA.length > 0){
  //   return [...quickSort(arrA),pivot]
  // }
  // else {
  //   return[pivot,...quickSort(arrB)]
  // }
}
