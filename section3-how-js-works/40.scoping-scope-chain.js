
// Lecture: Scoping Chain

// First scoping example
var a = 'Hello! ';
first();

function first() {
    var b = 'Hi! ';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Example to show the differece between execution stack and scope chain

var a = 'Hello! ';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
        // the order to call the function does not matter.
        //
    }
}

// that function just can accces the global variable a and the variable inside of the function.
function third() {
    var d = 'John';
    console.log(a + d);
}
