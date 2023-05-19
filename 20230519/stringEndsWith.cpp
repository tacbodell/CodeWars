//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
//Examples:
//
//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false



#include <string>

//find size of ending
//find size of string
//subtract to find the first index needing to be checked
//using for loop, iterate from the first necessary index to the end of the string, checking if it matches
//    if it does not match, return false
//return true

bool solution(std::string const &str, std::string const &ending) {
  int endingIndex = str.size() - ending.size();
  for (int i = 0; i < ending.size(); i++) {
    if (str[endingIndex + i] != ending[i]) {
     return false; 
    }
  }
  return true;
}