"use strict";
// Please don't delete the 'use strict' line above

// 関数を定義する方法の一つとして、functionキーワードを使った宣言がある
// function 関数名（引数1, 引数2, ...） {
//   処理
//   return 戻り値
// }
// 戻り値がない場合はreturnは省略可能（undefinedがreturnされる）

function addTen(number) {
  console.log("The argument is", number);
  return number + 10;
}

function greeting() {
  console.log("hello");
}

// 関数の呼び出し
// 関数名（引数, ...)
addTen(5);

// 引数がない場合
// 関数名（）
greeting();

// 関数からの戻り値を変数に格納
const answer = addTen(5);
console.log(answer); //should print 15

// 関数の戻り値を関数の引数として渡すことも可能
console.log(addTen(5)); //should also print 15

function subtract(num1, num2) {
  return num1 - num2;
}

// substract関数を実行してみましょう

// 演習

function add() {
  // write your code
}
console.log(add(4, 3)); // 7
console.log(add(100, 42)); // 142
console.log(add(100)); // NaNが返される
console.log(add(1, 4, 5)); // 前2つを足した5が返される

function multiple() {
  // write your code
}
console.log(subtract(4, 3)); // 12
console.log(subtract(100, 42)); // 4200

function greeting() {
  // write your code
}
console.log(greeting("Alex")); // Hello, Alex!
console.log(greeting("World")); // Hello, World!

function average() {
  // write your code
}
console.log(average(average(10, 20), 13)); // 14

function square() {
  // write your code
}
console.log(square(5)); // 25

function cube() {
  // write your code
}
console.log(cube(5)); // 125

function simpleHelloA() {
  console.log("hello");
}
function simpleHelloB() {
  return "hello";
}

// const a = simpleHelloA();
// const b = simpleHelloB();
// console.log(a, b); // 何が帰ってくるか予想しましょう

function createGreeting(greetingPhrase, name) {
  return greetingPhrase + "," + name + "!";
}

const morningGreeting = createGreeting("Good morning", "Mike");
const dayGreeting = createGreeting("Hello", "Tim");
const eveningGreeting = createGreeting("Good evening", "Alex");

console.log(morningGreeting);
console.log(dayGreeting);
console.log(eveningGreeting);
