let words = [ // THE OPTIONS FOR GENERATED ANSWERS.
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "peanut",
    "hundred"
];

let word = words[Math.floor(Math.random() * words.length)]; // GENERATES THE CORRECT ANSWER.

let answerArray = []; // THIS STORES THE CORRECT ANSWER.

let remainingLetters = word.length; // THE HIDDEN LETTERS.

let guess; // THE PLAYER'S INPUT.

let lives = 3; // CHANCES UNTIL FAIL.

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";  // ADDS AS MANY UNDER SCORES EQUIVALENT TO THE LENGTH OF THE GENERATED WORD.
};

while (remainingLetters > 0 && lives > 0) {
    alert(answerArray.join(" ")); // THIS WILL JOIN ALL THE UNDER SCORES INTO A SINGLE STRING SEPARATED BY A SPACE.
    guess = prompt("Guess your answer, or press cancel to exit.").toLowerCase();
    if (guess.length > 1) {
        alert("Please guess one letter.");
    }
    else {
        let correctGuesses = 0;
        for (let j = 0; j < word.length; j++) {
            if (guess === word[j]) {
                if (answerArray[j] !== "_") {
                    alert("You have already inserted " + guess);
                    correctGuesses++;
                    break
                }
                else {
                    answerArray[j] = guess;
                    correctGuesses++;
                    remainingLetters--;
                }
            }
        }
        if (correctGuesses === 0) {
            lives--;
        }
    }
};

if (remainingLetters === 0) {
    alert("Congratulations!")
};

if (lives === 0) {
    alert("Sorry. You ran out of lives.")
};