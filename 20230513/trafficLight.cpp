//ou're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//
//omplete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//
//or example, when the input is green, output should be yellow.

#include <string>
#include <vector>

std::string update_light(std::string current) {
  if (current == "green") {
    return "yellow";
  } else if (current == "yellow") {
    return "red";
  } else if (current == "red") {
    return "green";
  } else {
    return "error: not a valid light color";
  }
}