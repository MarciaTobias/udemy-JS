/*****************
* CODING CHALLENGE 2
*/

var johnScore1 = 189;
var johnScore2 = 120;
var johnScore3 = 103;

var mikeScore1 = 129;
var mikeScore2 = 94;
var mikeScore3 = 123;

var maryScore1 = 97;
var maryScore2 = 134;
var maryScore3 = 105;

var averageJohn = (johnScore1 + johnScore2 + johnScore3)/3;
var averageMike = (mikeScore1 + mikeScore2 + mikeScore3)/3;
var averageMary = (maryScore1 + maryScore2 + maryScore3)/3;

console.log(averageJohn, averageMike, averageMary);

if (averageJohn > averageMike && averageJohn > averageMary) {
    console.log('The winner was Joh\s team - average: ' + averageJohn);
} else if (averageMike > averageJohn && averageMike > averageMary){
    console.log('The winner was Mike\s team - average: ' + averageMike);
} else if (averageMary > averageJohn && averageMary > averageMike) 
    console.log('The winner was Mary\s team - average: ' + averageMary);
else {
    console.log('Is it was a draw - average: ' + averageMike);
}