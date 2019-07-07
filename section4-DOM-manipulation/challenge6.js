/* GAME RULES:

- The game has 2 players, playing in rounds;
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score;
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn;
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn;
- The first player to reach 100 points on GLOBAL score wins the game.

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good opportunity to use google to figure this out :)

3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

// Array for the scores.
var scores, roundScore, activePlayer, gamePlaying;

// initialize variables.
init();

var lastDice;

// select the id, selected the element, text content receive the variable dice.
// query selector, to change, to maipulate values and elements of the page.
// setter
//document.querySelector('#current-' + activePlayer).textContent = dice;
// if we want write the inner html, we have to use string.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// getter
//var x = document.querySelector('#score-0').textContent;
//console.log(x);



//function btn() {
//    
//}
//
//btn();

// query selector will select the roll bottom
// Add eventListener, will add an event after the click of the mouse. 
// call back, that call the function.
// anonymous function is without name and cannot be reused.
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying) {
        
        // generates a random number from 0 to 6 and math.floor for integer number.
        // just this function will have access to the dice variable.
    
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
    
        // 2. Display the result.
        // var diceDOM = document.querySelector('.dice');
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        // diceDOM.style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        
        // Player looses score if the dice is 6 in a sequence.
//        if(dice === 6 && lastDice === 6) {
//            
//            scores[activePlayer] = 0;
//            document.querySelector('#score-' + activePlayer).textContent = '0';
//            nextPlayer();            
//            
//         // 3. Update the round score if the rolled number was NOT 1.    
//        } else if (dice !== 1) {
//                    
//            // add score
//            roundScore += dice;
//            document.querySelector('#current-' + activePlayer).textContent = roundScore;
//                
//        } else {
//            nextPlayer();
//        }
    
//        lastDice = dice;
        
        if (dice1 !== 1 && dice2 !== 1) {
            // add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
        } else {
            nextPlayer();
        }   
    }
});

// action for the hold bottom.
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    
    if(gamePlaying) {
        
        // add current score to global score
        scores[activePlayer] += roundScore;
    
        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        // undefined, ), null or "" are COERCED to false
        // anything else is COERCED to true
        if(input) {
            
            winningScore = input;     
            
        } else {
            winningScore = 100;
        }
    
        // Check if player won the game
        if(scores[activePlayer] >= winningScore) {
        
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//            document.querySelector('.dice').style.display = 'none';
            
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            
            // changes the style of winner text, for the winner class create at the ccs stylesheet
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
    
        } else {
            nextPlayer();
        } 
    }
});

function nextPlayer() {
    
    // next player.
    // ternary operator.
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // set the roundScore to 0.
     roundScore = 0;
    
    // set the roundScore to 0 at the user interface.
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
        
    // remove the class
    //document.querySelector('.player-0-panel').classList.remove('active');
    // add a class
    //document.querySelector('.player-1-panel').classList.add('active');
        
    // toggle, is the player 0 is not active it will put active and vice versa
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    // it will hide the dice when after change the player
    // document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

// action fot new game bottom
// passing the function as a parameter, when the bottom is cliked, the function will start.
document.querySelector('.btn-new').addEventListener('click', init);

// function for new game.
function init() {
    
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    // Style method, display property in css
    // document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    // we can also select elements using get element by id.
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}