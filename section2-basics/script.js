/*jslint devel:true*/

/**********************
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming nules (single line comment)
var _3years = 3;
var johnMark = 'John and Mark';
var age2 = 23;

 (multiple line comment)
* Variable mutation and type corercion
*/

  

/******************
* Basic Operators


var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof Operator, shows the type of the variable
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/********************
* Operator Precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple Operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// this is possible because y is assigned to that operation, before the x
console.log(x, y);

// More Operators
x *= 2; // 52
console.log(x);
x += 10; // 62
console.log(x);
x++; // 63
console.log(x);
x--; // 62
console.log(x);

