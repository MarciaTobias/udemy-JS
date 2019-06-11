var massMark = 78; //kg
var heightMark = 1.69; // meters

var massJohn = 49; // kg
var heightJohn = 1.65; // meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markIsHigher = BMIMark < BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markIsHigher);
