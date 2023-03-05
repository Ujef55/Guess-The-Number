let number = parseInt(Math.random() * 100);
let chances = 0;

const guessButton = document.getElementById("guess-button");
const guessInput = document.getElementById("guess-input");
const result = document.getElementById("result");
const score = document.getElementById("score");

guessButton.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  if (guess < 1 || guess > 100) {
    result.textContent = "Invalid guess! It should be between 1 and 100.";
  } else {
    chances++;
    if (number == guess) {
      result.textContent = "Congratulations! Your guess is right.";
      guessButton.disabled = true;
      const scoreValue = 100 - chances;
      score.textContent = `Your score is: ${scoreValue}`;
    } else if (number < guess) {
      result.textContent = "Your guess is greater than the answer!";
    } else if (number > guess) {
      result.textContent = "Your guess is lesser than the answer!";
    }
  }
  guessInput.value = "";
});
