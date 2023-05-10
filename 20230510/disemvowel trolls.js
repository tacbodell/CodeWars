// Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and returns a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" Would become "Ths wbst s fr lsrs LL!".
// Note: for this kata, 'y' isn't considered a vowel.

function disemvowel(str) {
    let letters = str.split(""); // split string into array of letters
    return letters.filter(char => char.toLowerCase() != 'a' 
                          && char.toLowerCase() != 'e'
                          && char.toLowerCase() != 'i' 
                          && char.toLowerCase() != 'o' 
                          && char.toLowerCase() != 'u').join(''); //Return array as string, filtering out all vowels
  };