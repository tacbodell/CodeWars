// PREP
// P - AN ARRAY OF NUMBERS WITH AT LEAST "NUM" EVEN NUMBERS, AND AN INTEGER
//  R - AN ARRAY OF INTEGERS OF "NUM" LENGTH CONTAINING THE LAST EVEN NUMBERS IN THE PARAMETER ARRAY
// E - ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8], ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// P - INITIALIZE A NEW EMPTY ARRAY
// ITERATE BACKWARDS THROUGH THE ARRAY
// CONTINUE ITERATING UNTIL ARRAY IS AT NUMBER LENGTH
// ON EACH ITERATION, CHECK IF ARRAY[I] IS EVEN
// IF EVEN, UNSHIFT TO NEW ARRAY
// AT END OF LOOP, RETURN NEW ARRAY

function evenNumbers(array, number) {
    let evens = []
    for (let i = array.length - 1; evens.length < number; i--) {
      if (array[i] % 2 === 0) {
        evens.unshift(array[i])
      }
    }
    return evens
  }