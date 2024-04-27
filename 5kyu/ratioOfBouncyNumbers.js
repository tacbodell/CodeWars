//  PREP
//  PARAMETER - A DECIMAL VALUE FROM 0-1 REPRESENTING A RATIO OF BOUNCY NUMBERS FROM 0 - N
//  RETURN - THE NUMBER AT WHICH THE PARAMETER RATIO IS MET
//  Test.assertEquals(bouncyRatio(0.0), 1, 'A 0% bouncy ratio should be reached by 1');
//  Test.assertEquals(bouncyRatio(0.1), 132, 'A 10% bouncy ratio should be reached by 132');
//  Test.assertEquals(bouncyRatio(0.5), 538, 'A 50% bouncy ratio should be reached by 538');
//  Test.assertEquals(bouncyRatio(0.9), 21780, 'A 90% bouncy ratio should be reached by 21780');
//  Test.assertEquals(bouncyRatio(0.7284), 2825, 'A 72.84% bouncy ratio should be reached by 2825');
//  P - bouncyRatio(ratio) {
//    let currentRatio, bouncy, total;
//    loop to start checking bouncyNumbers
//      let forward = false, backward = false
//      check forward
//      
//      check backward
//      
//      if !forward and !backward,
//        bouncy++
//      
//      total++
//      currentRatio = bouncy / total
//      if currentRatio >= ratio, return n
//    }

function bouncyRatio(ratio) {
    if (ratio < 0 || ratio > 0.99) {throw 'error'};
    let currentRatio, bouncy = 0, total = 0;
    // loop checks every number for bouncy, then updates ratio accordingly
    for (let n = 1; true; n++){
      let increasing = true, decreasing = true;
      // check if n is increasing
      for (let i = 0; i < n.toString().length - 1; i++){
        if (n.toString()[i] > n.toString()[i+1]){
          increasing = false;
        }
      }
        
      // check if n is decreasing
      for (let i = 0; i < n.toString().length - 1; i++){
        if (n.toString()[i] < n.toString()[i+1]){
          decreasing = false;
        }
      }
      
      // if n was neither increasing or decreasing, increment the bouncy numbers counter
      if (!increasing && !decreasing){
        bouncy++;
      }
      
      // update the ratio of bouncy numbers to normal numbers
      total++;
      currentRatio = bouncy / total;
      
      // if ratio is met, return number that was just tested and added to ratio
      if (currentRatio >= ratio){
        return n;
      }
    }
  }