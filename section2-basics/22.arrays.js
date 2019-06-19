/***********************
* ARRAYS
*/

// we can make an array, using those models bellow, but the first one is more used.
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var year = new Array(1990, 1969, 1948);

// print the name at position 0
console.log(names[0]);
// print the name at position 2
console.log(names[2]);
// print all array
console.log(names);
// print all many names at the array(size)
console.log(names.length);

// Mutate the array
// change the name at position 1
names[1] = 'Ben';
console.log(names);

// add an item in the array names
// That way make empty position
names[5] = 'Paul'
console.log(names);

// That way, it will add a name in the end of the array
names[names.length] = 'Mary'
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
// it will that element in the end of the array
john.push('blue');
console.log(john);
// it will add in the beggining of the tittle
john.unshift('Mr. ')
console.log(john);

// it will remove the last element from the end
john.pop();
console.log(john);
john.pop();
console.log(john);

// it will remove the first element from the beggining [0]
john.shift();
console.log(john);

// it will say which position is that information
// this is usefull to verify if that element is the array or not
console.log(john.indexOf(1990));
console.log(john.indexOf(23));

// That's another way to check itens an array.
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer'
console.log(isDesigner);