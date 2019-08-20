//////////////////////////////////////////////////
// Lecture: Arrow functions 2

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        // self point to this
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is a box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe();


//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is a box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

//const box66 = {
//    color: 'green',
//    position: 1,
//    clickMe: () => {
//
//        document.querySelector('.green').addEventListener('click', () => {
//            var str = 'This is a box number ' + this.position + ' and it is ' + this.color;
//            alert(str);
//        });
//    }
//}
//box66.clickMe();

function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
        // this keyword is ponting to the global object, which is windown
        // to be able to read this, we can use bind
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {
    
    const arr = friends.map(el => `${this.name} is friends with ${el}`);
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends5(friends);