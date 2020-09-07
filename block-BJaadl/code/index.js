let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr) {
  let length = 1;
  let finalValue = '';
  for (let wLength of arr) {
    if (wLength.length > length) {
      length = wLength.length;
      finalValue = wLength;
    }
  }
  return finalValue;
}
console.log(findLongestWord(words));

// - Convert the above array "words" into an array of length of word instead of word.
let lengthArr = [];
for (let wLength of words) {
  lengthArr.push(wLength.length);
}
console.log(lengthArr);

// - Create a new array that only contains word with at least one vowel.
function callback1(elm) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of vowels) {
    if (elm.indexOf(char) >= 0) {
      return true;
    }
  }
  return false;
}
console.log(words.filter(callback1));

// - Find the index of the word "rhythm"
console.log(words.indexOf('rhythm'));

// - Create a new array that contains words not starting with vowel.
function cb(elm) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of vowels) {
    if (char === elm[0]) {
      return false;
    }
  }
  return true;
}
console.log(words.filter(cb));

// - Create a new array that contains words not ending with vowel
function cback(elm) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of vowels) {
    if (char === elm[elm.length - 1]) {
      return false;
    }
  }
  return true;
}
console.log(words.filter(cback));

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr) {
  return arr.reduce((acc, elm) => acc + elm);
}
console.log(sumArray(numbers));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
console.log(numbers.map((elm) => elm * 3));

// - Create a new array that contains only even numbers
console.log(numbers.filter((elm) => elm % 2 === 0));

// - Create  a new array that contains only odd numbers.
console.log(numbers.filter((elm) => elm % 2 !== 0));

// - Create a new array that should have true for even number and false for odd numbers.
console.log(numbers.map((elm) => (elm % 2 === 0 ? true : false)));

// - Sort the above number in ascending order.
console.log(numbers.sort((a, b) => a - b));

// - Does sort mutate the original array?
// Yes

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arr) {
  return arr.reduce((acc, elm) => {
    return acc + elm / arr.length;
  }, 0);
}
console.log(averageNumbers(numbers));

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
console.log(strings.reduce(callback, 0));
function callback(acc, elm) {
  return acc + elm.length / strings.length;
}
