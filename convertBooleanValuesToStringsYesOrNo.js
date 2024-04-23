function boolToWord( b ){
    if (typeof b != 'boolean'){
      throw 'Argument type is not bool';
    }
    
    return b === true ? "Yes" : "No"
  }