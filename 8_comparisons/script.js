"use strict";
// Please don't delete the 'use strict' line above

function simplePasswordLock(password) {
  if (password === "password") {
    return "Correct! Welcome.";
  } else {
    return "Incorrect password. Please try again.";
  }
}
console.log(simplePasswordLock("qwerty"));
console.log(simplePasswordLock("password"));

function isItTooLong(string) {
  return string.length > 10;
}
console.log("expect:false", isItTooLong("Harry"));
console.log("expect:true", isItTooLong("Harry Potter"));

function biggerNumber(numOne, numTwo) {
  // write your code
}
console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'
console.log(biggerNumber(5, 5)); // => 'Both arguments are the same.'

function printDataType(data) {
  // write your code
}
printDataType(42); // => "This is a number."
printDataType("Hello!"); // "This is a string." が表示されるはずです
printDataType(true); // => "This is a boolean."
printDataType(undefined); // => "This is not a string, boolean, or number."

function greeting(name, language) {
  // write your code
}
console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるはずです
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!"
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!"

function isEven(number) {
  // write your code
}
console.log(isEven(4)); // true が表示されるはずです
console.log(isEven(7)); // => false
console.log(isEven("a")); // => 'This is not a number.'

function isOdd(number) {
  // write your code
}
console.log("expect:true", isOdd(77));

function isPositive(number) {
  // write your code
}
console.log("expect:true", isPositive(5));
console.log("expect:false", isPositive(-2));

function isNegative(number) {
  // write your code
}
console.log("expect:true", isNegative(-7));
console.log("expect:false", isNegative(8));

function isZero(number) {
  // write your code
}
console.log("expect:true", isZero(0));
console.log("expect:false", isZero(8));
