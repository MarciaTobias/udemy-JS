// Bind, Call and Apply Method

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// method borring
// Call method
john.presentation.call(emily, 'friendly', 'afertoon');

// it will not work because the method does not accept array as a argument. 
john.presentation.apply(emily, ['formal', 'afertoon']);

// bind
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('afertoon');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');

var years = [1990, 1965, 1937, 2005, 1998];

// loop go trought the array
function arrayCalc(arr, fn) {
    
    var arrRes = [];
       
    for( var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// element = year 
function calculateAge(element) {
    return 2016 - element;
}

// element is a genearic name
// boolean result
function isFullAge(limit, element) {
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
