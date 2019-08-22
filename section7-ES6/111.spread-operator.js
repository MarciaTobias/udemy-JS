//////////////////////////////////////////////////
// Lecture: Spread operator

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
//To make the sum of 2 different arrays
//We can include an item in the middle, for example
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

// Node list
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

// Transformed to an array
Array.from(all).forEach(cur => cur.style.color = 'purple');