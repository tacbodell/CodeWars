//Write a function that calculates the average when given a vector of integers.

#include <vector>

double calcAverage(const std::vector<int>& values){
  float sumOfParts = 0;
  for (int i = 0; i < values.size(); i++) {
    sumOfParts += values[i];
  }
  return sumOfParts / values.size();
}