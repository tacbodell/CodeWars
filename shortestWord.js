function findShort(s){
    const lengths = s.split(' ')
     .map(e => {return e.length});
    return Math.min(...lengths);
  }