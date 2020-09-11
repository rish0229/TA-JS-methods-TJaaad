let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: You can only use reduce method to solve this exercise:

// Find the average grade
console.log(persons.reduce((acc, elm) => acc + elm.grade / persons.length, 0));

// Find the average grade of male
let malePersons = persons.filter((elm) => elm.sex === 'M');
console.log(
  malePersons.reduce((acc, elm) => acc + elm.grade / malePersons.length, 0)
);

// Find the average grade of female
let femalePersons = persons.filter((elm) => elm.sex === 'F');
console.log(
  femalePersons.reduce((acc, elm) => acc + elm.grade / femalePersons.length, 0)
);

// Find the highest grade
console.log(
  persons.reduce((acc, elm) => {
    if (elm.grade > acc) {
      acc = elm.grade;
    }
    return acc;
  }, 1)
);

// Find the highest grade in male
console.log(
  malePersons.reduce((acc, elm) => {
    if (elm.grade > acc) {
      acc = elm.grade;
    }
    return acc;
  }, 0)
);

// Find the highest grade in female
console.log(
  femalePersons.reduce((acc, elm) => {
    if (elm.grade > acc) {
      acc = elm.grade;
    }
    return acc;
  }, 0)
);

// Find the highest grade for people whose name starts with 'J' or 'P'
let nameJorP = persons.filter((elm) => {
  if (elm.name[0] === 'J' || elm.name[0] === 'P') {
    return true;
  }
});
console.log(
  nameJorP.reduce((acc, elm) => {
    if (elm.grade > acc) {
      acc = elm.grade;
    }
    return acc;
  }, 0)
);

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 
Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array.

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

let obj = fruitBasket.reduce((acc, elm) => {
  if (acc[elm]) {
    acc[elm] += 1;
  } else {
    acc[elm] = 1;
  }
  return acc;
}, {});
console.log(obj);

/* 
Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times that fruit appeared.

Output: 
[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array
console.log(
  data.reduce((acc, elm) => {
    for (let char of elm) {
      acc.push(char);
    }
    return acc;
  }, [])
);

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array
console.log(
  dataTwo.reduce((acc, elm) => {
    for (let char of elm) {
      if (typeof char == 'object') {
        for (let char2 of char) {
          acc.push(char2);
        }
      } else {
        acc.push(char);
      }
    }
    return acc;
  }, [])
);

/*
Create these functions which accepts a number value and returns a number value:
  - 'increment' adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

// let pipeline = [
//   increment,
//   double,
//   decrement,
//   decrement,
//   double,
//   triple,
//   half,
//   increment,
// ];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
increment3) - return 4
  double(4) - return 8
  decrement(8) - return 7
  ...
*/

// let pipeline2 = [
//   increment,
//   half,
//   double,
//   decrement,
//   decrement,
//   triple,
//   double,
//   triple,
//   half,
//   increment,
//   triple,
// ];

// Find the output using pipeline2 the initial value if 8
