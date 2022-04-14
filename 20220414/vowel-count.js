// Return the number (count) of vowels in the given string.
// 
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// 
// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    // 1. initialize counter and define what letters are vowels
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    // 2. iterate through array of string's characters and count vowels
    str.toLowerCase().split('').forEach(e => {if(vowels.includes(e)) {vowelsCount++}})
    // 3. return vowel count
    return vowelsCount;
  }