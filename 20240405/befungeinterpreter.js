function interpret(code) {
    //output array to be filled during program runtime
    let output = [];
    //memory stack for program
    let stack = [];
    //pointer to keep track of what instruction the program is executing
    let programPointerX = 0;
    let programPointerY = 0;
    //next direction for pointer to move
    let direction = 'right';
    //2d plane of instructions the pointer references
    const plane = buildPlane(code);
    //log variable for instruction to be read into
    let instruction = plane[programPointerY][programPointerX];
    
    // loop runs once per instruction
    for (i = 0; instruction != '@'; i++)
    {
        //handle instruction read in previous loop
        if (instruction >= 0 && instruction <= 9 && instruction != `\ `)
        {
          stack.push(instruction);
        } else
        {
          switch (instruction)
          {
            case '+':
              stack.push(stack.pop() + stack.pop());
              break;
            case '-':
              let minA = stack.pop();
              let minB = stack.pop();
              stack.push(minB - minA);
              break;
            case '*':
              stack.push(stack.pop() * stack.pop());
              break;
            case '/':
              let divA = stack.pop();
              let divB = stack.pop();
              if (divA == 0) {
                stack.push(0);
              } else {
                stack.push(divB/divA);
              }
              break;
            case '%':
              let modA = stack.pop();
              let modB = stack.pop();
              if (modA == 0) {
                stack.push(0);
              } else {
                stack.push(b % a);
              }
              break;
            case '!':
              if (stack.pop() == 0) {
                stack.push(1);
              } else {
                stack.push(0);
              }
              break;
            case '`':
              if (stack.pop() < stack.pop()) {
                stack.push(1);
              } else {
                stack.push(0);
              }
              break;
            case '?':
              let r = Math.floor(Math.random() * 4);
              if (r == 0) {direction = 'up'}
              else if (r == 1) {direction = 'down'}
              else if (r == 2) {direction = 'left'}
              else if (r == 3) {direction = 'right'};
              break;
            case '.':
              output.push(stack.pop());
              break;
            case ':':
              if (stack.length < 1){
                stack.push(0);
              } else {
                stack.push(stack[stack.length - 1]);
              }
              break;
            case '_':
              if (stack.pop() == 0){
                direction = 'right';
              } else {
                direction = 'left';
              }
              break;
            case '|':
              if (stack.pop() == 0){
                direction = 'down';
              } else {
                direction = 'up'
              }
              break;
            case '\"':
              let s = 'y';
              for (i = 0; s != '\"'; i++) {
                      // move program pointer
                  switch (direction) {
                      case 'up':
                        programPointerY > 0 ? programPointerY-- : programPointerY = plane.length - 1;
                        break;
                      case 'down':
                        programPointerY < plane.length - 1 ? programPointerY++ : programPointerY = 0;
                        break;
                     case 'left':
                       programPointerX > 0 ? programPointerX-- : programPointerX = plane[programPointerY].length - 1;
                       break;
                      case 'right':
                        programPointerX < plane[programPointerY].length - 1 ? programPointerX++ : programPointerX = 0;
                        break;
                  }
                s = plane[programPointerY][programPointerX];
                if (s != '\"'){
                  stack.push(s.charCodeAt(0));
                }
              }
              break;
            case '\\':
              let swA = stack.pop();
              let swB = stack.pop();
              stack.push(swA);
              stack.push(swB);
              break;
            case '$':
              stack.pop();
              break;
            case ',':
              output.push(String.fromCharCode(stack.pop()));
              break;
            case '#':
               // move program pointer
              switch (direction) {
                  case 'up':
                   programPointerY > 0 ? programPointerY-- : programPointerY = plane.length - 1;
                   break;
                  case 'down':
                    programPointerY < plane.length - 1 ? programPointerY++ : programPointerY = 0;
                   break;
                 case 'left':
                   programPointerX > 0 ? programPointerX-- : programPointerX = plane[programPointerY].length - 1;
                   break;
                 case 'right':
                   programPointerX < plane[programPointerY].length - 1 ? programPointerX++ : programPointerX = 0;
                    break;
             }
              break;
            case 'p':
              let pY = stack.pop();
              let pX = stack.pop();
              let pV = stack.pop();
              plane[pY][pX] = String.fromCharCode(pV);
              break;
            case 'g':
              let gY = stack.pop();
              let gX = stack.pop();
              if (typeof plane[gY][gX] === 'undefined'){
                stack.push(0);
              } else {
                stack.push(plane[gY][gX].charCodeAt(0));
              }
              break;
            case '^':
              direction = 'up';
              break;
            case 'v':
              direction = 'down';
              break;
            case '<':
              direction = 'left';
              break;
            case '>':
              direction = 'right';
              break;
          }
        }
      
        // move program pointer
        switch (direction) {
            case 'up':
              programPointerY > 0 ? programPointerY-- : programPointerY = plane.length - 1;
              break;
            case 'down':
              programPointerY < plane.length - 1 ? programPointerY++ : programPointerY = 0;
              break;
            case 'left':
              programPointerX > 0 ? programPointerX-- : programPointerX = plane[programPointerY].length - 1;
              break;
            case 'right':
              programPointerX < plane[programPointerY].length - 1 ? programPointerX++ : programPointerX = 0;
              break;
        }
      
        //read next instruction
        instruction = plane[programPointerY][programPointerX];
    }
  
    return output.join('');
  }
  
  // returns an executable jagged 2d array from a string of befunge code
  function buildPlane(str) {
    let plane = [[]];
    let rowNum = 0;
    for (i = 0; i < str.length; i++)
      {
        if (str[i] != `\n`){
          plane[rowNum].push(str[i]);
        } else {
          rowNum++;
          plane[rowNum] = [];
        }
      }
    return plane;
  }
  