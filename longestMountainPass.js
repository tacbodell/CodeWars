//PREP
//P mountains, an array of integers representing height; E - starting energy level
//R returns an array with 2 ints: the maximum length of route you can take, and the starting index of the route
//E longestMountainPass([10,10,10], 0), returns [3,0];
//  longestMountainPass([1,5,4,3,9,6,7], 5), returns [3,0];
//  longestMountainPass([1,5,4,3,9,6,7], 7), returns [5,1];
//P function longestMountainPass(mountains, E) {
    // let maxLength, startIndex, tempLength
    // loop
    //  try starting index i
    //  iterate through mountains while incrementing tempLength
    //  when you can no longer move through mountains {
    //    if (tempLength > maxLength) {
    //      maxLength = tempLength;
    //      startIndex = i;
    //    }
    //  }
    //
    //
    // return [maxLength, startIndex];
    //}

    function longestMountainPass(mountains, E) {
        let maxLength = 0, startIndex = 0, tempEnergy, tempLength;
        // iterates through mountains array
        for (i = 0; i < mountains.length; i++){
          // test each individual starting index's route
          tempEnergy = E;
          tempLength = 1;
          for (r = 0; tempEnergy >= (mountains[i+r+1] - mountains[i+r]); r++){
            // if step costs energy, subtract from tempEnergy
            if ((mountains[i+r+1] - mountains[i+r]) > 0){
              tempEnergy -= (mountains[i+r+1] - mountains[i+r]);
            } 
            tempLength = r + 2;
          }
          if (tempLength > maxLength){
            maxLength = tempLength;
            startIndex = i;
          }
        }
        return [maxLength, startIndex];
    }
    