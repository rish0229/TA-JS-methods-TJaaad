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
[...strings].shift();

// - Find all the words that contain 'is' use string method 'includes'
let allIs = strings.filter((string) => string.includes('is'));

// - Find all the words that contain 'is' use string method 'indexOf'
console.log(strings.filter((elm) => elm.indexOf('is') > -1));

// - Check if all the numbers in numbers array are divisible by three use array method (every)
console.log(numbers.every((elm) => elm % 3 === 0));

// -  Sort Array from smallest to largest
console.log([...numbers].sort((a, b) => a - b));

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
console.log([...numbers].sort((a, b) => a - b).pop());

// - Find longest string in strings
console.log(
  [...strings]
    .map((elm) => elm.length)
    .sort((a, b) => a - b)
    .pop()
);

// - Find all the even numbers
console.log(numbers.filter((elm) => elm % 2 === 0));

// - Find all the odd numbers
console.log(numbers.filter((elm) => elm % 2 !== 0));

// - Place a new word at the start of the array use (unshift)
console.log(strings.unshift('power'));

// - Make a subset of numbers array [18,9,7,11]
console.log(numbers.slice(3, 7));

// - Make a subset of strings array ['a','collection']
console.log(strings.slice(3, 5));

// - Replace 12 & 18 with 1221 and 1881
console.log(
  numbers.map((elm) => {
    if (elm === 12) {
      return 1221;
    } else if (elm === 18) {
      return 1881;
    } else {
      return elm;
    }
  })
);

// - Replace words in strings array with the length of the
let newStr = strings.map((elm, strings) => elm.length);
console.log(newStr, strings);

// - Find the sum of the length of words using above question
console.log(newStr.reduce((acc, elm) => acc + elm, 0));

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];

// - Find all customers whose firstname starts with 'J'
console.log(customers.filter((elm) => elm.firstname[0] === 'J'));

// - Create new array with only first name
console.log(customers.map((elm) => elm.firstname));

// - Create new array with all the full names (ex: "Joe Blogs")
let fullNames = customers.map((elm) => elm.firstname + ' ' + elm.lastname);

// - Sort the array created above alphabetically
console.log([...fullNames].sort());

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomer = customers.filter((elm) => {
  if (
    elm.firstname.toLowerCase().includes('a') ||
    elm.firstname.toLowerCase().includes('i') ||
    elm.firstname.toLowerCase().includes('o') ||
    elm.firstname.toLowerCase().includes('e') ||
    elm.firstname.toLowerCase().includes('u')
  ) {
    return true;
  } else {
    return false;
  }
});
console.log(vowelCustomer);
