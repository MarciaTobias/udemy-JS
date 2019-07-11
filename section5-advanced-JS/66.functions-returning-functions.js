// Functions Returning Functions

function interviewQuestion(job) {
    
    if(job === 'designer') {
        return function(name) { // anonymous function
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?')
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ' , what do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Mark');

designerQuestion('Mike');
designerQuestion('Jane');

// we can call right away both functions
interviewQuestion('teacher')('Mark');