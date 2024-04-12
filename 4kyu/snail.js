//  PREP
//  P - 2D ARRAY OF NXN SQUARES
//  R - ALL ELEMENTS FROM INPUT, ARRANGED IN CLOCKWISE FASHION FROM [0][0]. IF BOARD IS 0X0, RETURN []
//  E - array = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
//        snail(array) #=> [1,2,3,6,9,8,7,4,5]
//  P - snail(array){
//        if (array[0].length === 0) return [];
//        tileLog = []
//        answer = []
//        direction = '>';
//        tileHorizontal = 0;
//        tileVertical = 0;
//
//        loop executes until next space is invalid && next space after turning is invalid {
//          if next space is invalid, change direction
//          
//          move forward by one
//          log current space in tileLog and answer
//        }
//  
//        return answer
//      }
//  
//      const isValidSnailTile = function(arr, q, hor, ver, dir)
//        switch(dir){
//          depending on direction, return if next tile is valid in arr && not in tilequeue
//        }

const snail = function(array) {
    if (array[0].length === 0) return [];
    if (array[0].length === 1) return [array[0][0]];
    let tileLog = new Set();
    tileLog.add('0,0'); // Store initial position as a string
    let answer = [array[0][0]];
    let direction = '>';
    let tileHorizontal = 0;
    let tileVertical = 0;
    
    while (isValidSnailTile(array, tileLog, tileHorizontal, tileVertical, direction) || isValidSnailTile(array, tileLog, tileHorizontal, tileVertical, nextDirectionClockwise(direction))){
      //change direction if necessary
      if (!isValidSnailTile(array, tileLog, tileHorizontal, tileVertical, direction)){
        direction = nextDirectionClockwise(direction);
      }
          
      //handle movement
      switch(direction){
        case '>':
          tileHorizontal++;
          break;
        case 'v':
          tileVertical++;
          break;
        case '<':
          tileHorizontal--;
          break;
        case '^':
          tileVertical--;
          break;
      }
      
      tileLog.add(`${tileVertical},${tileHorizontal}`); // Store current position as a string
      answer.push(array[tileVertical][tileHorizontal]);
    }
    
    return answer;
  }
  
  const nextDirectionClockwise = function(dir){
    switch(dir){
      case '>':
        return 'v';
      case 'v':
        return '<';
      case '<':
        return '^';
      case '^':
        return '>';
      default:
        return 0;
    }
  }
  
  const isValidSnailTile = function(arr, q, hor, ver, dir) {
      let newHor = hor;
      let newVer = ver;
  
      switch(dir){
          case '>':
              newHor++;
              break;
          case 'v':
              newVer++;
              break;
          case '<':
              newHor--;
              break;
          case '^':
              newVer--;
              break;
      }
  
      // Check if new position is within array bounds and not visited before
      return (
          newVer >= 0 && newVer < arr.length &&
          newHor >= 0 && newHor < arr[0].length &&
          !q.has(`${newVer},${newHor}`)
      );
  }