"use strict";
// Please don't delete the 'use strict' line above

// 配列は複数の変数を一つの変数にインデックス（順番）と紐づけて保管できる
const instructors = ["Kimiko", "Yan", "Dustin", "Dylan"];
const numbers = [1, 2, 3, 5, 7];

// 配列の要素にアクセスするにはインデックスを指定する
// インデックスは0から始まる
console.log(numbers[2], "3");
console.log(numbers[0], "1");

// 配列の要素数は.lengthでアクセスできる(配列のプロパティと呼ぶ)

console.log(numbers.length - 1, "5");
console.log(numbers[numbers.length - 1], "7");

// 次で使用しているメソッドやプロパティ（pop(), shift(), length, push()）は何をしているのか、ドキュメント（MDN）で調べてみましょう！

console.log(numbers.pop() + numbers.pop(), "12"); // ???

numbers.unshift(4, 5, 6);
console.log(numbers, "456123"); // ???

console.log(numbers.shift(), "4"); // ???

console.log(numbers.length, "5"); // ???

numbers.push(5);
numbers.push(6);

console.log(numbers.pop() * numbers.pop(), "30"); // ???
console.log(numbers[0], "5"); // ???

// 配列の中に配列を格納することもできる
const number = [
  [0, 1, 2, 3],
  ["zero", "one", "two", "three"],
  ["rei", "ichi", "ni", "san"],
];
console.log(number[2], "rei", "ichi", "ni", "san"); // ???
console.log(number[1][1], "one"); // ???
console.log(number[0][2], "2"); // ???
console.log(number[number.length - 1][0], "rei"); // ???
console.log(number[2].length, "4"); // ???
console.log(number.pop(), "rei", "ichi", "ni", "san"); // ???
console.log(number[0].push(4), "5"); // ???
console.log(number.length, "2"); // ???

// 文字列も配列と似ているアクセスが可能
const string = "hello";
console.log(string.length, "5"); // ???
console.log(string[0], "h"); // ???
console.log(string[3], "l"); // ???
console.log(string[string.length - 1], "o"); // ???

/**
 * @param {Array<string>} arrayOfPeople - 人の名前の配列
 * @returns {number} 与えられた配列の長さ
 */
function numberOfPeople(arrayOfPeople) {
  // write your code
}

console.log(numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"]), 4);

/**
 * @param {Array<any>} array - 配列
 * @returns {any} 与えられた配列の最後の要素を取り出して返す
 */
function last(array) {
  // write your code
}

const month = ["jan", "feb", "mar", "apr", "may"];
console.log(last(month), "may");

/**
 * @param {Array<any>} ??? - 配列
 * @param {any} ??? - 配列の最後に追加する値
 * @returns {number} 処理後の配列の長さを返す。与えられた配列の末尾に、第 2 引数で渡された要素を追加してください。
 */
function push(arr, value) {
  // write your code
}

let array = [1, 2, 3, 4];

console.log(push(array, 6), 5);
console.log(array, [1, 2, 3, 4, 6]);
