// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
// 
// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
// 
// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):
// 
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
// 
// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
// 
// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
// 
// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
// 
// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr){
  // Set up two arrays to represent opposite cardinal directions
  let directions = ['NORTH', 'SOUTH', 'EAST', 'WEST'];
  let directionsOpposite = ['SOUTH', 'NORTH', 'WEST', 'EAST'];

  functionRan = true  // Counter variable to check if any elements were deleted in loop instance
  while (functionRan === true) {  // loop will run until no more elements can be deleted
    functionRan = false
    arr.forEach((e,i,a) => {
      if (directions.indexOf(e) === directionsOpposite.indexOf(a[i + 1])) { // if two neighboring elements are opposites
        arr.splice(i, 2); // delete two elements from array of directions
        functionRan = true  //  & run loop again
      }
    })
  }
  
  return arr
}