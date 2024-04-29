function highAndLow(numbers){
    const arr = numbers
      .split(' ')
      .map(e => Number(e));
  
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
  }