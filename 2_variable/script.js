"use strict";
// Please don't delete the 'use strict' line above

//変数
// 変数を定義する際はconstまたはletを使います。
// varを使った変数宣言もありますが、古い記述法のため使うのは避けたほうが良いです。

// --python-- name = "yuki"

const name = "yuki";
//constは上書き不可のため、下記はエラーが出ます。
// name = "test";

let age = 30;
// letは上書き可能な変数です。
age = 31;

// 四則演算の演算子は[+, -, *, /]を使う
// 1 足す 2
// --python-- value = 1 + 2

// 5 引く 3
// --python-- value = 5 - 3

// 2 かける 2
// --python-- value = 2 * 2

// 9 割る 3
// --python-- value = 9 / 3

// 正方形の面積
const squareSideLength = 2;
const squareArea = "write your code";

// 長方形の面積
const rectangleBasLength = 3;
const rectangleHightLength = 4;
const rectangleArea = "write your code";

// 三角形の面積
const triangleBaseLength = 4;
const triangleHightLegth = 5;
const triangleArea = "write your code";

// 円周率はMath.PI
const circleDiameter = 10;
// 円周
const circleCircumference = "write your code";
// 円の面積
const circleAerea = "write your code";

//値を直接割り当てせずにaとbを入れ替える
let a = "B";
let b = "A";

//指数関数的増加
let value = 1;
console.log(value); // "1" を表示

console.log(value); // "3" を表示

console.log(value); // "9" を表示

console.log(value); // "27" を表示

console.log(value); // "81" を表示

const firstName = "";
const lasrName = "";
const city = "";
console.log(
  "Hello, my name is " + firstName + " " + lasrName + ". I live in" + city
);
