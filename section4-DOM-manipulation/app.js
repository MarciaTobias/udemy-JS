/* GAME RULES:

- The game has 2 players, playing in rounds;
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score;
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn;
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn;
- The first player to reach 100 points on GLOBAL score wins the game.

*/

// Array for the scores.
var scores, roundScore, activePlayer, dice;

// initialize variables.
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// generates a random number from 0 to 6 and math.floor for integer number.
dice = Math.floor(Math.random() * 6) + 1;

// select the id, selected the element, text content receive the variable dice.
// query selector, to change, to maipulate values and elements of the page.
// setter
document.querySelector('#current-' + activePlayer).textContent = dice;
// if we want write the inner html, we have to use string.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// getter
var x = document.querySelector('#score-0').textContent;
console.log(x);

// Style method, display property in css
document.querySelector('.dice').style.display = 'none';