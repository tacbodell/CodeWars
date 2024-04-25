// PREP
// P - MATHEMATICAL EXPRESSION USING ONLY +-*/, LEFT TO RIGHT WITH GROUPINGS (). NUMBERS ARE WHOLE OR DECIMAL.
//      GROUPINGS MAY BE NESTED. THERE MAY BE WHITESPACE. NEGATIVE NUMBERS ARE POSSIBLE. NEGATIVE SYMBOLS MUST HAVE NO WHITESPACE
//      AFTER THEM.
// R - A FLOAT RESULT OF THE EXPRESSION. NO NEED FOR VALIDATION.
// E - ['1+1', 2],
//      ['1 - 1', 0],
//      ['-123', -123],
//      ['2 /2+3 * 4.75- -6', 21.25],
//      ['2 / (2 + 3) * 4.33 - -6', 7.732],
// P - const calc = function(str) {
//    expression = str;
//
//    loop through the length of str
//      check for any groupings. if grouping,
//        let groupStart, groupEnd, groupLength, groupResult
//        find the partner close grouping for the first group found. log the index of start and end grouping, and length of group (.....)
//        call function recursively for substring(str.substring(start index num, end index num)). store value in groupResult
//        let newstr = expression.split('')
//        newstr.splice(groupStart, groupLength, groupResult)
//        expression = newstr.join('')
//        set loop pointer "i" to groupEnd to skip the rest of the expression in case of nested groups
//        
//    remove whitespace from expression with split, filter, join
//
//    loop through the length of expression for mult/div
//       let num1, num2, expLength = 1, expStart, operator, opResult
//       if expression[i] === * or /
//          get operator from index
//          get num 1 using for loop backwards from * or / with concatenation. expLength++ & expStart = i for each successful number push. check for neg
//          get num 2 using for loop forwards from * or / with concatenation. expLength++ for each successful number push. check for neg
//          use switch case to evaluate either mult or div or 2 numbers. store in opResult
//          let newstr = expression.split('')
//          newstr.splice(expStart, expLength, opResult)
//          expression = newstr.join('')
//          reset expression iterator to correct index to not skip any operations
//     
//    loop through the length of expression to simplify operators
//       let 
//       if expression[i] === +
//          if expression[i+1 === -]
//            let newstr = expression.split('')
//            newstr.splice(i, 2, -)
//            expression = newstr.join('')    
//       if expression[i === -]
//          if expression[i+1 === -]
//            let newstr = expression.split('')
//            newstr.splice(i, 2, +)
//            expression = newstr.join('')   
//     
//    loop through the length of expression for add/sub
//       let num1, num2, expLength = 1, expStart, operator, opResult
//       if expression[i] === + or -
//          get operator from index
//          get num 1 using for loop backwards from + or - with concatenation. expLength++ & expStart = i for each successful number push. check for negative
//          get num 2 using for loop forwards from + or - with concatenation. expLength++ for each successful number push
//          use switch case to evaluate either add or sub or 2 numbers. store in opResult
//          let newstr = expression.split('')
//          newstr.splice(expStart, expLength, opResult)
//          expression = newstr.join('')
//          reset expression iterator to correct index to not skip any operations
//       }
//
//    return expression
//  }   



