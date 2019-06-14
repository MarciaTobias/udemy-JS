/**************
 * If / else statements
 */

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');

} else {
    console.log(firstName + ' will hopefully marry soon! :)')
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married');

} else {
    console.log(firstName + ' will hopefully marry soon! :)')
}

var massMark = 78; //kg
var heightMark = 1.69; // meters

var massJohn = 49; // kg
var heightJohn = 1.65; // meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if(BMIMark > BMIJohn) {
    console.log('Mark\s BMI is higher than John\s')

} else {
    console.log('John\s BMI is higher than Mark\s')
}