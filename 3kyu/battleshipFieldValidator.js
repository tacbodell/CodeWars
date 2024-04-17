//  PREP
//  p = 10x10 2d array, with 1's representing ship tiles
//  r = true if positions are valid, false if not
//  e = describe("Sample Tests", () => {
//    it("Must return true for valid field", () => {
//        doTest([
//            [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
//            [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//            [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//            [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//            [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//            [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
//            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//        ], true);
//    });
//  p = 
//  const validateBattlefield = function(field){
//    let object with properties and values for numbers of valid ships remaining
//    let set tiles which have been traversed
//  
//    two for loops, first v and second h, which iterate through field from left - right, top - bottom
//      if tile === 1 and tile is not in set of traversed tiles
//        if tile is not on right edge of board
//          if tile to the right is 1
//            let shipLength = 0;
//            iterate to the right until tile === 0 or out of bounds
//              depending on length, either reduce corresponding ship in object or return false
//              check for contact around ship on valid tiles
//  
//          else if tile to the bottom is 1
//            let shipLength = 0;
//            iterate downward until next tile is 0 or out of bounds
//              depending on length, either reduce corresponding ship in object or return false
//              check for contact around ship on valid tiles
//  
//          else decrement the 1 length ship in object
//
//    return (all object properties are zero?)
//  }

function validateBattlefield(field) {
    let remainingShips = { battleship:1, cruiser:2, destroyer:3, submarine:4 };
    let traversedTiles = new Set([]);
    
    // iterate through field
    for (v = 0; v < 10; v++){
      for (h = 0; h < 10; h++){
        console.log(`${v}, ${h}`)
        // detect a ship
        if (field[v][h] === 1 && !traversedTiles.has(v.toString() + h.toString())){
          // check to the right
          if (h != 9){
            if (field[v][h+1] === 1){
              let shipLength = 0;
              for (i = 0; h+i <= 9; i++){
                if (field[v][h+i] === 0){break;};
                shipLength++;
                traversedTiles.add(v.toString() + (h+i).toString());
              }
              switch (shipLength){
                  case 2:
                    remainingShips.destroyer--;
                    break;
                  case 3:
                    remainingShips.cruiser--;
                    break;
                  case 4:
                    remainingShips.battleship--;
                    break;
                  default:
                    return false;
              }
              //search for contact around ship
              for (i = -1; i <= shipLength && h+i <= 9; i++) {
                if (v-1 >= 0 && h + i >= 0 && h + i <= 9){
                  if (field[v-1][h+i] === 1) {return false;}
                }
                if (v+1 <= 9 && h + i >= 0 && h + i <= 9){
                  if (field[v+1][h+i] === 1) {return false;}
                }
              }
            }
          }
          // check downward
          if (v != 9){
            if (field[v+1][h] === 1){
              let shipLength = 0;
              for (i = 0; v+i <= 9; i++){
                if (field[v+i][h] === 0){break;};
                shipLength++;
                traversedTiles.add((v+i).toString() + h.toString());
              }
              switch (shipLength){
                  case 2:
                    remainingShips.destroyer--;
                    break;
                  case 3:
                    remainingShips.cruiser--;
                    break;
                  case 4:
                    remainingShips.battleship--;
                    break;
                  default:
                    return false;
              }
              //search for contact around ship
              for (i = -1; i <= shipLength && v+i <= 9; i++) {
                if (v + i >= 0 && v + i <= 9 && h - 1 >= 0){
                  if (field[v+i][h-1] === 1) {return false;}
                }
                if (v + i >= 0 && v + i <= 9 && h + 1 <= 9){
                  if (field[v+i][h+1] === 1) {return false;}
                }
              }
            }
          }
          // add a submarine
          if (!traversedTiles.has(v.toString() + h.toString())){
            traversedTiles.add(v.toString() + h.toString());
            remainingShips.submarine--;
          }
        } 
      }
    }
    
    // return false if wrong number of ships. else, return true  
    for (const [ship,value] of Object.entries(remainingShips)){
      if (value !== 0){
        return false;
      };
    }
    
    return true; 
}