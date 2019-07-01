///////////////////////////////////////
// Lecture: Hoisting

// we can first use the function and after declare it, just works with function declaration.
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

//retirement(1990);

// Function expression
var retirement = function(year) { 
    console.log(65 - (2016 - year));
}

// hoisting with variables, set undefined variable
console.log(age);
// Variables
var age = 23;

console.log(age);

function foo() {
    console.log(age); // undefined
    var age = 65;
    console.log(age);
    
}

// get the execution context object, calls the function and the age inside of the function, 65.
foo();

// global execution context object, results 23.
console.log(age);