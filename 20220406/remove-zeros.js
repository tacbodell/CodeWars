// Write a function that, given a string of text (possibly with punctuation and line-breaks),
// returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
// 
// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

function topThreeWords(text) {

// 1. Convert string to lowercase, break down into array of words, remove punctuation
    let arr = text.toLowerCase().split('').filter((e,i,a) => e!=='.'&&e!=='!'&&e!=='?'&&e!=='#'&&e!=='/'&&e!==','&&e!==':'&&e!=='\\'&&e!=='\''||(e === '\'' && a[i-1] !== ' ' && a[i+1] !== ' ')).join('').split(' ').filter(e => e !== '')
// 2. Iterate through array and count unique words in 'instances' object
    let instances = {}
    arr.forEach((e,i) => {
        e in instances ?
            instances[e]++ :
            instances[e] = 1
    })
// 3. Return 3 highest-occurring words from 'instances' object
    let sorted = Object.keys(instances).sort((a,b) => instances[b] - instances[a])
    switch (sorted.length) {
        case 0:
            return [];
        case 1:
            return [sorted[0]]
        case 2:
            return [sorted[0], sorted[1]]
        default:
            return [sorted[0], sorted[1], sorted[2]]
    }
}

// Regex could have made this solution tidier and more readable, but I wanted to challenge myself not to use it. :)