// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentence like "This is a collection of words"
console.log(strings.join(' '));

// - Add two new words in the strings array "called" and "sentence"
console.log(strings.push('called', 'sentence'));

// - Again convert the updated array (strings) into sentence like "This is a collection of words called sentence"
console.log(strings.join(' '));

// - Remove the first word in the array (strings)
strings.shift();

// - Find all the words that contain 'is' use string method 'includes'
console.log(strings.filter((elm) => elm.includes('is')));

// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((elm) => elm % 3 === 0));

// -  Sort Array from smallest to largest

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers

// - Find longest string in strings

// - Find all the even numbers
console.log(numbers.filter((elm) => elm % 2 === 0));

// - Find all the odd numbers
console.log(numbers.filter((elm) => elm % 2 !== 0));

// - Place a new word at the start of the array use (unshift)
strings.unshift('power');

// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the
let newStr = strings.map((elm, strings) => elm.length);
console.log(newStr, strings);

// - Find the sum of the length of words using above question
console.log(newStr.reduce((acc, elm) => acc + elm, 0));
// function fn(acc, elm) {
//   return acc + elm;
// }

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];

// - Find all customers whose firstname starts with 'J'
console.log(customers.filter((elm) => elm.firstname[0] === 'J'));
// function cb(elm) {
//   return elm.firstname[0] === 'J';
// }

// - Create new array with only first name
console.log(customers.map((elm) => elm.firstname));
// function cb(elm) {
//   return elm.firstname;
// }

// - Create new array with all the full names (ex: "Joe Blogs")
console.log(customers.map((elm) => elm.firstname + ' ' + elm.lastname));

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
