const dotenv = require('dotenv')
// to read .env file into process.env
dotenv.config()

console.log('Current user is', process.env.USERNAME);

console.log('\nScript executed with:');

console.log('ARGV equal to:', process.argv);
console.log('VAL1 equal to:', process.env.VAL1);
