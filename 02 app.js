const path = require('path');

console.log(path.resolve(__dirname, '../'));

const _ = require('lodash')
let arr = [4, 5, 6.7]
let arr2 = _.chunk(arr, 2);
console.log(arr2); // [[4,5][6,7]]