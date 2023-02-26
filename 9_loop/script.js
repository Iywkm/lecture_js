"use strict";
// Please don't delete the 'use strict' line above

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

const hellos = {
  English: "Hello",
  Japanese: "Konnichiwa",
  German: "Hallo",
  Spanish: "Hola",
  Arabic: "Ahlan wa sahlan",
  Chinese: "Nihao",
};

/**
 * @returns {undefined} この関数は特に返り値を指定しません。使用可能なあらゆる言語で"Hello" を表示するだけです。
 */
function sayHellos() {
  for (const hello in hellos) {
    const value = hellos[hello];
    console.log(value);
  }
}

// console.log の表示はサイドエフェクト(副作用)であるため、テストするのは困難です。
// 今回はコンソールに表示されている値を確認するだけで問題ありません。
sayHellos();

/**
 * @param {object} ???
 * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
 */
function getKeys(object) {
  let result = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
}

const object1 = { a: 1, b: 2, c: "hello" };
const object2 = { 1: "a", 2: "b", hello: "c" };

test(getKeys(object1), ["a", "b", "c"]);
test(getKeys(object2), ["1", "2", "hello"]);

/**
 * @param {object} ???
 * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
 */
function getValues(object) {
  let result = [];
  for (const key in object) {
    result.push(object[key]);
  }
  return result;
}

test(getValues(object1), [1, 2, "hello"]);
test(getValues(object2), ["a", "b", "c"]);

const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };

function printAll(object) {
  for (const key in object) {
    const value = object[key];
    console.log(value);
  }
}
printAll(myObj);

/**
 * @param {object} ??? - オブジェクト。ただしすべて値が異なるものとする。
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
 */
function swapPairs(object) {
  let result = {};
  for (const key in object) {
    const newKey = object[key];
    result[newKey] = key;
  }
  return result;
}

const object3 = { a: 1, b: 2, c: 3, d: 4 };
const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

/**
 * @param {Array<object>} ??? - オブジェクトからなる配列（コレクション）。
 * @returns {Array<any>} 与えられた配列の 1 つ目のオブジェクトのすべての値が入った配列
 */
function getFirstObjectValues(arrayOfObject) {
  let result = [];
  const firstValues = arrayOfObject[0];
  for (const key in firstValues) {
    result.push(firstValues[key]);
  }
  return result;
}

const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];

test(getFirstObjectValues(collection), [1, 2]);
test(getFirstObjectValues(collection.slice(1)), [3, 3]);

/**
 * @param {Array<object>} ???
 * @returns {Array<any>} 与えられた配列内の全オブジェクトのすべての値が入った配列
 */
function getAllValues(arrayOfObject) {
  let result = [];
  for (const object of arrayOfObject) {
    for (const value in object) {
      result.push(object[value]);
    }
  }
  return result;
}

test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
test(getAllValues(collection.slice(1)), [3, 3, 4, 100]);

/**
 * @param {Array<object>} ???
 * @param {string} ??? - 取り出したいキーの名前
 * @returns {Array<any>} 第二引数のキーを持つあらゆるオブジェクトの対応する値が入った配列
 */
function selectAllValues(arrayOfObject, key) {
  let result = [];
  for (const object of arrayOfObject) {
    for (const value in object) {
      if (value === key) {
        result.push(object[key]);
      }
    }
  }
  return result;
}

test(selectAllValues(collection, "a"), [1, 3, 100]);
test(selectAllValues(collection, "b"), [2, 3, 4]);

/**
 * @param {object} ???
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。引数のオブジェクトに重複する値がある場合は、最初のキー・値のペアのみを使用し、その後のペアは無視すること。
 */

function swapPairs2(object) {
  let result = {};
  for (const key in object) {
    const newKey = object[key];
    console.log(result, newKey, result[newKey], key);
    if (result[newKey] === undefined) {
      result[newKey] = key;
    }
  }
  return result;
}

const object5 = { a: 1, b: 2, c: 3, d: 1 };
const object6 = { a: 1, b: 1, c: 1, d: 1 };

// 1 は既にキーとして使われているので、d:1 のキー・値のペアは破棄される
test(swapPairs2(object5), { 1: "a", 2: "b", 3: "c" });

