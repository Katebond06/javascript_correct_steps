console.log("Hello!");

//  print number from 1 - 5

var count = 1;
while (count < 6) {
  console.log("count is: " + count);
  count++;
}

console.log("---------------------");

//  print number from 5 - 20

var count = 5;
while (count < 20) {
  console.log("count is: " + count);
  count++;
}

console.log("---------------------");
//  print number from 5 - 20 with adding 2 digit up

var count = 5;
while (count < 20) {
  console.log("count is: " + count);
  count += 2;
}

console.log("---------------------");

// print each character in sepereat line
var str = "hello";
var count = 0;

while (count < str.lenght) {
  console.log(str[count]);
  count++;
}

console.log("---------------------");

// Exercise 1:

var num = 1;

while (num <= 10) {
  console.log(num);
  num += 2;
}
console.log("---------------------");

// Exercise 2:

var number = 1;

// numbers will be print that multipel by 4

while (number <= 20) {
  if (number % 4 === 0) {
    console.log(number);
  }
  number++;
}

// Exercise 3:

var numAnother = 100;

// this is infinit loop - will crash your browser

while (numAnother < 150) {
  console.log(numAnother + 1);
  numAnother--;
}
