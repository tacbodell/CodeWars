// PREP
// P - n, the index of an element to retrieve from a complete dblLinear sequence array
// R - the element housed at that index
// E - u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
//      testing(dblLinear(10), 22)
//      testing(dblLinear(0), 1)
// P - function dblLinear(n) {
//      s = new set [1]
//      numberToProcess = 1;
//      loop builds 2 elements per execution. runs n times
//        while (!s.has(numberToProcess)){
//          numberToProcess++
//         }
//        set.add(2 * s[i] + 1)
//        set.add(3 * s[i] + 1)
//      
//      convert to array
//      return element at n 
//     }


function dblLinear(n) {
    let s = new Set([1]);
    let numberToProcess = 1;
    for (i = 0; i < n; i++){
      while(!s.has(numberToProcess)){
        numberToProcess++;
      }
      s.add(2 * numberToProcess + 1);
      s.add(3 * numberToProcess + 1);
      numberToProcess++;
    }
  
    const a = Array.from(s);
    a.sort((a,b) => {return a - b});
    return a[n];
}