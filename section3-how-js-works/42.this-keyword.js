// Lecture: The this keyword

//console.log(this);

//calculateAge(1985);
//
//function calculateAge(year) {
//    console.log(2016 - year);
//    console.log(this);
//}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    // function expression
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
//        function innerFunction() {
//            // the default object is the windown
//            // that keyword will not be John object
//            console.log(this);
//        }
//        
//        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike ',
    yearOfBirth: 1984,
};

// method borrinwing
// we treat a varible like a variable.
mike.calculateAge = john.calculateAge;

mike.calculateAge();