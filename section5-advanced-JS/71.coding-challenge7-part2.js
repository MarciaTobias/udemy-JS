/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// make the code private
(function () {
    
    // function contructor
var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
 }

// display the random questions
Question.prototype.displayQuestion = function() {
    console.log(this.question);
    
    // loop do display respective answers for each question
    for(var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i])
    }
};

Question.prototype.checkAnswer = function(ans, callback) {
    
    var sc;
    
    if (ans === this.correct) {
        console.log('Correct answer');
        // track the score
        sc = callback(true);
    
    } else {
        console.log('Wrong answer! Try again!');
        sc = callback(false);
    }
    
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
    console.log('Your current score is : ' + score);
    console.log('--------------------------------');
}

// creating questions objects
var question1 = new Question('What\'s the coolest programming language i the world?',
                             ['JavaScript', 'Java'],
                             0);

var question2 = new Question('What\'s the name of this course\'s teacher?', 
                             ['John', 'Michael', 'Jonas'],
                            2);

var question3 = new Question('What\'s the best describing code?', 
                             ['Boring', 'Hard', 'Fun', 'Tedious'],
                            2);

// function to add a point for every correct answer    
function score() {
    
    var score = 0;
    return function(correct) {
        if (correct) {
            score++;
            
        } return score;
    }
}  

// closure, the keepscore will have acces to var score    
var keepScore = score();    
    
function nextQuestion() {
    
    // store questions inside of an array
    var questions = [question1, question2, question3];

    // math.floor to remove the decimal from numbers
    // generate a random question
    var n = Math.floor(Math.random() * questions.length)

    questions[n].displayQuestion();
   
    // prompt is used to show a dialog windown to the user
    var answer = prompt('Select the correct answer!');
    
    if (answer !== 'exit') {
        
         // parseInt, to convert string to integer
        // call the method to check the answers
        questions[n].checkAnswer(parseInt(answer), keepScore);
        
        // the next question will show up if the answer of the user is not exit
        nextQuestion();
    }    
}

// call the method above    
nextQuestion();    


})();

