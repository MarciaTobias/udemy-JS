//////////////////////////////////////////////////
// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
   
    return 2016 - el;
});

console.log(ages5);

//ES6
// this has the same result like the function above
// If we use just one argumet, we can write like this
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

// two arguments, with parenteses
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

// three arguments, we need use curl brackets and return keyword
ages6 = years.map((el, index) => {
   const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);