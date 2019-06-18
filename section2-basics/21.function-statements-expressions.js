/***********************
* FUNCTIONS STATEMENTS AND EXPRESSIONS
*/

// there are two ways to write a function, function statement and function expression.


// Function declaration
//function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    
    switch(job) {
        case 'teacher':         
            // the return immedially exit the function, we don't need use the break keyword .
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

// JavaScript expressions are pieces of code that always produce a value, and it doesn't matter how long they are as long as the code results in a single value, and then it is an expression.
// Anything we do, that produces a result is an expression.
// Statements, they just perform actions, they don't produce immediate results, for example, while loop, function declaration