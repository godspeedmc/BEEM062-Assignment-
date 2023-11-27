const principalEl = document.getElementById("principal");
const rateEl = document.getElementById("rate");
const frequencyEl = document.getElementById("frequency");
const yearsEl = document.getElementById("years");
const answerEl = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");
const scoreValueEl = document.getElementById("scoreValue");

let principal, rate, frequency, years, correctAnswer, score = 0;

function generatePuzzle() {
  principal = Math.floor(Math.random() * 9500) + 500;
  rate = Math.round((Math.random() * 9 + 1) * 100) / 100;
  frequency = Math.floor(Math.random() * 11) + 1;
  years = Math.floor(Math.random() * 19) + 1;

  correctAnswer = principal * Math.pow(1 + rate / 100 / frequency, frequency * years);
  correctAnswer = Math.round(correctAnswer * 100) / 100;

  principalEl.textContent = principal;
  rateEl.textContent = rate;
  frequencyEl.textContent = frequency;
  yearsEl.textContent = years;
}

function checkAnswer() {
  const userAnswer = parseFloat(answerEl.value);
  if (Math.abs(userAnswer - correctAnswer) <= 1) {
    score++;
    alert("Correct! The future value is $" + correctAnswer.toFixed(2));
  } else {
    alert("Incorrect. The correct future value is $" + correctAnswer.toFixed(2));
  }
  scoreValueEl.textContent = score;
  generatePuzzle();
  answerEl.value = "";
}

submitBtn.addEventListener("click", checkAnswer);
generatePuzzle();
