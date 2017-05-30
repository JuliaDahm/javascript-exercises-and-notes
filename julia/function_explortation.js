/*jshint esversion: 6 */
// Will discontinue linter messages warning against cross browser usability

// So what are functions?
// It is a  ways of bundling a piece of repetitive code into something reusable

// Function Examples

function launchTheMissiles(){
  console.log('Launching the missiles');
}

// Pure function version
function square(num) {
  return num * num;
}
//semi-colon not needed, because it is not stored in variable, is standalone
// so easily read as own statement

// Impure version
// function square(num) {
//   // launchTheMissiles();
//   return num * num;
// }
// This affects other parts of code,
// rather than the simple input output like before

const squareOfTwo = square(2);
console.log('squareOfTwo: ', squareOfTwo);

// Side Note: Reference Error regards a missing/undefined variable
// or a mispelled variable


// Assign functions to variables
const cube = function cube(num){
  return num * num * num;
};                         //semi-colon at end of this because
                          // variable + func. declaration = statement

// Same function using FAT ARROW syntax
// const cubeFatArrow = (num) => {
//   return num * num * num;
// };

// Alternatively, in simpler form
const cubeFatArrow = num => num * num * num;
// Helpful for array, map, forEach, reduce and filter

console.log('Cube of 2 before: ', cube(2));
console.log('cubeFatArrow: ', cubeFatArrow(2));
