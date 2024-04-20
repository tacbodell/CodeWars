//  PREP
//  P - an array of many different element types
//  R - the same array, order maintained, with all zeros moved to the end
//  E - moveZeros([1,2,0,1,0,1,0,3,0,1])  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
//      moveZeros([false,1,0,1,2,0,1,3,"a"])  [false,1,1,2,1,3,"a",0,0]
//  P - let numberOfZeros
//      iterate through array
//        if element is int 0
//          numberOfZeros ++
//          splice out the zero
//          decrement index
//      loop number of times equal to number of zeros
//        push zero to end of array
//      return array



function moveZeros(arr) {
    let numberOfZeros = 0;
    for (i = 0; i < arr.length; i++){
      if (arr[i] === 0){
        numberOfZeros++;
        arr.splice(i, 1);
        i--;
      }
    }
    for (i = 0; i < numberOfZeros; i++){
      arr.push(0);
    }
    return arr;
  }