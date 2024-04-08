// PREP
//  P two int variables. n, the number of pancakes to be cooked, and m, the number of pancakes which may be cooked at once
//  R the amount of time it will take to cook n pancakes assuming no lost time flipping or transferring pancakes
//  E cookPancakes(4,2) {4}
//    cookPancakes(2,2) {2}
//    cookPancakes(1,2) {2}
//  P cookPancakes(n,m){
//      return (n/m) * 2
//  }


function cookPancakes(n, m) {
    if (n <= m) {
      return 2;
    } else {
      return Math.ceil((n/m) * 2);
    }
  }