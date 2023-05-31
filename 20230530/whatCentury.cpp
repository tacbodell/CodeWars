// make a function that returns the century that a given year is in

function century(year) {
  if (year % 100 == 0) {
    return year / 100
  }
  return (year - (year % 100)) / 100 + 1;
}