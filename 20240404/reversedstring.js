// takes a string and returns it in reverse
function solution(str){
    let result = ``;
    array = Array.from(str);
    for (i = array.length - 1; i >= 0; i--)
      {
        result += array[i];
      }
    return result;
  }