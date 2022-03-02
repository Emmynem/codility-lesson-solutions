function cyclic_rotation(A, K){
  let _array = A;
  let _times = K;

  if (Array.isArray(_array)) {
    if (_array.length == 0) {
      return [];
    }
    else {
      for (var i = 0; i < _times; i++) {
        let reassigned = _array.pop();
        _array.unshift(reassigned);
      }
      return _array;
    }
  }
  else {
    return [];
  }

};

// console.log(cyclic_rotation([], 0)); // Log out answer
