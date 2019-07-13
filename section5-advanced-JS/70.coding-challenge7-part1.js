/////////////////////////////
// CODING CHALLENGE 7


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
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

Question.prototype.checkAnswer = function(ans) {
    
    if (ans === this.correct) {
        console.log('Correct answer');
    
    } else {
        console.log('Wrong answer! Try again!');
    }
}

// creating questions objects
var question1 = new Question('What\'s the coolest programming language i the world?',
                             ['Yes', 'No'],
                             0);

var question2 = new Question('What\'s the name of this course\'s teacher?', 
                             ['John', 'Michael', 'Jonas'],
                            2);

var question3 = new Question('What\'s the best describing code?', 
                             ['Boring', 'Hard', 'Fun', 'Tedious'],
                            2);

// store questions inside of an array
var questions = [question1, question2, question3];

// math.floor to remove the decimal from numbers
// generate a random question
var n = Math.floor(Math.random() * questions.length)

questions[n].displayQuestion();

// parseInt, to convert string to integer
// prompt is used to show a dialog windown to the user
var answer = parseInt(prompt('Select the correct answer!'));

// call the method to check the answers
questions[n].checkAnswer(answer);

})();

