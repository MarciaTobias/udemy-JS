// Function Constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// function constructor with capital letter
// this word point for the global variable
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
 }


// inheritance of the calculate age function
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

// is not directly on the object, all objects inheritad that property
Person.prototype.lastName = 'Smith';

// create a new object usign the construction function, instantiation
// new operator create a empty object
// after the constructor Person is called with the arguments specified.
// the new operator point the this variable not to the global objject
// we created a object using the constructor and assigned to the variable John
var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'design');

var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
