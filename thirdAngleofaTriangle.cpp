//You are given two interior angles (in degrees) of a triangle.
//
//Write a function to return the 3rd.
//
//Note: only positive integers will be tested.
//
//https://en.wikipedia.org/wiki/Triangle

class Triangle {  //object class Triangle
public:           //allows method to be called from outside the Triangle class
  static int otherAngle(int a, int b) {
    return 180 - a - b;
  };
};