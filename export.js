// learn lodash library + exports
const notes = require('./notes');

var _ = require('lodash');

var age = notes.age;
var result = notes.addNumber(18,98)
console.log(age);
console.log(result);


var data = [1, "om", "raj",4,1,4,7,"sengs",7,3,1];
var filter = _.uniq(data);
console.log(filter);
