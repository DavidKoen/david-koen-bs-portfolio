// let secret = 7;
// let answer = Number(prompt("Try guess a number from 0 to 20."));

// PROJECT TEST: "Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct Guess!, otherwise “Sorry, incorrect Guess!"

// if (answer == secret) {
//     alert("Correct Guess!")
// } else {
//     alert("Sorry, incorrect Guess!")
// };

// PROJECT TEST: "How can you combine line 2 and 3 into one line?"



// PROJECT TEST: "Expand the program to do this in a while loop, only exiting when the guess was correct. While the guess is incorrect, test also if it is too low or too high and display the message “Incorrect, too low” or “Incorrect, too high”."

// while (answer !== secret) {
//     if (answer < secret) {
//         alert("Incorrect, too low");
//         answer = Number(prompt("Try guess a number from 0 to 20."))
//     } else if (answer > secret) {
//         alert("Incorrect, too high");
//         answer = Number(prompt("Try guess a number from 0 to 20."))
//     } else if (answer === NaN) {
//         alert("Please select a number.");
//         answer = Number(prompt("Try guess a number from 0 to 20."))
//     }
//     else {
//         break
//     }
// };

// alert("Correct Guess!");

// PROJECT TEST: "When you are done make the secret number random."

let secret = Math.floor(Math.random() * 10 + 1);
let answer = Number(prompt("Try guess a number from 0 to 10."));

while (answer !== secret) {
    if (answer < secret) {
        alert("Incorrect, too low");
        answer = Number(prompt("Try guess a number from 0 to 10."))
    } else if (answer > secret) {
        alert("Incorrect, too high");
        answer = Number(prompt("Try guess a number from 0 to 10."))
    } else if (answer === NaN) {
        alert("Please select a number.");
        answer = Number(prompt("Try guess a number from 0 to 10."))
    }
    else {
        break
    }
};

alert("Correct Guess!");