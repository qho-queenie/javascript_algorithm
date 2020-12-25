//string compression and decode it
//if compression is longer than string itself, return string

//all alphabets? yes
//case sensitive? yes

let compression = string => {
  let result = [];
  let count = 1;

  for(var i = 0; i < string.length; i++){
    if(string[i] == string[i+1]){
      count++;
    }
    else{
      result.push(string[i], count);
      count = 1;
    }
  }
  return result.join('');
}

let decode = compressed => {
  let result = [];
  for(var i = 0, j = 1; i < compressed.length - 1 && j < compressed.length; i = i + 2, j = j + 2){
    let tempresult = new Array(parseInt(compressed[j]));
    tempresult.fill(compressed[i],0, compressed[j]);
    result.push(tempresult.join(''));
    tempresult = [];
  }
  return result.join('');
}
