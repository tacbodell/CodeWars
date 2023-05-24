// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
// 
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
// 
// Example:
// 
// solution(1000); // should return "M"
// Help:
// 
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.




#include <string>
#include <vector>

std::vector<int> breakIntoDigits(int num) {
  int thousand, hundred, ten, one;
  
  one = num % 10;
  if (num > 9) {
    ten = ((num - one)/10) % 10;
  }
  if (num > 99) {
    hundred = ((num - (num % 100))/100) % 10;
  }
  if (num > 999) {
    thousand = ((num - (num % 1000))/1000) % 10;
  }
  
  if (num > 999) {
    return {thousand, hundred, ten, one};
  } else if (num > 99) {
    return {hundred, ten, one};
  } else if (num > 9) {
    return {ten, one};
  }
  return {one};
}

std::string writeThousand(int num) {
  std::vector<std::string> returnValues = {"M", "MM", "MMM"};
  return returnValues[num - 1];
}

std::string writeHundred(int num) {
  std::vector<std::string> returnValues = {"C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
  return returnValues[num - 1];
}

std::string writeTen(int num) {
  std::vector<std::string> returnValues = {"X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
  return returnValues[num - 1];
}

std::string writeOne(int num) {
  std::vector<std::string> returnValues = {"I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
  return returnValues[num - 1];
}

std::string solution(int number){
  std::vector<int> digits = breakIntoDigits(number);
  
  if (number > 999) {
    return writeThousand(digits[0]) + writeHundred(digits[1]) + writeTen(digits[2]) + writeOne(digits[3]);
  }
  if (number > 99) {
    return writeHundred(digits[0]) + writeTen(digits[1]) + writeOne(digits[2]);
  }
  if (number > 9) {
    return writeTen(digits[0]) + writeOne(digits[1]);
  }
  return writeOne(digits[0]);
}