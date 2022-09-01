'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const numberInBox = function (number) {
  document.querySelector('.number').textContent = number;
};

const scoreBox = function (score) {
  document.querySelector('.score').textContent = score;
};

// again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreBox(score);
  numberInBox('?');
  displayMessage('Start guessing !');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15 rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

//check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When there is no Input
  if (!guess) {
    displayMessage('No Number !');
    //When guess is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct !');
    numberInBox(secretNumber);
    document.querySelector('.number').style.width = '30 rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high !' : 'Too low !');
      document.querySelector('body').style.backgroundColor = 'rgb(67, 57, 211)';
      score--;
      scoreBox(score);
    } else {
      displayMessage('You lost !');
      document.querySelector('body').style.backgroundColor = 'rgb(207, 71, 71)';
      scoreBox(0);
      numberInBox('X');
    }
  }
});