test(swapPairs2(object6), { 1: "a" });

/**
 * @param {Array<object>} ???
 * @returns {Array<any>} 与えられた配列内の全オブジェクトのすべての値が入った配列
 */
function getAllValues2(arrayOfObject) {
  let result = [];
  for (const object of arrayOfObject) {
    for (const value in object) {
      result.push(object[value]);
    }
  }
  return result;
}

const collection2 = [{ a: 1, b: 2 }, { c: "uno", d: "dos" }, { e: "ichi" }];

test(getAllValues2(collection2), [1, 2, "uno", "dos", "ichi"]);
test(getAllValues2(collection2.slice(1)), ["uno", "dos", "ichi"]);

/**
 * @returns {string} 上記の設問で使った `hellos` オブジェクトの中の任意の言葉
 */
function getRandomHello() {
  const index = Math.floor(Math.random() * 6);
  const lingos = [];
  for (const lingo in hellos) {
    lingos.push(lingo);
  }
  const language = lingos[index];
  return hellos[language];
}

// ランダムな出力を行う関数をテストすることは困難です
// ここではコンソールログを見てテストしましょう
console.log(getRandomHello()); // 実行する度に別の単語を出力します。例えば、"konnichiawa" や "hola" など

let four = 4;
let secondFour = four;

four = 3;
console.log(secondFour); // 3 が表示される？それとも 4？

const cities = ["Seattle", "NYC", "Tokyo", "SF"];
const myCities = cities;

cities.pop();
console.log(myCities); // => 何が表示される？
console.log(cities); // => これは？

const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };

/**
 * @param {object} オブジェクト
 * @returns {{ [key: string]: string }} 与えられたオブジェクトによく似たオブジェクト。ただし値が文字列である場合のみ、そのキー・値のペアを持つ。
 */
function filterObjectForStrings(object) {
  let result = {};
  for (const key in object) {
    if (typeof object[key] === "string") {
      result[key] = object[key];
    }
  }
  return result;
}

test(filterObjectForStrings(obj1), obj1); // 変化なし
test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
test(filterObjectForStrings(obj3), obj4); // キーが "b" または "d" のペアは含まれていない

/**
 * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
 * @returns {Array<{ [key: string]: string }>} 与えられたオブジェクトを要素に持つオブジェクト。ただし値が文字列である場合のみ、各オブジェクトはそのキー・値のペアを持つ。
 */
function filterArrayForStrings(arrayOfObjects) {
  let result = [];
  for (const object of arrayOfObjects) {
    result.push(filterObjectForStrings(object));
  }
  return result;
}

test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// 2 番目の要素からキー が "b" のペアは除くこと
test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// Please don't delete the 'use strict' line above

let expected;
let actual;

/**
 * @param {Array<number>} ??? - 合計していく数字が入った配列
 * @returns {number} 与えられた配列のあらゆる数字を足した合計の数字
 */
function sumArray(numbers) {
  let result = 0;
  for (const number of numbers) {
    result = result + number;
    console.log(result);
  }
  return result;
}

actual = sumArray([1, 2, 3, 4]);
expected = 10;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<number>} ??? - かけあわせる数字が入った配列
 * @returns {number} 与えられた配列のあらゆる数字をかけあわせた数字
 */
function productArray(numbers) {
  let result = 1;
  for (const number of numbers) {
    result = result * number;
    console.log(result);
  }
  return result;
}

actual = productArray([1, 2, 3, 4]);
expected = 24;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */
function hasFun(array) {
  for (const value of array) {
    console.log(value);
    if (value === "fun") {
      return true;
    }
  }
  return false;
}

