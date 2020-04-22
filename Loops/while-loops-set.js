// 1. Print all numbers between -10 and 19
var num = -10;
while (num < 20) {
  console.log(num);
  num++;
}
console.log("---------------------");

// 2. Print all even numbers between 10 and 40
var numTwo = 10;
while (numTwo <= 40) {
  console.log(numTwo);
  numTwo += 2;
}

// while (numTwo <= 40) {
//   if (numTwo % 2 === 0) {
//     console.log(numTwo);
//   }
//   numTwo += 1;
// }
console.log("---------------------");

// 3. Print all odd numbers between 300 and 333
var numThree = 300;
while (numThree <= 333) {
  if (numThree % 2 !== 0) {
    console.log(numThree);
  }
  numThree += 1;
}

console.log("---------------------");

// 4 // Print all numbers divisible by 5 and 3 between 5 and 50
var counter = 5;
while (counter <= 50) {
  if (counter % 5 === 0 && counter % 3 === 0) {
    console.log(counter);
  }
  counter += 1;
}

console.log("---------------------");
