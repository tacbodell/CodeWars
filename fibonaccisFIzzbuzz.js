//PREP
//P - ONE INTEGER, REPRESENTING THE LENGTH OF THE ARRAY TO BE RETURNED
//R - AN ARRAY OF THE FIBONACCI SEQUENCE, INTEGER ELEMENTS LONG. REPLACE DIVISIBLE BY 3 WITH FIZZ, 5 WITH BUZZ, AND 3 & 5 WITH FIZZBUZZ
//E - fibsFizzBuzz(5),[ 1, 1, 2, 'Fizz', 'Buzz' ]
//P - IF INT === 0 RETURN []
// IF INT === 1 RETURN [1]
// IF INT === 2 RETURN [1,1]
// DECLARE ARR = [1,1]
// DECLARE LASTNUM = 1
// DECLARE SECONDLASTNUM = 1
// FOR LOOP STARTING AT 2 UNTIL INT
// LET NUMTOADD = LASTNUM + SECONDLASTNUM
// EDGE CASE FOR % 3 && % 5, PUSH STRING
// EDGE CASE FOR % 5, PUSH STRING
// EDGE CASE FOR % 3, PUSH STRING
// PUSH NUMBER TO STACK
// SECONDLASTNUM = LASTNUM
// LASTNUM = NUMTOAD
// RETURN ARR

var fibsFizzBuzz = function(n) {
    if (n === 0) return []
    if (n === 1) return [1]
    if (n === 2) return [1,1]
    let arr = [1,1]
    let lastNum = 1, secondLastNum = 1
    for (let i = 2; i < n; i++) {
      let numToAdd = lastNum + secondLastNum
      if (numToAdd % 3 === 0 && numToAdd % 5 === 0) {arr.push("FizzBuzz")}
      else if (numToAdd % 3 === 0) {arr.push("Fizz")}
      else if (numToAdd % 5 === 0) {arr.push("Buzz")}
      else {arr.push(numToAdd)}
      secondLastNum = lastNum
      lastNum = numToAdd
    }
    return arr
}