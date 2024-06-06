// PREP
// P - A STRING, REPRESENTING A POSTCODE
// R - IF IT REPRESENTS A VALID BRITISH OR SLOVAKIAN POSTCODE, RETURN "GB" OR "SK" RESPECTIVELY. OTHERWISE, RETURN "Not valid"
// E -Valid British postcodes:
      //G4 7AH
      //G12 8NU   
//   Valid Slovakian postcodes:
   //  040 01
   //  810 08  
//  Invalid postcodes:
//    0765 820 - Should only have 3 numbers in the first segment, 2 numbers in the second segment
//    SE 21 7AA - Should only contain 2 segments
//    070  08 - Should have single space separating the two segments, not double space

// P - 
    // TRIM LEADING AND TRAILING SPACES
    // CHECK FOR SLOVAKIAN
        // WHEN SPLIT BY SPACES, MUST BE TWO ELEMENTS LONG
        // FIRST ELEMENT MUST BE 3 LONG, SECOND ELEMENT MUST BE TWO
        // ALL CHARACTERS IN ELEMENTS MUST BE NUMBERS

    // CHECK FOR BRITISH
        // WHEN SPLIT BY SPACES, MUST BE TWO ELEMENTS LONG
        // use if( char.toUpperCase() != char.toLowerCase() ) to detect if char is letter or number
        // ensure that first segment starts with 1 or 2 letters, then has 1 or 2 numbers
        // ensure that second segment starts with a digit, then 2 letters

    // if neither, return "Not valid"

    function whichPostcode(postcode){
        // trim leading and trailing whitespace
        let str = postcode.trim()
        
        // check if slovakian
        if (isSlovakian(str)) {
          return "SK"
        }
        
        // check if british
        if (isBritish(str)) {
          return "GB"
        }
        
        return "Not valid"
      }
      
      function isSlovakian(str) {
        let split = str.split(" ")
        // check number of spaces
        if (split.length != 2) {
          return false
        }
        // check length of each side of postcode
        if (split[0].length != 3 || split[1].length != 2) {
          return false
        }
        // check for non-digit-characters
        if (split[0].split("").some(el => el.toUpperCase() != el.toLowerCase()) || split[1].split("").some(el => el.toUpperCase() != el.toLowerCase())) {
          return false
        }
        
        return true
      }
      
      function isBritish(str) {
        let letters = 0
        let numbers = 0
        let split = str.split(" ")
        // check number of spaces
        if (split.length != 2) {
          return false
        }
        
        // check format of lefthand side
        let left = split[0]
        for (let i = 0; i < left.length; i++){
          if (left[i].toUpperCase() != left[i].toLowerCase()) {
            if (numbers > 0 || letters >= 2){
              return false
            }
            letters++
          } else {
            if (letters === 0 || numbers >= 2) {
              return false
            }
            numbers++
          }
        }
        
        // reset counters
        letters = 0
        numbers = 0
        
        // check format of righthand side
        let right = split[1]
        for (let i = 0; i < right.length; i++){
          if (right[i].toUpperCase() != right[i].toLowerCase()) {
            if (numbers != 1 || letters >= 2) {
              return false
            }
            letters++
          } else {
            if (letters != 0 || numbers >= 1) {
              return false
            }
            numbers++
          }
        }
        
        return true
      }