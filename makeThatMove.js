// PREP
// P string of dots, o's, p's, and q's
// R o, q, p, or x depending on how your walk goes
// E [ ".....",  "p" ]
//   [ "..o..",  "o" ],
//   [ "....p......q.....p..q.",  "x" ]
//   [ "....p............p..q.",  "q" ],
// P  function move(s) { 
//  let a = Array.from(s);
//  pos = 0;
//  usedTiles = [];
//  direction = 1 (or -1)
//  
//  loop while while pos is in bounds of array, pos += direction
//    if a[i] is in used tiles, return x
//    switch(a[i]){ 
//      case o return o , log index
//      case p i = a.indexOf('p', i + 1), direction = 1, log index
//      case q i = a.lastIndexOf('q', i - 1), direction = -1, log index
//    }
//  
//  if (pos < 0, ret q) else (ret p)


function move(s) {
    let a = Array.from(s);
    let pos = 0;
    let usedTiles = [];
    let direction = 1;
    
    while (pos >= 0 && pos < a.length){
      if (usedTiles.includes(pos)){
        return 'x';
      }
      switch(a[pos]){
          case 'p':
            usedTiles.push(pos);
            pos = a.indexOf('p', pos + 1);
            if (pos == -1){
              pos = a.length;
            }
            direction = 1;
            break;
          case 'q':
            usedTiles.push(pos);
            if (pos > 0) {
              pos = a.lastIndexOf('q', pos - 1);
            } else {
              pos = -1;
            }
            direction = -1;
            break;
          case 'o':
            return 'o';
            break;
      }
      
      if (pos >= 0 && pos < a.length){
        pos += direction;
      }
    }
    
    return (pos < 0 ? 'q' : 'p');
  }