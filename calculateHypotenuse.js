// PREP
// P - 2 integers a and b
// R - the length of the hypotenuse of a right triangle with sides of length a and b
// E - calculateHypotenuse(3,4) === 5
// P - function (a,b) {
//  if a or b is not type int
//    throw error
//  if a or b is less than or equal to 0
//    throw error
//    
//  return square root of a^2 + b^2

function calculateHypotenuse(a, b) {
    if (typeof a != 'number' || typeof b != 'number'){
      throw 'error';
    }
    if (a <= 0 || b <= 0){
      throw 'error';
    }
    if (Number.isNaN(a) || Number.isNaN(b)){
      throw 'error';
    }
    return Math.round(Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) * 1000) / 1000;
  }