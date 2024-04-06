// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between 
// each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.
// 
// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
// 1. break number into individual digits
    return num.toString().split('') //[1,2,3,5,9,8]
// 2. map array, if both previous element and current element are odd, change current element to negative. does not apply to first element of array
        .map((e,i,a) => {
            return (e % 2 !== 0 && a[i - 1] % 2 !== 0 && i !== 0) ?
                e * -1 :
                e
        })
// 3. join array
        .join('')
}       