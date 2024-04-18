function possiblyPerfect(key,answers) {
    let correct = []
    for (i = 0; i < key.length; i++){
      if (key[i] === '_') {
        
      } else if (key[i] === answers[i]) {
        correct.push(1);
      } else {
        correct.push(0);
      }
    }
    return (correct.every(e => e === 1) || correct.every(e => e === 0));
  }