//  PREP 
//  P 2d array 
//  R bool determining if each little square, row, and column contains one and only one of each integer from 1 - n
//  E var badSudoku2 = new Sudoku([
//    [1,2,3,4,5],
//    [1,2,3,4],
//    [1,2,3,4],  
//    [1]
//   ]);
//    var goodSudoku1 = new Sudoku([
//  [7,8,4, 1,5,9, 3,2,6],
//  [5,3,9, 6,7,2, 8,4,1],
//  [6,1,2, 4,3,8, 7,5,9],
//
//  [9,2,8, 7,1,5, 4,6,3],
//  [3,5,7, 8,4,6, 1,9,2],
//  [4,6,1, 9,2,3, 5,8,7],
//  
//  [8,7,6, 3,9,4, 2,1,5],
//  [2,4,3, 5,6,1, 9,7,8],
//  [1,9,5, 2,8,7, 6,3,4]
//  ]);
//
//  P function Sudoku(data){
//     check if first row's length is positive and a perfect square
//     check if board height is the same as the length of first row
//     check if every row is the same length as first row
//     
//     littleSquareDimension = square root of firstRow.length 
//     
//     if (!checkLittleSquares(data, littleSquareDimension)), return false
//
//     if (!checkRowsColumns(data, rowDimension)), return false
//
//     return true
// 
// 
// 
// 
//     checkRowsColumns(data, rowDimension) {
//      numQueue = []
//      loop r runs rowDimension times
//      clear numQueue
//      loop i runs rowDimension times
//        check if numqueue has data[r][i]
//        if yes, return false
// 
//      loop c runs rowDimension times
//      clear numQueue
//       loop i runs rowDimension times
//       check if numqueue has data [i][c]
//       return false
//
//       return true
//    }
// 
//     checkLittleSquares(data, littleSquareDimension) {
//        numQueue = []
//        loop r runs littleSquareDimension times
//        loop c runs littleSquareDimension times
//          clear numQueue
//
//          for (s = 0; s < littleSquareDimension; s++)
//            for (i = 0; i < littleSquareDimension; i++){          
//              check if data[(r*littleSquareDimension) + s][(c*littleSquareDimension) + i] is in numQueue ? return false : load value into numQueue;           
//            }    
//          }
//
//       true
// 
//  }


let Sudoku = function(data) 
{
  return {
    isValid: function() {
      // check board structure
      if (data[0].length == 0 || Math.sqrt(data[0].length) % 1 != 0) {return false};
      if (data.length != data[0].length) {return false};
      let rowLength = data[0].length;
      for (i = 1; i < rowLength; i++) {
        if (data[i].length != rowLength) {return false};
      }
      
      let littleSquareDimension = Math.sqrt(rowLength);
      
      //check sudoku rules
      if (!checkNumLimit(data, rowLength)) {return false};
      if (!checkLittleSquares(data, littleSquareDimension)) {return false};
      if (!checkRowsColumns(data, rowLength)) {return false};
      
      return true;
    }
  };
};

function checkNumLimit(d, rLength) {
  for (r = 0; r < rLength; r++) {
    for (c = 0; c < rLength; c++) {
      if (typeof d[r][c] != 'number' || d[r][c] < 1 || d[r][c] > rLength) {
        return false;
      }
    }
  }
  
  return true;
}

function checkRowsColumns(d, rLength) {
  let numQueue = [];
  for (r = 0; r < rLength; r++){
    numQueue = [];
    for (i = 0; i < rLength; i++){
      if (numQueue.includes(d[r][i])) {
        return false;
      } else {
        numQueue.push(d[r][i]);
      }
    }
  }
  
  for (c = 0; c < rLength; c++) {
    numQueue = []
    for (i = 0; i < rLength; i++) {
      if (numQueue.includes(d[i][c])) {
        return false;
      } else {
        numQueue.push(d[i][c]);
      }
    }
  }
  
  return true;
}

function checkLittleSquares(d, squareDim) {
  let numQueue = [];
  for (r = 0; r < squareDim; r++) {
    for (c = 0; c < squareDim; c++) {
      numQueue = [];
      for (s = 0; s < squareDim; s++) {
        for (i = 0; i < squareDim; i++) {
          if (numQueue.includes(d[(r*squareDim) + s][(c*squareDim) + i])) {
            return false;
          } else {
            numQueue.push(d[(r*squareDim) + s][(c*squareDim) + i])
          }
        }
      }
    }
  }
  
  return true
}