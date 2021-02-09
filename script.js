'use strict';
let guess = 0;
let trueNumber = 0;
let accepting = true;
let score = 20;

reset();

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', reset);

function checkGuess() {
  if (accepting) {
    guess = Number(document.querySelector('.guess').value);
    if (guess === trueNumber) {
      win();
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      guess > trueNumber
        ? (document.querySelector('.message').textContent = 'Too High...')
        : (document.querySelector('.message').textContent = 'Too Low...');
    }
  }
}

function reset() {
  accepting = true;
  trueNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
}

function win() {
  accepting = false;
  alert('You win!');
}
