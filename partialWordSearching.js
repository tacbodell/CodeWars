//PREP
// P - A QUERY AND AN ARRAY OF STRINGS
// R - AN ARRAY OF ALL STRINGS WHICH CONTAIN THE QUERY
// E - If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
// P - use a .filter method to return a new array of all strings .tolowercase() which .includes() the query
function wordSearch(query, seq){
    let passingStrings = seq.filter(el => el.toLowerCase().includes(query.toLowerCase()))
    return passingStrings.length > 0 ? passingStrings : ["Empty"]
  }