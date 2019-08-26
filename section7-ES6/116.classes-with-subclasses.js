//////////////////////////////////////////////////
// Lecture: Classes

//ES5
// Person5 is superclass
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


// Athlete5 is subclass of Person5
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    // this call from the superclass
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

//Connects the two functions constructors. The way to connect both class (superclass and subclass)
Athlete5.prototype = Object.create(Person5.prototype);


// It will increase the medals of athlets and not for Person5, prototype propertie
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

//ES6
class Person6 {
    // that parte changed, we don't need put collon or semi collon
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
  calculateAge = function () {
      var age = new Date().getFullYear() - this.yearOfBirth;
      console.log(age);
  }
  
  static gretting() {
      console.log('Hey there!');
  }

}

class Athlete6 extends Person6 {
    constructor(name, yearOfBith, job, olympicGames, medals) {
        super(name, yearOfBith, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swwimer', 3, 10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();

