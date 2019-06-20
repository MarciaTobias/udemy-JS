/*************************
* OBJECTS AND PROPRETIES
*/

// creting an object
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1999,
    //an array list inside of an object
    family:['Jame', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john);
// dot notation is the way to access the data from the object
console.log(john.firstName);
var x ='birthYear';
// how to retrieve data from the object
console.log(john[x]);
console.log(john['lastName']);

// we can use the dot notation also to modify an object
john.job = 'designer'
john['isMarried'] = true;
console.log(john);

// That is the way to create a new object with some of the data from the other object
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);