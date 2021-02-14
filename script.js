'use strict';
let guess = 0;
let trueNumber = 0;
let accepting = true;
let score = 20;
let highscore = 0;

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
      checkLoss();
      document.querySelector('.score').textContent = score;
      guess > trueNumber
        ? (document.querySelector('.message').textContent = 'Too High...')
        : (document.querySelector('.message').textContent = 'Too Low...');
    }
  }
}

function reset() {
  score = 20;
  accepting = true;
  trueNumber = Math.floor(Math.random() * 20 + 1);
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector('h1').textContent = `Guess My Number!`;
  document.querySelector(`.message`).textContent = 'Start guessing...';
}

function win() {
  accepting = false;
  if (score > highscore) highscore = score;
  document.body.style.backgroundColor = 'green';
  document.querySelector(`.highscore`).textContent = highscore;
  document.querySelector(`.number`).textContent = trueNumber;
  document.querySelector(`.message`).textContent = `Correct number!`;
}

function checkLoss() {
  if (score === 0) {
    accepting = false;
    document.body.style.backgroundColor = 'red';
    document.querySelector('h1').textContent = `Game Over!`;
    document.querySelector(`.number`).textContent = `:(`;
  }
}
