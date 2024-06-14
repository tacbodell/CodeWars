// PREP
// P - 2D NESTED ARRAY OF POSITIVE INTEGERS
// R - THE SUM OF THE MINIMUM VALUES FROM EVERY ARRAY
// E - [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// P - use reduce() to iterate through array vertically, adding the min() of each array to the accumulator
//     return the final value

function sumOfMinimums(arr) {
    let sumOfMins = arr.reduce((accumulator, currentValue) => accumulator + Math.min(...currentValue), 0)
    return sumOfMins
  }