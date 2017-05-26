// All about arrays

// Create an array
// Examples of using the array literal syntax

// Empty
const empty = [];

// Numbers
const numbers = [1, 2, 3];

// Strings
const strings = ['a', 'b', 'c'];

// Array of objects
const objects = [{}, {}, {}];

// Array of arrays
const arrays = [[], [], []];


// How many elements are in the array?
const emptysLength = empty.length;
console.log("Empty array's length: ", emptysLength);

const numbersLength = numbers.length;
console.log("Number array's length: ", numbersLength);

// How can I access an element of an array?
const firstString = strings[0];
console.log("First string from String's array: ", firstString);
console.log(objects[2]);

// How can I change an element of an array?

numbers[2] = 4;
console.log('Numbers after changing 3 to 4', numbers);

// How can I add elements to an array on the right hand side?
console.log('strings before the push', strings);
strings.push('f'); // this is a mutator method
console.log('strings after the pushL ', strings);

// How to combine two arrays
const combined = numbers.concat(strings);
console.log('combined array of numbers and strings', combined);

// How can I find the position of an element in the array?
const findB = strings.indexOf('b');
console.log(findB);
const findK = strings.indexOf('k');
console.log(findK);

// What if I want a piece of an array?
const lastTwoNumbers = numbers.slice(numbers.length - 2);
console.log(lastTwoNumbers);
// A negative index can be used,
// indicating an offset from the end of the sequence.
// slice(-2) extracts the last two elements in the sequence.


// forEach - I want to iterate over through an array.
const resultOfForEach = numbers.forEach(function logger(number, index) {
  console.log('Numbers: ', number, index);
});
console.log('resultOfForEach: ', resultOfForEach);
//undefined as forEach doesn't return anything like charAt would

// FOREACH CHALLENGE: WRITE A FOREACH STATEMENT THAT PRINTS OUT
// EACH OF THE ELEMENTS AND IT'S POSITION FOR THE ARRAY X
const x = [4, 5, 6, 7, 8, 9];
x.forEach(function printer(number, index){
  console.log('x: ', number, index);
});

// Useful method for interview challenege to add every number in an array together
// Set a 'sum' variable to 0, use forEach to iterate through and add that
// element to the count like so:
// const sum = 0
// arr.forEach(function adder(number){
//    return sum + number;
// });
// console.log(sum);


// map - I want to get  a new array with changes to each element of the original
const stringLengths = strings.map(function lengthGetter(string, index){
  return string.length; //return means spit it out
});
console.log('stringLengths: ', stringLengths);


// MAP CHALLENGE: fill in yLengths to get array
// of lengths of the strings contained in the y array
const y = ['I', 'like', 'cheese', '?' ];
const yLengths = y.map(function lengthGetter(word){
  return word.length
});
console.log("Length of strings contained in y array: ", yLengths);


// filter - I want only certain elements of an array that pass a test.
// wanting to know if the length is equal to one
const lengthOfOneStrings = y.filter(function test(string, index){
  return string.length === 1;
});
console.log('lengthOfOneStrings: ', lengthOfOneStrings);
// though string.length === 1 by itself would output a boolean,
// it is the filter method that returns an array of
// elements that passed the test

// FILTER CHALLENGE: USE A FILTER STATEMENT AND THE Y ARRAY

const stringsWithLengthBiggerThanOne = strings.filter(function test(string, index){
  return string.length > 1
});
console.log(stringsWithLengthBiggerThanOne);



// reduce - I want to take an array to something simpler.
const sumOfNumbers = numbers.reduce(function adder(acc, next){
  console.log('acc: ', acc, 'next: ', next);
  return acc + next;
}, 0);

  console.log(sumOfNumbers);
