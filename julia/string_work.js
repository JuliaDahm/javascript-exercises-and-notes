// This is all about strings

const aString = 'Testing testing 123';

// What is the length of the string?

const stringLength = aString.length; //This is *property* access

console.log('stringLength is: ', stringLength);

// What is the first letter in the string?

const firstChar = aString.charAt(0);

console.log('The first letter: ', firstChar);

// What is the seventh letter?

const seventhChar = aString[6];

console.log('The seventh letter: ', seventhChar);

// How to put stirngs together:

const stringsTogether = aString.concat('!');
const stringsTogetherAgain = aString + '!';
console.log('Strings Together: ', stringsTogether);
console.log('Strings Togeher Again: ', stringsTogetherAgain);
console.log('aString: ', aString);

// FACT: Strings are immutable.
// You can get new ones, but you can't modify existing ones

// Get the first five characters of a string.

console.log(aString.substring(0, 4));

// How to split a sentence into seperate words

const words = aString.split(' ');
console.log('Words: ', words);

// Find the number of words in the string?
const numberOfWords = aString.split(' ').length;
console.log('Number of Words: ', numberOfWords);

// How many spaces are in the string?

const numberOfSpaces = numberOfWords - 1;
console.log(numberOfSpaces);

// What is the longest word in the string?



// How do I reverse a string?

const reversedString = aString.split('').reverse().join('');
console.log('Reversed String: ', reversedString);
