// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. 
// At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// 
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
//
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. 
// Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s) {
// 1. break string into array of chararcters
    return s.split('')
// 2. filter array to remove numbers
        .filter(e => e !== '0' &&
               e !== '1' &&
               e !== '2' &&
               e !== '3' &&
               e !== '4' &&
               e !== '5' &&
               e !== '6' &&
               e !== '7' &&
               e !== '8' &&
               e !== '9')
// 3. join together array and return as string
        .join('')
}