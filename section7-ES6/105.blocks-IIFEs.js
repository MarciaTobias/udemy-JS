//////////////////////////////////////////////////
// Lecture: Blocks and IIFEs

// ES6
{
    // there is block scop, so those variables are not accesible from outside of the block
    const a = 1;
    let b = 2;
    // var can be accessed from outside of an block
    var c = 3;
}

//console.log(a + b);
console.log(c);

// ES5
(function() {
    // this variable also can not be accessed from outside because is insight of private function
    var d = 3;
})();

console.log(d);