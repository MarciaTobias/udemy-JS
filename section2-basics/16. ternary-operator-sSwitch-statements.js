var firstName = 'John';
var age = 14;

// first the condition, if block and else block in sequence
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juicy.')

var drink = age >= 18? 'beer' : 'juice';
console.log(drink);