actual = hasFun(["whatever", 2, false, "fun", "hello"]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = hasFun(["whatever", 2, false, "run", "hello"]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

function hasFun2(array) {
  let result = 0;
  for (const value of array) {
    console.log(value);
    if (value === "fun") {
      result = result + 1;
    }
  }
  return result;
}

actual = hasFun2(["whatever", "hello"]);
expected = 0;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */
function containsOnlyBooleans(arrayOfBooleans) {
  for (const boolean of arrayOfBooleans) {
    if (typeof boolean !== "boolean") {
      return false;
    }
  }
  return true;
}

actual = containsOnlyBooleans([true, false, true, false, false]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */
function concatenate(arrUno, arrDos) {
  const result = [];
  for (const string of arrUno) {
    result.push(string);
    console.log(result);
  }
  for (const string of arrDos) {
    result.push(string);
    console.log(result);
  }
  return result;
}

actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
expected = ["eeny", "meeny", "miny", "moe"];

// 現時点では、配列を比較するには JSON.stringify を使用する必要があるということを覚えておいてください
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<number>} ??? - 数字からなる配列
 * @returns {Array<number>} 与えられた配列の中の偶数だけが入った配列
 */
function getEvenNumbers(arrayOfNumbers) {
  const result = [];
  for (const numero of arrayOfNumbers) {
    if (numero % 2 === 0) {
      result.push(numero);
    }
  }
  return result;
}

actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [2, 4, 6, 8];

// 現時点では、配列を比較するには JSON.stringify を使用する必要があるということを覚えておいてください
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<number>} ??? - 数字からなる配列
 * @param {number} ??? - 配列の各数字にかけあわせる数字
 * @returns {Array<number>} 配列の各数字と第二引数の数字をそれぞれかけあわせた数字からなる新たな配列
 */
function getMultipliedArray(arrayOfNumbers, n) {
  const result = [];
  for (const number of arrayOfNumbers) {
    result.push(number * n);
  }
  return result;
}

actual = getMultipliedArray([1, 2, 3], 6);
expected = [6, 12, 18];

// 現時点では、配列を比較するには JSON.stringify を使用する必要があるということを覚えておいてください
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<number>} ??? - 数字からなる配列
 * @returns {boolean} 与えられた配列が昇順になっているかどうかを表すブーリアン
 */
function isSorted(arrayOfNumbers) {
  let before;
  for (const number of arrayOfNumbers) {
    if (before > number) {
      return false;
    }
    before = number;
  }
  return true;
}

actual = isSorted([1, 2, 3]);
expected = true;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = isSorted([3, 2, 3]);
expected = false;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<any>} ??? - 配列
 * @param {string|number|boolean} ??? - 出現回数をカウントしたい要素（値のデータ型は `string`、`number`、`boolean` のいずれか）
 * @returns {number} その要素が配列内で何回出てきたかを表す数字
 */
function countOccurrences(array, something) {
  let result = 0;
  for (const value of array) {
    if (value === something) {
      result = result + 1;
    }
  }
  return result;
}

actual = countOccurrences([1, 2, 3], 2);
expected = 1;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = countOccurrences([1, 2, 2], 2);
expected = 2;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = countOccurrences([1, 2, "elephant"], "elephant");
expected = 1;

if (actual === expected) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列の要素が逆の順番に入っている配列
 */
function reverse(array) {
  let result = [];
  for (const string of array) {
    result.unshift(string);
  }
  return result;
}

const arrayToReverse = ["eeny", "meeny", "miny", "moe"];

actual = reverse(arrayToReverse);
expected = ["moe", "miny", "meeny", "eeny"];

// 現時点では、配列を比較するには JSON.stringify を使用する必要があるということを覚えておいてください
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

// 元の配列が変更されていないことを確認
// 現時点では、配列を比較するには JSON.stringify を使用する必要があるということを覚えておいてください

actual = arrayToReverse;
expected = ["eeny", "meeny", "miny", "moe"];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<number>} ???
 * @param {'+'|'-'|'*'|'/'|'**'|'%'} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に対して、引数の被演算子を算術演算子とともに適用した結果の数字がそれぞれ入っている、新たな配列
 */
function getOperatedArray(array, element, number) {
  let result = [];
  for (const n of array) {
    if (element === "+") {
      result.push(n + number);
    }
    if (element === "-") {
      result.push(n - number);
    }
    if (element === "*") {
      result.push(n * number);
    }
    if (element === "/") {
      result.push(n / number);
    }
    if (element === "**") {
      result.push(n ** number);
    }
    if (element === "%") {
      result.push(n % number);
    }
  }
  return result;
}

