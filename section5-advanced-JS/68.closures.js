// Closures

function retirement(retirementAge) {
    
    var a = ' years left until retirement.';
    
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66);
//retirementUS(1990);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

// this is possible because 
retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

// it gives the same result like the function above
//retirement(66)(1990);

// Challenge
// this is better code, is clean, closure
function interviewQuestion(job) {
    
    var a = ' , can you please explain what UX design is?';
    var b = 'What subject do you teach, ';
    var c = ' , what do you do?';
    
    return function(name) {
        
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
            
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?')

        } else {
            console.log('Hello ' + name + ' , what do you do?')
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Marry');
