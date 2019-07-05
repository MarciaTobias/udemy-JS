/* GAME RULES:

- The game has 2 players, playing in rounds;
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score;
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn;
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn;
- The first player to reach 100 points on GLOBAL score wins the game.

*/

// Array for the scores.
var scores, roundScore, activePlayer;

// initialize variables.
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// select the id, selected the element, text content receive the variable dice.
// query selector, to change, to maipulate values and elements of the page.
// setter
//document.querySelector('#current-' + activePlayer).textContent = dice;
// if we want write the inner html, we have to use string.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// getter
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

// Style method, display property in css
document.querySelector('.dice').style.display = 'none';

// we can also select elements using get element by id.
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

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
    
    // generates a random number from 0 to 6 and math.floor for integer number.
    // just this function will have access to the dice variable.
    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the result.
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'
      
    // 3. Update the round score if the rolled number was NOT 1.
    if (dice !== 1) {
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {

        
        nextPlayer();
    }
});

// action for the hold bottom.
document.querySelector('.btn-hold').addEventListener('click', function() {
    
    // add current score to global score
    scores[activePlayer] += roundScore;
    
    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
    // Check if player won the game
    if(scores[activePlayer] >= 20) {
        
        document.querySelector('#name-' + activePlayer).textContent = 'Winner'
        document.querySelector('.dice').style.display = 'none';
        // changes the style of winner text, for the winner class create at the ccs stylesheet
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    
    } else {
        nextPlayer();
    }
    
     nextPlayer();
} )

function nextPlayer() {
    
    // next player.
    // ternary operator.
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // set the roundScore to 0.
     roundScore = 0;
    
    // set the roundScore to 0 at the user interface.
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
        
    // remove the class
    //document.querySelector('.player-0-panel').classList.remove('active');
    // add a class
    //document.querySelector('.player-1-panel').classList.add('active');
        
    // toggle, is the player 0 is not active it will put active and vice versa
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    // it will hide the dice when after change the player
    document.querySelector('.dice').style.display = 'none';
}