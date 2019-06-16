/****************
Truthy and Falsy values and equality operators
*/

// falsy values: undefinied, null, 0, '', NaN
// truty values: NOT falsy values;

// this can be use to debug code
var height;

if (height) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

var age = 23;

// using the age === 0 to check if the age is 0 (in a another words defined)
// false || true === true
if (age || age === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

var age2 = '';

if (age2 || age2 === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
// The operator == converts the string to a number and make comparation
if (age == '23') {
    console.log('The == operator does type coercion!');
} 