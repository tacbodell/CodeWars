//PREP
// P - 2 strings of the same length
// R - an array of numbers containing all indexes where the two strings do not match
// E - String 1: "abcdefg"
//      String 2: "abcqetg"
//      Returns: [3,5]
// P -  DECLARE EMPTY ARRAY, "INDEXES"
//      ITERATE THROUGH INDEXES 0 -> string length - 1
//      ON EACH ITERATION, CHECK IF THE CHARACTER IN BOTH STRINGS AT THAT INDEX MATCH
//      IF FALSE, PUSH CURRENT INDEX TO INDEXES ARRAY
//      AT END OF ITERATIONS, RETURN INDEXES
function spot(s1,s2){
    let indexes = []
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        indexes.push(i)
      }
    }
    return indexes
  }