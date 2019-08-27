// LECTURE: Let and const

//ES5
var name5 = 'Jane Smith';
var age = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6 let and const (can mutate)
const name6 = 'Jane Smith';
let age = 23;
name6 = 'Jane Miller';
console.log(name6);

//ES5
function driversLicence (passedTest) {
    
    if (passedTest) {
        // this is undefinied
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;   
    }
    // we can use the variables in the same function but not outside
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officialy allowed to drive a car');
}

driversLicence(true);

// ES6
function driversLicence6 (passedTest) {
    
    // we can not use a variable before declare it
    console.log(firstName);
    // to use we have to declare the let and const outside of block and inicialize const
    let firstName;
    const yearOfBirth = 1990
    
    if (passedTest) {
        
        // those variables are block scop, that can not used outside of the block
        firstName = 'John'; 
    }
    
    // this away we don't have access to the variables
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officialy allowed to drive a car');
}

driversLicence6(true);

var i = 23;

// this i is separete of the i above
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// this will print the i outside of the block
console.log(i);
