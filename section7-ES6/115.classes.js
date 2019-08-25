//////////////////////////////////////////////////
// Lecture: Classes

//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

//ES6

class Person6 {
    // that parte changed, we don't need put collon or semi collon
    constructor (name, yearOfBith, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
  calculateAge = function () {
      
      var age = new Date().getFullYear - this.yearOfBirth;
      console.log(age);
  }
  
  static gretting() {
      console.log('Hey there!');
  }

}

const john6 = new Person5('John', 1990, 'teacher');
console.log(john6);

Person6.gretting();