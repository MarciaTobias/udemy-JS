/*************************
* FUNCTIONS
*/

// don't repeat yourself
function calculateAge(birthYear) {
    // we can return something from the function
    return 2019 - birthYear;
    
}

// the return from the function above was stored in a variable.
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

// passed two arguments.
// taht function does not have return, so is not necessary created a variable to store the return statement.
function yearsUntilRetirement(year, firstName) {
    
    // other function can call another function
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.')
    } else {
        console.log(firstName + ' is alerady retired.');
    }
    
}


yearsUntilRetirement(1990, 'John');
// this person is already retired.
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');