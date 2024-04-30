//  PREP
//  P - A MATRIX WITH A B, A CT, AND AN OPTIONAL K; A TIME IN SECONDS
//  R - A BOOLEAN T/F BASED ON WHETHER CT CAN GET TO THE BOMB AND DEFUSE IN TIME SECONDS  EITHER WITH OR WITHOUT K
//      CT CAN MOVE HORIZONTALLY, VERTICALLY, OR DIAGONALLY FOR 1 SECOND EACH
//  E -     const map1 = [
//      ["CT", "0", "0", "0", "0", "0", "0"],
//     ["0", "0", "0", "0", "0", "0", "0"],
//      ["0", "0", "0", "0", "0", "0", "0"],
//      ["0", "0", "0", "0", "0", "0", "0"],
//      ["0", "0", "0", "0", "0", "0", "0"],
//      ["0", "0", "0", "0", "0", "0", "0"],
//      ["0", "0", "0", "0", "0", "0", "0"],
//      ["0", "0", "0", "0", "0", "0", "B"]
//    ];
//    assert.strictEqual(bombHasBeenPlanted(map1, 7), false);
//  P - find location of ct, bomb, and kit
//      ctLocation = location of ct
//      bombLocation = location of bomb
//      kitLocation = location of kit if present, 0 if not
//      timeRemaining = time
//  
//      if kitLocation,
//        try to get to kit then bomb
//        let ctKitDistanceHorizontal, ctKitDistanceVertical
//        timeRemaining -= Math.max(ctKitDistanceHorizontal, ctKitDistanceVertical)
//        let kitBombDistanceHorizontal, kitBombDistanceVertical
//        timeRemaining -= Math.max(kitBombDistanceHorizontal, kitBombDistanceVertical)
//        timeRemaining -= 5
//        if timeRemaining > 0 return true
//  
//      else
//        try to get to bomb without kit
//        let ctBombDistanceHorizontal, ctBombDistanceVertical
//        timeRemaining -= Math.max(ctBombDistanceHorizontal, ctBombDistanceVertical)
//        timeRemaining -= 10
//        if timeRemaining > 0 return true  
//
//      return false

function bombHasBeenPlanted(map, time) {
    let ctLocation, bombLocation, kitLocation, timeRemaining = time;
    // find items in 2d array
    for (let r = 0; r < map.length; r++){
      for (let c = 0; c < map[0].length; c++){
        if (map[r][c] === 'CT') ctLocation = [r,c];
        if (map[r][c] === 'B') bombLocation = [r,c];
        if (map[r][c] === 'K') kitLocation = [r,c];
      }
    }
    
    if (kitLocation) {
      // get distances of CT from kit, subtract timeRemaining accordingly
      let ctKitDistanceHorizontal = Math.abs(ctLocation[1] - kitLocation[1]);
      let ctKitDistanceVertical = Math.abs(ctLocation[0] - kitLocation[0]);
      timeRemaining -= Math.max(ctKitDistanceHorizontal, ctKitDistanceVertical);
      // get distances of kit from bomb, subtract timeRemaining accordingly
      let kitBombDistanceHorizontal = Math.abs(kitLocation[1] - bombLocation[1]);
      let kitBombDistanceVertical = Math.abs(kitLocation[0] - bombLocation[0]);
      timeRemaining -= Math.max(kitBombDistanceHorizontal, kitBombDistanceVertical);
      
      if (timeRemaining >= 5) return true;
    }
    
    timeRemaining = time;
    
    // get distances of CT from bomb, subtract timeRemaining accordingly
    let ctBombDistanceHorizontal = Math.abs(ctLocation[1] - bombLocation[1]);
    let ctBombDistanceVertical = Math.abs(ctLocation[0] - bombLocation[0]);
    timeRemaining -= Math.max(ctBombDistanceHorizontal, ctBombDistanceVertical);
      
    if (timeRemaining >= 10) return true;
   
    console.log(timeRemaining)
    
    return false;
  }