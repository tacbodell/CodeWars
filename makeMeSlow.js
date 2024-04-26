function makeMeSlow() {
    // This function is too fast!
        for (let n = 0; n < 1000000; ++n) {
          let array = [];
          for (let a = 0; a < 1250; ++a) {
            array[a] = a;
          }
        }
  }