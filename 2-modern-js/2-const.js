// Scalar values
// immutable 
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects
// mutable objects and arrays
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

numbers[2]=8

console.log(numbers);

// to make arrays and objects immutable at 1st level only.
// Nested objects and arrays are still mutable
Object.freeze(numbers)

numbers[2]=10

console.log(numbers);