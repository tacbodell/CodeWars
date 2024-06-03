// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.
// 
// examples:
// 
// [2, 10, 9, 3] is a nice rray becaus
// 
//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1
// 
// [4, 2, 3] is a nice array because
// 
// 4 = 3 + 1
// 2 = 3 - 1
// 3 = 2 + 1 (or 3 = 4 - 1)
// 
// [4, 2, 1] is a not a nice array becaus
// 
// for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

function isNice(arr) {
    // 1. Check if array is empty
    return arr.length !== 0 ?
        // 2. If array is not empty, check if array containes a neighbor value for every element. Return true/false respectively
        arr.every(val => (arr.includes(val+1) || arr.includes(val-1))) :
        // 3. If array was empty, function returns false
        false
}