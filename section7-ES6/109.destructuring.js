//////////////////////////////////////////////////
// Lecture: Destructuring

//ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];
console.log(name5);
console.log(age5);


//ES6
const [name6, age6] = ['Mark', 60];
console.log(name6);
console.log(age6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);