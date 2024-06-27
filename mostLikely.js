//PREP
// P - 2 PROBABILITIES, EACH REPRESENTED AS A STRING OF 2 NUMBERS DELIMITED BY A COLON
// R - TRUE IF FIRST PROBABILITY IS MORE LIKELY, OTHERWISE RETURN FALSE
// E - '1:3', '1:2' RETURNS FALSE
// P - USE .SPLIT() TO GET THE INDIVIDUAL NUMERATORS/DENOMINATORS FOR EACH PROBABILITY
// DIVIDE EACH NUMERATOR BY THEIR DENOMINATOR TO GET THE DECIMAL REPRESENTATION OF EACH PROBABILITY
// COMPARE THE TWO VALUES WITH ?:, RETURN THE APPROPRIATE VALUE

function mostLikely(prob1,prob2){
    let [firstValues, secondValues] = [prob1.split(':'), prob2.split(':')]
    let [firstDecimal, secondDecimal] = [firstValues[0]/firstValues[1], secondValues[0]/secondValues[1]]
    return firstDecimal > secondDecimal ? true : false
  }