// prep
// p - two arrays of b's and w's
// r - child: if the arrays have between 1 and 2 differences. grandchild: between 0 and 4
// e - const m1 = "BWBWBW";
//      const m2 = "BWBWBB";
//      const m3 = "WWWWBB";
//     Test.assertEquals(child(m1,m2), true);
//     Test.assertEquals(child(m1,m3), false);
//     Test.assertEquals(grandchild(m1, m3), true);
// p - child = function(bird1,bird2){
//        diff = 0;
//        iterate through array 1 and 2
//          check if bird1[i] = bird2[i]
//            if false, diff++
//        for child, return (diff === 1 || diff === 2)
//        for grand, return (diff >= 0 && diff <= 4)
//      }

var child = function(bird1, bird2) {
    let diff = 0;
    for (i = 0; i < bird1.length; i++){
      if (bird1[i] != bird2[i]){
        diff++;
      }
    }
    return (diff === 1 || diff === 2);
  }
  
  var grandchild = function(bird1, bird2) {
    if (bird1.length === 1){
      return (bird1[0] === bird2[0]);
    }
    let diff = 0;
    for (i = 0; i < bird1.length; i++){
      if (bird1[i] != bird2[i]){
        diff++;
      }
    }
    return (diff >= 0 && diff <= 4);
  }
  