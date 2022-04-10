// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// 
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = function (word) {
// 1. initialize temporary array
    let arr = [];
// 2. break into characters
    let chars = word.split('')
// 3. iterate through characters. if capital, push to temp array
    chars.forEach((e,i) => {
        if (e === e.toUpperCase()) {
            arr.push(i)
        }
    })
// 4. return temp array
    return arr
}