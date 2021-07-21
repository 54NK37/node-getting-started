// split array into 2 arrays using REST
const [first, ...restOfItems] = [10, [20,2,2,2,2], 30, 40];
console.log(restOfItems);
const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

// split object into 2 objects using REST
const { temp1, temp2, ...person } = data;

// SPREAD
const newArray = [...restOfItems];

// SPREAD
const newObject = {
  ...person,
};
