// PREP
// P - 2 STRINGS WHICH MIGHT HAVE SOME OVERLAPPING CHARACTERS AT THE START AND END
// R - THE LONGEST POSSIBLE MERGE OF THE TWO STRINGS INTO ONE
// E - "abc" + "def" => "abcdef", "abaab" + "aabab" => "abaabab", "abcde" + "cdefgh" => "abcdefgh", "abc" + "abc" => "abc"
// P - LOOP THROUGH FIRST STRING FROM LAST INDEX TO FIRST INDEX
//      ON EACH ITERATION, CHECK IF THE END CHUNK FROM FIRST STRING MATCHES SAME LENGTH BEGINNING CHUNK FROM SECOND STRING
//      IF THEY DO, MARK CURRENT LENGTH OF CHUNK AND CONTINUE CHECKING UNTIL YOU HAVE THE LONGEST MATCHING CHUNK
//     
//     REMOVE LOGGED LENGTH FROM SECOND STRING, CONCATENATE, AND RETURN

function mergeStrings(first, second){
    let flaggedLength = 0
    for (let i = first.length - 1; i >= 0; i--) {
      const substringToCheck = first.substring(i)
      if (substringToCheck === second.substring(0, substringToCheck.length)) {
        flaggedLength = substringToCheck.length
      }
    }
    
    return first + second.slice(flaggedLength)
  }
  