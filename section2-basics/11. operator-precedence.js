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