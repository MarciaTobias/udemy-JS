var firstName = 'John';
var age = 56;

// Ternary operator
// first the condition, if block and else block in sequence
// ternary is good for not complex decisions
var age = 14;

// first the condition, if block and else block in sequence
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juicy.')

var drink = age >= 18? 'beer' : 'juice';
console.log(drink);

// Switch statement, is good to use in the place of long if/else statement
var job = 'teacher';
switch(job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}   

switch(true) {
        
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
        
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    
    default:
        console.log(firstName + ' is a man');
}
