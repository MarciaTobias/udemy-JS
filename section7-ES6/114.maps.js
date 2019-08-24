//////////////////////////////////////////////////
// Lecture: Map

// Create new empty map
const question = new Map();
//How to set
question.set('question', 'Whats is the official name of the latest major JavaScript version?');
question.set(1, ' ES5');
question.set(2, ' ES6');
question.set(3, ' ES2015');
question.set(4, ' ES7');
question.set('correct', 3);
question.set(true, 'Correct asnwer :D');
question.set(false, 'Wrong, please try again!');

// to print the question
console.log(question.get('question'));
//console.log(question.size);

// to check if some item is there
if (question.has(4)) {
    
    // to delete
    //question.delete(4);
//    console.log('Answer 4 is here');
}

console.log(question.size);


// to delete all information in the map
//question.clear();
//console.log(question.size);

// we can loop in the map, using for each
//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// return all entries, the same way like for each
for (let [key, value] of question.entries()) {
    
    // we can check the type of variables
    if(typeof(key) === 'number') {
        
        console.log(`Answer ${key}:${value}`);
    }  
}

// this converts string to integer
const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans ===
question.get('correct')));

