//PREP
//  P - array of numbers and index
//  R - index of smallest number in array that is larger than the number given in index
//  E -     assert.strictEqual( leastLarger( [4, 1, 3, 5, 6], 0 ), 3 );
//          assert.strictEqual( leastLarger( [4, 1, 3, 5, 6], 4 ), -1 );
//  P - if index greater than or smaller than length of array, ret -1
//      loop through array
//      if index is larger than previous index and smaller than temp variable, store in temp variable
//      if temp variable unchanged return -1
//      ret temp variable

function leastLarger(a,i) {
    let leastNum = 1000000;
    a.forEach((el) => {
      if (el > a[i] && el < leastNum){
        leastNum = el;
      }
    })
    if (leastNum === 1000000){
      return -1;
    } else{
      return a.indexOf(leastNum);
    }
  }