function diff(a, b){
    let cache = [];
    a.forEach(e => {
      if (!b.includes(e)){
        cache.push(e);
      }
    })
    b.forEach(e => {
      if (!a.includes(e)){
        cache.push(e);
      }
    })
    let noDuplicates = (new Set(...cache)).toArray;
    return noDuplicates.sort();
  }