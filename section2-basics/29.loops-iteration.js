/************************
* LOOPS AND ITERATION
*/

// The loop will exit when i will be equal to 10.
for (var i = 0; i < 20; i++) {
    
    console.log(i);
}

// The counter will increase 2.
for (var i = 0; i <= 20; i +=2) {
    
    console.log(i);
}

// It will print each item of the array, using loop to go through.
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}


// While loop.
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}

// CONTINUE AND BREAK STATEMENTS

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    // Strict different operator
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    // The loop will break when reaches some different than string
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// LOOPING BACKWARDS
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}