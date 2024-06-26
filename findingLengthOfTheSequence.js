//PREP
//P - ARR OF NUMBERS AND ANOTHER NUMBER
//R - THE LENGTH OF THE SUBARRAY MADE INSIDE OF THE ARRAY STARTING AND ENDING WITH GIVEN NUMBER. IF < OR > 2 OCCURENCES OF NUMBER ARE FOUND, RETURN 0
//E - [0, -3, 7, 4, 0, 3, 7, 9], RETURN 5
//P - DECLARE LATCH VARIABLE AND COUNTER VARIABLE
// ITERATE THROUGH ARRAY
// IF NUM IS FOUND IN ARRAY,
//  IF COUNTER IS 0, SET LATCH TO TRUE
//  IF LATCH IS TRUE, SET LATCH TO FALSE
//  IF LATCH IS FALSE AND COUNTER > 0, RETURN 0
// IF LATCH IS TRUE, INCREMENT COUNTER
// END LOOP
// RETURN COUNTER

var lengthOfSequence = function (arr, n) {
    let latch = false, counter = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === n) {
        if (counter === 0) {
          latch = true
        } else if (latch === true) {
          counter++
          latch = false
        } else if (counter > 0) {
          return 0
        }
      }
      if (latch === true) {
        counter++
      }
    }
    if (latch === true) {
      return 0
    }
    return counter
  };