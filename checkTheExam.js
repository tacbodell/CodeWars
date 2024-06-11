// PREP
// P - 2 ARRAYS, ONE REPRESENTING AN ANSWER KEY, AND ANOTHER REPRESENTING THE STUDENT'S ACTUAL ANSWERS
// R - THE SCORE OF THE STUDENT'S ANSWERS, GIVEN CORRECT = +4, INCORRECT = -1, AND BLANK = +0. IF SCORE < 0 RETURN 0
// E - ["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6;  ["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7
// P - ITERATE THROUGH LENGTH OF KEY ARRAY
//      IF EMPTY STRING, DO NOTHING
//      ELSE IF MATCHES, +4
//      ELSE, -1
//      IF SCORE < 0 RETURN 0 ELSE RETURN SCORE


function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array2[i] === "") {
      } else if (array2[i] === array1[i]) {
        score += 4
      } else {
        score -= 1
      }
    }
    return score <= 0 ? 0 : score
  }