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

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の要素にそれぞれ 1 を加えた数字を要素として持つ配列
 */
function addOne(array) {
  // write your code
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
  // write your code
}

test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);

/**
 * @param {number} start
 * @param {number} end
 * @param {number} step
 * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列。ただし数字は step の分だけ飛ばし飛ばしに入れること。
 */
function createRangeBySteps(start, end, step) {
  // write your code
}

test(createRangeBySteps(1, 10, 2), [1, 3, 5, 7, 9]);
test(createRangeBySteps(10, 30, 5), [10, 15, 20, 25, 30]);

/**
 * @param {Array<number>} ???
 * @param {Array<number>} ???
 * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
 */
function addTogether(array1, array2) {
  // write your code
}

test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);
test(addTogether([1], [4, 5, 6]), [5, 5, 6]);
test(addTogether([1], [4, 5, 6, 7]), [5, 5, 6, 7]);

const hellos = {
  English: "Hello",
  Japanese: "Konnichiwa",
  German: "Hallo",
  Spanish: "Hola",
  Arabic: "Ahlan wa sahlan",
  Chinese: "Nihao",
};

/**
 * @param {object} ???
 * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
 */
function getKeys(object) {
  // write your code
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
  // write your code
}

test(getValues(object1), [1, 2, "hello"]);
test(getValues(object2), ["a", "b", "c"]);

/**
 * @param {object} ??? - オブジェクト。ただしすべて値が異なるものとする。
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
 */
function swapPairs(object) {
  // write your code
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
  // write your code
}

const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];

test(getFirstObjectValues(collection), [1, 2]);
test(getFirstObjectValues(collection.slice(1)), [3, 3]);

/**
 * @param {Array<object>} ???
 * @param {string} ??? - 取り出したいキーの名前
 * @returns {Array<any>} 第二引数のキーを持つあらゆるオブジェクトの対応する値が入った配列
 */
function selectAllValues(arrayOfObject, key) {
  // write your code
}

test(selectAllValues(collection, "a"), [1, 3, 100]);
test(selectAllValues(collection, "b"), [2, 3, 4]);

/**
 * @param {object} ???
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。引数のオブジェクトに重複する値がある場合は、最初のキー・値のペアのみを使用し、その後のペアは無視すること。
 */

function swapPairs2(object) {
  // write your code
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
  // write your code
}

const collection2 = [{ a: 1, b: 2 }, { c: "uno", d: "dos" }, { e: "ichi" }];

test(getAllValues2(collection2), [1, 2, "uno", "dos", "ichi"]);
test(getAllValues2(collection2.slice(1)), ["uno", "dos", "ichi"]);

const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };

/**
 * @param {object} オブジェクト
 * @returns {{ [key: string]: string }} 与えられたオブジェクトによく似たオブジェクト。ただし値が文字列である場合のみ、そのキー・値のペアを持つ。
 */
function filterObjectForStrings(object) {
  // write your code
}

test(filterObjectForStrings(obj1), obj1); // 変化なし
test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
test(filterObjectForStrings(obj3), obj4); // キーが "b" または "d" のペアは含まれていない

/**
 * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
 * @returns {Array<{ [key: string]: string }>} 与えられたオブジェクトを要素に持つオブジェクト。ただし値が文字列である場合のみ、各オブジェクトはそのキー・値のペアを持つ。
 */
function filterArrayForStrings(arrayOfObjects) {
  // write your code
}

test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
// 2 番目の要素からキー が "b" のペアは除くこと
test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

/**
 * @param {Array<number>} ??? - 合計していく数字が入った配列
 * @returns {number} 与えられた配列のあらゆる数字を足した合計の数字
 */
function sumArray(numbers) {
  // write your code
}

test(sumArray([1, 2, 3, 4]), 10);

/**
 * @param {Array<number>} ??? - かけあわせる数字が入った配列
 * @returns {number} 与えられた配列のあらゆる数字をかけあわせた数字
 */
function productArray(numbers) {
  // write your code
}

test(productArray([1, 2, 3, 4]), 24);

/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */
function hasFun(array) {
  // write your code
}

test(hasFun(["whatever", 2, false, "fun", "hello"]), true);
test(hasFun(["whatever", 2, false, "run", "hello"]), false);

function hasFun2(array) {
  // write your code
}

test(hasFun2(["whatever", "hello"]), 0);

/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */
function containsOnlyBooleans(arrayOfBooleans) {
  // write your code
}

test(containsOnlyBooleans([true, false, true, false, false]), true);
test(containsOnlyBooleans([true, true, true, "not a boolean"]), false);

/**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */
function concatenate(arrUno, arrDos) {
  // write your code
}

test(concatenate(["eeny", "meeny"], ["miny", "moe"]), [
  "eeny",
  "meeny",
  "miny",
  "moe",
]);

/**
 * @param {Array<number>} ??? - 数字からなる配列
 * @returns {Array<number>} 与えられた配列の中の偶数だけが入った配列
 */
function getEvenNumbers(arrayOfNumbers) {
  // write your code
}

test(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]), [2, 4, 6, 8]);

/**
 * @param {Array<number>} ??? - 数字からなる配列
 * @param {number} ??? - 配列の各数字にかけあわせる数字
 * @returns {Array<number>} 配列の各数字と第二引数の数字をそれぞれかけあわせた数字からなる新たな配列
 */
function getMultipliedArray(arrayOfNumbers, n) {
  // write your code
}

test(getMultipliedArray([1, 2, 3], 6), [6, 12, 18]);

/**
 * @param {Array<number>} ??? - 数字からなる配列
 * @returns {boolean} 与えられた配列が昇順になっているかどうかを表すブーリアン
 */
function isSorted(arrayOfNumbers) {
  // write your code
}

test(isSorted([1, 2, 3]), true);
test(isSorted([3, 2, 3]), false);

/**
 * @param {Array<any>} ??? - 配列
 * @param {string|number|boolean} ??? - 出現回数をカウントしたい要素（値のデータ型は `string`、`number`、`boolean` のいずれか）
 * @returns {number} その要素が配列内で何回出てきたかを表す数字
 */
function countOccurrences(array, something) {
  // write your code
}

test(countOccurrences([1, 2, 3], 2), 1);
test(countOccurrences([1, 2, 2], 2), 2);
test(countOccurrences([1, 2, "elephant"], "elephant"), 1);

/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列の要素が逆の順番に入っている配列
 */
function reverse(array) {
  // write your code
}

const arrayToReverse = ["eeny", "meeny", "miny", "moe"];

test(reverse(arrayToReverse), ["moe", "miny", "meeny", "eeny"]);
test(arrayToReverse, ["eeny", "meeny", "miny", "moe"]);

/**
 * @param {Array<number>} ???
 * @param {'+'|'-'|'*'|'/'|'**'|'%'} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に対して、引数の被演算子を算術演算子とともに適用した結果の数字がそれぞれ入っている、新たな配列
 */
function getOperatedArray(array, element, number) {
  // write your code
}

test(getOperatedArray([1, 2, 3], "+", 5), [6, 7, 8]);
test(getOperatedArray([9, 6, 3], "/", 3), [3, 2, 1]);

/**
 * @param {Array<number>} ??? - 数字からなる配列
 * @returns {Array<number>} 与えられた配列の中のすべての奇数だけが入った配列
 */
function getOddNumbers(array) {
  // write your code
}

test(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]), [1, 3, 5, 7]);
