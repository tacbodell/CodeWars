//I have a cat and a dog.
//
//I got them at the same time as kitten/puppy. That was humanYears years ago.
//
//Return their respective ages now as [humanYears,catYears,dogYears]
//
//NOTES:
//
//humanYears >= 1
//humanYears are whole numbers only
//Cat Years
//15 cat years for first year
//+9 cat years for second year
//+4 cat years for each year after that
//Dog Years
//15 dog years for first year
//+9 dog years for second year
//+5 dog years for each year after that

#include <vector>

std::vector<int> humanYearsCatYearsDogYears(int humanYears) {
  int catYears = 0;
  int dogYears = 0;
  for (int i = humanYears; i > 0; i--) {
    if (i > 2) {
      catYears += 4;
      dogYears += 5;
    } else if (i > 1) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 15;
      dogYears += 15;
    }
  }
  return std::vector<int>{humanYears, catYears, dogYears};
}