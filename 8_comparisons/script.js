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

console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces ".length);

function isItTooLong(string) {
  return string.length > 10;
}
console.log("expect:false", isItTooLong("Minato"));
console.log("expect:true", isItTooLong("Harry Potter"));

function biggerNumber(numOne, numTwo) {
  if (numOne > numTwo) {
    return "The first argument is bigger";
  } else if (numOne < numTwo) {
    return "The second argument is bigger";
  } else {
    return "Both arguments are the same";
  }
}
console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'
console.log(biggerNumber(5, 5));

function printDataType(data) {
  if (typeof data === "number") {
    console.log("This is a number.");
  } else if (typeof data === "string") {
    console.log("This is a string.");
  } else if (typeof data === "boolean") {
    console.log("This is a boolean.");
  } else if (typeof data === "undefined") {
    console.log("This is not a string, boolean, or number.");
  }
}
printDataType(42); // => "This is a number."
printDataType("Hello!"); // "This is a string." が表示されるはずです
printDataType(true); // => "This is a boolean."
printDataType(undefined); // => "This is not a string, boolean, or number."

function greeting(name, language) {
  if (language === "Japanese") {
    return "Konnichiwa," + name + "!";
  } else if (language === "English") {
    return "Hello," + name + "!";
  } else if (language === "German") {
    return "Gutentag," + name + "!";
  } else if (language === "Spanish") {
    return "Hola," + name + "!";
  }
}
console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるはずです
console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!"
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!"

function isEven(number) {
  if (typeof number !== "number") {
    return "This is not a numer.";
  } else {
    return number % 2 === 0;
  }
}
console.log(isEven(4)); // true が表示されるはずです
console.log(isEven(7)); // => false
console.log(isEven("a"));

function isOdd(number) {
  return number % 2 !== 0;
}
console.log("expect:true", isOdd(77));

function isPositive(number) {
  return number > 0;
}
console.log("expect:true", isPositive(5));
console.log("expect:false", isPositive(-2));

function isNegative(number) {
  return number < 0;
}
console.log("expect:true", isNegative(-7));
console.log("expect:false", isNegative(8));

function isZero(number) {
  return number === 0;
}
console.log("expect:true", isZero(0));
console.log("expect:false", isZero(8));

function randomNumber(number) {
  return Math.floor(Math.random() * (number + 1));
}
console.log(randomNumber(8));

function guessMyNumber(number) {
  const ans = Math.floor(Math.random() * 6);
  if (number === ans) {
    return "YES!";
  } else {
    const result = "NO! Answer is:" + ans;
    return result;
  }
}
console.log(guessMyNumber(3));
