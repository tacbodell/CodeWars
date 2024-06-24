//PREP
//P - AN ARRAY OF STRINGS, EACH OF WHICH IS TWO NAMES SEPARATED BY A SPACE
//R - THE ARRAY OF STRINGS, SORTED BY LAST NAME IN ALPHABETICAL ORDER
//E - 
//P - LET SORTED = reindeer names
//    use sort function to sort each item by subtracting last names and comparing. use split() on each string with space delimiter to get last name
function sortReindeer(reindeerNames) {
    return reindeerNames.sort((a, b) => {
      return a.split(" ")[1] >= b.split(" ")[1] ? 1 : -1
    })
}