//////////////////////////////////////////////////
// Lecture: Default parameters

//ES5
function SmithPerson(firstName, lastName, yearOfBirth, nationality) {
    
    // That is the way to make those arguments default
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'american' : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
// the default parameters can be overriden
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

//ES6
function SmithPerson(firstName, lastName = 'Smith', yearOfBirth, nationality = 'american') {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;   
}

var john = new SmithPerson('John', 1990);
// the default parameters can be overriden
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

let name = 'Maria';
name = 'Sonia';
console.log(name);

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if(i === 2){
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());