// PREP
// P - A STRING REPRESENTING A NAME
// R - TRUE OR FALSE CHECKING IF THE NAME STARTS WITH A CAPITAL LETTER AND EVERYTHING FOLLOWING IS LOWERCASE
// doTest("Francis", true), doTest("Jean-Eluard", true), doTest("Le Mec", false)

// P - SPLIT THE STRING INTO ITS "prénoms composés" DELIMITED BY HYPENS TO BREAK UP TESTABLE PARTS
//    IF EVERY ELEMENT IN ARRAY IS A VALID NAME, RETURN TRUE. ELSE, RETURN FALSE

//    HELPER FUNCTION - isValidName(str)
//    loop through array
//    if i is zero, check if first character is lowercase. if lowercase, return false.
//    if i is > 0, check if character is capitalized. if capitalized, return false.
//    if neither of these conditionals trigger, return true

  function showMe(yourID) {
    let prenoms = yourID.split("-")
    return prenoms.every(el => isValidName(el))
  }
  
  // helper function to check if a string of all alphabet characters is capitalized correctly
  function isValidName(s) {
    if (s.length <= 1) return false
    for (let i = 0; i < s.length; i++) {
      if (i === 0 && s[i] === s[i].toLowerCase()) {
        return false
      }
      if (i > 0 && s[i] === s[i].toUpperCase()) {
        return false
      }
    }
    return true
  }
  