function calc(str) {
    let expression = str;
    
    // find groupings and evaluate them first with recursion
    for (let i = 0; i < expression.length; i++){
      if (expression[i] === "("){
        let groupStart = i;
        let numberOfGroups = 1;
        let groupEnd, groupLength, groupResult;
        for (let h = i+1; numberOfGroups !== 0; h++){
          if (expression[h] === "("){
            numberOfGroups++;
          }
          if (expression[h] === ")"){
            numberOfGroups--;
          }
          if (numberOfGroups === 0){
            groupEnd = h;
          }
        }
        groupLength = (groupEnd - groupStart) + 1;
        groupResult = calc(expression.substring(groupStart+1, groupEnd));
        
        let newString = expression.split('');
        newString.splice(groupStart, groupLength, groupResult);
        expression = newString.join('');
        
        i = 0;
      }
    }
    
    //remove whitespace from the expression
    let newString = expression.split('');
    newString = newString.filter(el => el != ' ');
    expression = newString.join('');
    
    //loop through expression to simplify operators
    for (i = 0; i < expression.length; i++){
      // handle +- instances
      if (expression[i] === '+'){
        if (expression[i+1] === '-'){
          let newStr = expression.split('');
          newStr.splice(i, 2, '-');
          expression = newStr.join('');
        }
      }
      //handle -- instances
      if (expression[i] === '-'){
        if (expression[i+1] === '-'){
          let newStr = expression.split('');
          newStr.splice(i, 2, (parseInt(expression[i-1]) > -1 && parseInt(expression[i-1]) < 10) ? '+' : '');
          expression = newStr.join('');
        }
      }
    }
  
    //loop through expression with no groups to evaluate mult/div
    for (let i = 0; i < expression.length; i++){
      let num1 = '', num2 = '', expLength = 1, expStart, expEnd, operator, opResult, addPlus = false;
      if (expression[i] === '*' || expression [i] === '/'){
        operator = expression[i];
        
        //get operand 1 by iterating backwards until selection is not a number, decimal, or negative sign
        for (let h = -1; parseInt(expression[i+h]) > -1 && parseInt(expression[i+h]) < 10 || expression[i+h] === '.' || expression[i+h] === '-'; h--){
          expStart = (i+h);
          num1 = expression[i+h] + num1;
          if (expression[i+h] === '-'){
            break;
          }
          if (i+h === 0){
            break;
          }
        }
        
        //get operand 2 by iterating forwards until selection is not a number, decimal, or negative sign
        for (let h = 1; parseInt(expression[i+h]) > -1 && parseInt(expression[i+h]) < 10 || expression[i+h] === '.' || expression[i+h] === '-' && h === 1; h++){
          expEnd = (i+h);
          num2 = num2 + expression[i+h];
          if (i+h === expression.length - 1){
            break;
          }
        }
        
        //perform arithmetic and store value
        switch (operator){
            case '*':
              opResult = parseFloat(num1) * parseFloat(num2);
              break;
            case '/':
              opResult = parseFloat(num1) / parseFloat(num2);
              break;
        }
        
        //simplify expression with result
        expLength = (expEnd - expStart + 1)
        let newStr = expression.split('');
        newStr.splice(expStart, expLength, opResult);
        expression = newStr.join('');
        
        //reset pointer to find next operation to evaluate
        i = 0;
      }  
    }
    
    //loop through expression to simplify operators
    for (i = 0; i < expression.length; i++){
      // handle +- instances
      if (expression[i] === '+'){
        if (expression[i+1] === '-'){
          let newStr = expression.split('');
          newStr.splice(i, 2, '-');
          expression = newStr.join('');
        }
      }
      //handle -- instances
      if (expression[i] === '-'){
        if (expression[i+1] === '-'){
          let newStr = expression.split('');
          newStr.splice(i, 2, '+');
          expression = newStr.join('');
        }
      }
    }
    
    //loop through expression with no groups to evaluate add/sub
    for (let i = 0; i < expression.length; i++){
      let num1 = '', num2 = '', expLength = 1, expStart, expEnd, operator, opResult;
      if (expression[i] === '+' || expression [i] === '-' && i !== 0){
        operator = expression[i];
        
        //get operand 1 by iterating backwards until selection is not a number, decimal, or negative sign
        for (let h = -1; parseInt(expression[i+h]) > -1 && parseInt(expression[i+h]) < 10 || expression[i+h] === '.' || expression[i+h] === '-'; h--){
          expStart = (i+h);
          num1 = expression[i+h] + num1;
          if (expression[i+h] === '-'){
            break;
          }
          if (i+h === 0){
            break;
          }
        }
        
        //get operand 2 by iterating forwards until selection is not a number, decimal, or negative sign
        for (let h = 1; parseInt(expression[i+h]) > -1 && parseInt(expression[i+h]) < 10 || expression[i+h] === '.' || expression[i+h] === '-' && h === 1; h++){
          expEnd = (i+h);
          num2 = num2 + expression[i+h];
          if (i+h === expression.length - 1){
            break;
          }
        }
        
        //perform arithmetic and store value
        switch (operator){
            case '+':
              opResult = parseFloat(num1) + parseFloat(num2);
              break;
            case '-':
              opResult = parseFloat(num1) - parseFloat(num2);
              break;
        }
        
        //simplify expression with result
        expLength = (expEnd - expStart + 1)
        let newStr = expression.split('');
        newStr.splice(expStart, expLength, opResult);
        expression = newStr.join('');
        
        //reset pointer to find next operation to evaluate
        i = 0;
      }  
    }
    
    return parseFloat(expression);
};