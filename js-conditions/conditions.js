console.log("Hello");

// var age = Number(prompt("How old are you?"));

// if (age < 18) {
//   alert("You cannot come in!");
// } else if (age < 21) {
//   alert("You can come in, but cannot drink");
// } else {
//   alert("U can come in and U can drink! Yey!");
// }

// if (age < 0) {
//   alert("ERROR! You are not even born yet!");
// }
// if (age === 21) {
//   alert("Happy 21st Birthday!");
// }
// if (age % 2 !== 0) {
//   alert("Your age is odd");
// }
// if (age % Math.sqrt(age) === 0) {
//   alert("Your age is a perfect square!");
// }

// Guessing Game

// creat a secret number;
// ask user a secret number
// check guess

var secretNumber = 4;

// sample
// var guess = Number(prompt("Guess a number"));

// other way

var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

// check if guess is right

if (guess === secretNumber) {
  alert("You guessed it right!");
}
// otherwise
// else {
//   alert("Wrong!");
// }

// check if guess is higher >
else if (guess > secretNumber) {
  alert("Too high. Guess again!");
}

// check if guess is too lowe
else {
  alert("Too low. Guess again!");
}