actual = getOperatedArray([1, 2, 3], "+", 5);
expected = [6, 7, 8];

// 現時点では、配列を比較するには JSON.stringify を使用する必要があるということを覚えておいてください
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

actual = getOperatedArray([9, 6, 3], "/", 3);
expected = [3, 2, 1];

// 現時点では、配列を比較するには JSON.stringify を使用する必要があるということを覚えておいてください
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.group("Result:");
  console.log("  actual:", actual);
  console.log("expected:", expected);
  console.groupEnd();
}

/**
 * @param {Array<number>} ??? - 数字からなる配列
 * @returns {Array<number>} 与えられた配列の中のすべての奇数だけが入った配列
 */
function getOddNumbers(array) {
  let odds = [];
  for (const number of array) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }
  return odds;
}

actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
expected = [1, 3, 5, 7];

// 現時点では、配列を比較するには JSON.stringify を使用する必要があるということを覚えておいてください
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Please don't delete the 'use strict' line above

for (let index = 0; index <= 4; index++) {
  console.log("hello!");
}

const array = ["a", "b", "c", "d", "e"];
for (let i = 0; i < array.length; i++) {
  console.log("Value: " + array[i], "Index: " + i);
}

function sayFourHellos() {
  for (let i = 0; i <= 3; i++) {
    console.log("Hello!");
  }
}

sayFourHellos();

function countDown(start) {
  for (let i = start; i >= 0; i--) {
    console.log(i);
  }
}

countDown(7);

console.clear();

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

function sayHellos(n) {
  for (let i = 0; i <= n - 1; i++) {
    console.log("Hello");
  }
}

sayHellos(4);

function countToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

countToTen();

function counter1(num) {
  let i = 0;
  while (i < num) {
    console.log(i);
    i++;
  }
}

function counter2(num) {
  for (let i = 0; i < num; i++) {
    console.log(i);
  }
}

counter1(5);
counter2(5);

function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printArray(["Yuki", "Minato", "Takumi"]);
printArray("YUKIIWAMA");

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の要素にそれぞれ 1 を加えた数字を要素として持つ配列
 */
function addOne(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }
  return result;
}

const array1 = [1, 2, 3, 4];

// function が動作するかテストする
test(addOne(array1), [2, 3, 4, 5]);
// 元の配列が変更されていないことを確認する
test(array1, [1, 2, 3, 4]);

/**
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
 */
function createRange(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);

function printCars1() {
  const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
  let i = 0;

  while (i < cars.length) {
    console.log(cars[i]);
    i++;
  }
}

function printCars2() {
  const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];

  for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
  }
}

printCars1();
printCars2();

const commands = ["Print me last", "Print me second", "Print me first"];

function decrement1(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    console.log(list[i]);
  }
}

function decrement2(list) {
  let i = list.length - 1;
  while (i >= 0) {
    console.log(list[i]);
    i--;
  }
}

decrement1(commands);
decrement2(commands);

/**
 * @param {number} start
 * @param {number} end
 * @param {number} step
 * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列。ただし数字は step の分だけ飛ばし飛ばしに入れること。
 */
function createRangeBySteps(start, end, step) {
  let result = [];
  for (let i = start; i <= end; i = i + step) {
    result.push(i);
  }
  return result;
}

test(createRangeBySteps(1, 10, 2), [1, 3, 5, 7, 9]);
test(createRangeBySteps(10, 30, 5), [10, 15, 20, 25, 30]);

/**
 * @param {Array<number>} ???
 * @param {Array<number>} ???
 * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
 */
function addTogether(array1, array2) {
  let result = [];
  let longerOne = Math.max(array1.length, array2.length);
  for (let i = 0; i < longerOne; i++) {
    if (array1[i] === undefined) {
      result.push(array2[i]);
    } else if (array2[i] === undefined) {
      result.push(array1[i]);
    } else {
      result.push(array1[i] + array2[i]);
    }
  }
  return result;
}

test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);
test(addTogether([1], [4, 5, 6]), [5, 5, 6]);
test(addTogether([1], [4, 5, 6, 7]), [5, 5, 6, 7]);
