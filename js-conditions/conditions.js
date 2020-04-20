console.log("Hello");

var age = Number(prompt("How old are you?"));

// if (age < 18) {
//   alert("You cannot come in!");
// } else if (age < 21) {
//   alert("You can come in, but cannot drink");
// } else {
//   alert("U can come in and U can drink! Yey!");
// }

if (age < 0) {
  alert("ERROR! You are not even born yet!");
}
if (age === 21) {
  alert("Happy 21st Birthday!");
}
if (age % 2 !== 0) {
  alert("Your age is odd");
}
if (age % Math.sqrt(age) === 0) {
  alert("Your age is a perfect square!");
}
