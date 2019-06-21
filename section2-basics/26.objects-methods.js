/*****************
* OBJECTS AND METHODS
*/

// Arrays are also objects
// creting an object
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    //an array list inside of an object
    family:['Jame', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    // function assigned to a variable
    calAge: function() {
        // this objects, john
        // we stored the age, using this.age, in a variable
        this.age = 2018 - this.birthYear;
    }
};

// using this, we can access the age of John in the function above
console.log(john.calAge());

// we can assign to a variable
//john.age = john.calAge();

john.calAge();
console.log(john);