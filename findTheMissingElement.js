// PREP
// P - 2 arrays, one of which is a shuffled version of the other with one missing element
// R - the missing element as an int
// E - ([1, 2, 3], [1, 3]), 2, 'findMissing([1, 2, 3], [1, 3])')
// P - findMissing(arr1, arr2)
//  let bigger = arr1
//  let smaller = arr2
//  loop through smaller array
//    on every iteration, remove element from bigger array which matches the element from smaller array
//  return the only remaining element in bigger array



function findMissing(arr1, arr2) {
    let bigger = arr1, smaller = arr2
    for (let i = 0; i < smaller.length; i++) {
      const el = smaller[i]
      bigger.splice(bigger.indexOf(el), 1)
    }
    return bigger[0]
  }