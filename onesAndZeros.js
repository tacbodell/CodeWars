// PREP
// P - AN ARRAY OF ONES AND ZEROES REPRESENTING A BINARY NUMBER
// R - THE BINARY NUMBER TRANSLATED TO A BASE 10 INTEGER
// E - Testing: [0, 0, 0, 1] ==> 1
//      Testing: [1, 0, 1, 1] ==> 11
// P - INITIALIZE A COUNTER VARIABLE AT 0
//     REVERSE THE ORDER OF THE ARRAY
//     ITERATE THROUGH ARRAY OF DIGITS (NOW IN REVERSE)
//     FOR EACH DIGIT, IF (DIGIT === 1) ADD TO COUNTER VARIABLE "2 ^ i" WHERE I = INDEX OF DIGIT IN ARRAY
//     RETURN COUNTER

const binaryArrayToNumber = arr => {
    let counter = 0;
    arr.reverse()
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        counter += Math.pow(2, i)
      }
    }
    return counter;
  };