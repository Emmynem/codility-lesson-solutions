function odd_occurrences_in_array(A) {
  let _array = A;
  let length = _array.length;
  _array.sort(function(a, b){
      return a - b;
  });
  for (i=0; i < length-1 ; i+=2){
    if( _array[i] != _array[i+1]){
        return _array[i];
        break;
    }
  }
  return _array[length-1];
}

// console.log(odd_occurrences_in_array([9,3,9,3,9,7,9])); // Log out answer
