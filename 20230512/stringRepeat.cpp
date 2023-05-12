//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//
//Examples (input -> output)
//6, "I"     -> "IIIIII"
//5, "Hello" -> "HelloHelloHelloHelloHello"

#include <string>

std::string repeat_str(size_t repeat, const std::string& str) {
  std::string ret;
  for (int i = 0; i < repeat; i++) {
    ret += str;
  }
  return ret;
}