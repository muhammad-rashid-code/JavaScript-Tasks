// 1.Create a block of code that you can use several times.

// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 3));
// console.log(add(-1, 1));
// console.log(add(5, -5));

// 2.	Write a function that displays current date & time in your browser.

// function myDate() {
//   return new Date();
// }

// console.log(myDate());

// 3.	Write a function that takes first & last name and then it greets the user using his full name.

// function greeUser(fName, Lname) {
//   return `Welcome ${fName} ${Lname}`;
// }

// console.log(greeUser("muahammad", "rashid"));

// 4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function sum(num1, num2) {
//   return num1 + num2;
// }
// let num1 = +prompt("Enter num1");
// let num2 = +prompt("Enter num2");

// console.log(sum(num1, num2));

// 5.	 Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation.
//  Return and show the desired result in your browser.

// function calculator(num1, num2, operator) {
//   if (operator === "+") {
//     return num1 + num2;
//   }
//   if (operator === "-") {
//     return num1 - num2;
//   }
//   if (operator === "*") {
//     return num1 * num2;
//   }
//   if (operator === "/") {
//     return num1 / num2;
//   }
//   if (operator === "%") {
//     return num1 % num2;
//   }
// }
// console.log(calculator(1, 2, "-"));
// console.log(calculator(10, 3, "%"));
// console.log(calculator(1, 2, "-"));
// console.log(calculator(1, 2, "-"));

//6.	 Write a function that squares its argument.

// function square(num) {
//   return num * num;
// }
// console.log(square(2));

//7.	 Write a function that computes factorial of a number.

// function factorial() {}

// let factorial = 1;

// for (let i = 1; i <= 10; i++) {
//   console.log(i, (factorial = factorial * i));
// }
// let Myfactorial = 1;
// function factorialF(number) {
//   for (let i = 1; i <= number; i++) {
//     Myfactorial = Myfactorial * i;
//   }
//   return;
// }
// console.log(factorialF(3));  //WRONG
// let myFactorial = 1;  //CORRECT

// function factorialF(num) {
//   for (let i = 1; i <= num; i++) {
//     myFactorial *= i;
//   }
//   return myFactorial;
// }
// console.log(factorialF(3));

// 8.	Write a function that take start and end number as inputs & display counting in your browser.

// function countingG(start, end) {
//   let res = 0;
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// }
// let start = +prompt("Enter start");
// let end = +prompt("Enter End");
// countingG(start, end);

function countingG(start, end) {
  for (let i = start; i <= end; i++) {
    i;
  }
  return;
}
