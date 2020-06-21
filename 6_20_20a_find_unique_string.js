findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.

This is the second kata in series:

function findUniq(arr) {
  let transformed = arr.map(x => x.toLowerCase().split('').sort().join('').trim().normalize('NFD'));
  transformed = transformed.filter(word => word.length > 0);
  let shortestString = transformed.reduce((a, b) => a.length <= b.length ? a : b);
  let notIncludes = 0;
  let result;

  if (transformed.length < 3) {
    return transformed[0];
  }
  else{
    for (var i = 0; i < transformed.length; i++){
      if(!transformed[i].includes(shortestString)){
        result = arr[i];
        notIncludes++;
      }
    }
    return notIncludes > 1? arr.reduce((a, b) => a.length <= b.length ? a : b): result;
  }
}
