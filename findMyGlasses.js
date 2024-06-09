function findGlasses(arr){
    for (let i = 0; i < arr.length; i++) {
      let glassesCheck = false
      let hasBeam = false
      for (let c = 0; c < arr[i].length; c++) {
        if (glassesCheck && hasBeam && arr[i][c] === "O") {
          return i
        }
        if (glassesCheck && arr[i][c] !== "-") {
          glassesCheck = false
          hasBeam = false
        }
        if (glassesCheck && arr[i][c] === "-") {
          hasBeam = true
        }
        if (arr[i][c] === "O") {
          glassesCheck = true
        }
      }
    }
  }