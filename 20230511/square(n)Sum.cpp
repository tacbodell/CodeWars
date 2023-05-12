//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//For example, for [1, 2, 2] it should return 9 because 
//
//1^2 + 2^2 + 2^2 = 9

#include <vector>

using namespace std;

int square_sum(const std::vector<int>& numbers) // returns int, accepts vector as argument
{
    int sum = 0;  //initialize sum variable
    for (int i = 0; i < numbers.size(); i++) {  //iterate through array
      sum = sum + (numbers[i] * numbers[i]);  //add square of every element in array to sum
    }
    return sum; //return total
}