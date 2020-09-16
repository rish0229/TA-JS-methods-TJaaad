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

// Create an array peopleName and store value of name key from persons array
let peopleName = persons.map((elm) => elm.name);
console.log(peopleName);

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map((elm) => elm.grade);
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map((elm) => elm.sex);
console.log(peopleSex);

// Log the filtered name of people in peopleName that starts with 'J' or 'P'
console.log(
  peopleName.filter((elm) => {
    if (elm[0] === 'J' || elm[0] === 'P') {
      return true;
    }
  })
);

// Log the length of filtered nam of people in peopleName that starts with 'A' and 'C'
console.log(
  peopleName.filter((elm) => {
    if (elm[0] === 'A' || elm[0] === 'C') {
      return true;
    }
  }).length
);

// Log all the filtered male ('M') in persons array
console.log(persons.filter((elm) => elm.sex === 'M'));

// Log all the filtered female ('F') in persons array
let female = persons.filter((elm) => elm.sex === 'F');
console.log(female);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(
  female.filter((elm) => {
    if (elm.name[0] === 'C' || elm.name[0] === 'J') {
      return true;
    }
  })
);

// Log all the even numbers from peopleGrade array
console.log(persons.filter((elm) => elm.grade % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((elm) => elm.name[0] === 'J'));

// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((elm) => elm.name[0] === 'P'));

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(
  persons.find(
    (elm) => elm.name[0] === 'J' && elm.grade > 10 && elm.sex === 'F'
  )
);

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((elm) => elm.sex === 'F');
console.log(femalePersons);

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((elm) => elm.sex === 'M');
console.log(malePersons);

// Find the sum of all grades and store in gradeTotal
let gradeTotal = persons.reduce((acc, elm) => acc + elm.grade, 0);
console.log(gradeTotal);

// Find the average grade
console.log(persons.reduce((acc, elm) => acc + elm.grade / persons.length, 0));

// Find the average grade of male
console.log(
  malePersons.reduce((acc, elm) => acc + elm.grade / malePersons.length, 0)
);

// Find the average grade of female
console.log(
  femalePersons.reduce((acc, elm) => acc + elm.grade / femalePersons.length, 0)
);

// Find the highest grade
console.log(
  persons
    .map((elm) => elm.grade)
    .sort((a, b) => a - b)
    .pop()
);

// Find the highest grade in male
console.log(
  malePersons
    .map((elm) => elm.grade)
    .sort((a, b) => a - b)
    .pop()
);

// Find the highest grade in female
console.log(
  femalePersons
    .map((elm) => elm.grade)
    .sort((a, b) => a - b)
    .pop()
);

// Find the highest grade for people whose name starts with 'J' or 'P'
console.log(
  persons
    .filter((elm) => {
      if (elm.name[0] === 'J' || elm.name[0] === 'P') {
        return true;
      }
    })
    .map((elm) => elm.grade)
    .sort((a, b) => a - b)
    .pop()
);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a, b) => a - b));

// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a, b) => b - a));

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a, b) => a - b));

// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort());

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());
