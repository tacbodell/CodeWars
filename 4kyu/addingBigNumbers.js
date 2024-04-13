// PREP
// p - two BIG numbers as strings, not necessarily the same length
// r - return the sum of the two numbers as a string
// e - Test.assertEquals(add("1", "1"), "2");
//     Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
//     Test.assertEquals(add("888", "222"), "1110");
// p - const add = function(a,b){
//        first:string = biggest number length wise
//        second:string = littler number
//        carryBit:bool = bool false
//        sum = ''
//        lengthDifference = difference in length between the two numbers
//        
//        loop executes for the length of the smaller number going backwards {
//          let tempResult = parseInt(second[i]) + parseInt(first[i + lengthDifference])
//          
//          if carry bit is true, add 1 to temp result and turn off carry bit
//
//          if larger than or equal to 10, turn carry bit on. 
//          
//          sum = (tempResult % 10) + sum <- this concatenates the ones place of result into the beginning of sum
//        }
//        
//        if length difference is greater than 0,
//        loop executes lengthdifference number of times, backwards through first number to push rest of head to sum{
//          let tempResult = parseInt(first[i])
//        
//          if carry bit is true, add 1 to temp result and turn off carry bit
//
//          if larger than or equal to 10, turn carry bit on
//        
//          sum = (tempResult % 10) + sum <- this concatenates the ones place of result into the beginning of sum
//        }
//
//        if carry bit is true, sum = 1 + sum;
//
//        return sum
//      }


function add(a, b) {
    // if numbers have different numbers of digits, first is assigned to the longer number
    let first = 0, second = 0;
    if (a.length >= b.length) {
      first = a, second = b;
    } else {
      first = b, second = a;
    }
    // declare rest of variables
    let lengthDifference = first.length - second.length;
    let carryBit = false;
    let sum = '';
    
    // loop adds all digits that line up between first and second
    for (i = second.length - 1; i >= 0; i--){
      // add two digits together
      let tempResult = parseInt(second[i]) + parseInt(first[i + lengthDifference]);
      
      if (carryBit){
        tempResult++;
        carryBit = false;
      }
      
      if (tempResult >= 10){
        carryBit = true;
      }
      
      // concatenate result of two digits to the back of the sum string
      sum = (tempResult % 10) + sum;
    }
    
    if (lengthDifference > 0){
      // loop handles all digits outside of where the two operands line up
      for (i = lengthDifference - 1; i >= 0; i--){
        let tempResult = parseInt(first[i]);
        
        if (carryBit){
          tempResult++;
          carryBit = false;
        }
        
        if (tempResult >= 10){
          carryBit = true;
        }
        
      // concatenate result of two digits to the back of the sum string
      sum = (tempResult % 10) + sum;
      }
    }
    
    if (carryBit){
      sum = 1 + sum;
    }
    
    return sum;
  }