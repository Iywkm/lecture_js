"use strict";
// Please don't delete the 'use strict' line above

const object = {
  name: "yuki",
  age: "30",
};

console.log(object["name"]); // ???
console.log(object.name); // ???
object["name"] = "Mike";
console.log(object["name"]); // ???

const pokemons = [
  {
    Number: "001",
    Name: "Bulbasaur",
    Generation: "Generation I",
    About:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    Types: ["Grass", "Poison"],
  },
  {
    Number: "025",
    Name: "Pikachu",
    Generation: "Generation I",
    About:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    Types: ["Electric"],
  },
  {
    Number: "019",
    Name: "Rattata",
    Generation: "Generation I",
    About:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    Types: ["Normal"],
  },
];

console.log(pokemons[0]); // ???
console.log(pokemons[1].Name); // ???
console.log(pokemons[0]["Name"]); // ???
console.log(pokemons[2]["About"]); // ???
console.log(pokemons[2].Types[0]); // ???

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

const tar = ["-", ".-", ".-."];
const morseCode = {
  t: "-",
  a: ".-",
  r: ".-.",
};

test(morseCode["t"], "-");
test(morseCode["a"], ".-");
test(morseCode["r"], ".-.");

/**
 * @param {string} ??? - モールス信号に変換する文字
 * @returns {string} 与えられた文字に対応するモールス信号
 */
function morseCodeArt(string) {
  // write your code
}

test(morseCodeArt("a"), ".-");
test(morseCodeArt("r"), ".-.");
test(morseCodeArt("t"), "-");
test(morseCodeArt("art"), ".- .-. -");

/**
 * @param {object} ??? - 1 つのオブジェクト
 * @param {Array<string>} ??? - 文字列型のデータからなる配列
 * @returns {object} 与えられた配列の各要素をキーに持つ新たなオブジェクト。各キーに対応する値は第一引数のオブジェクトから抽出する。
 */
function select(object, array) {
  // write your code
}

test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, []), {});

/**
 * @param {string} ???
 * @returns {{ [character: string]: number }} 与えられた文字の中の各アルファベットとその登場回数をキーと値のペアとして表現したオブジェクト
 */
function countCharacters(string) {
  // write your code
}

test(countCharacters("hello"), { h: 1, e: 1, l: 2, o: 1 });
test(countCharacters("hello hello"), { h: 2, e: 2, l: 4, o: 2, " ": 1 });

/**
 * @param {string} ???
 * @returns {{ [word: string]: number }} 与えられた文字列の中の各単語をキーとして持つオブジェクト。各キーに対応する値は、それぞれの単語が文字列の中で使用されている回数。
 */
function countWords(string) {
  // write your code
}

test(countWords("hello hello"), { hello: 2 });
test(countWords("hello Hello"), { hello: 1, Hello: 1 });
test(countWords(""), {});

/**
 * @param {Array<object>} ??? - 利用可能な全ポケモンが入った配列
 * @returns {Array<string>} 与えられたポケモンの名前（`Names`）を要素に持つ配列
 */
function getNames(array) {
  // write your code
}

// 'pokemons' の配列は、ファイルのどこかに書いておいてください
test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);

/**
 * @param {Array<object>} ??? - 利用可能な全ポケモンが入った配列
 * @param {number} ??? - 取り出したいポケモンの 'number'
 * @returns {object|null} 与えられた数字を 'number' に持つポケモン。もし対応するポケモンが存在しなければ、null を返す。
 */
function findPokemon(array, number) {
  // write your code
}

test(findPokemon(pokemons, 1), pokemons[0]);
test(findPokemon(pokemons, 19), pokemons[2]);
test(findPokemon(pokemons, 25), pokemons[1]);
test(findPokemon(pokemons, 1337), null);

/**
 * @param {Array<object>} ??? - pluck される（=抽出される）オブジェクトの配列
 * @param {string} キーの名前
 * @returns {Array<any>} 与えられた配列の各要素（オブジェクト）の中から、与えられたキーと同名のキーに対応する値だけを要素として抽出した配列
 */
function pluck(array, key) {
  // write your code
}

const arrayOfObjects = [
  { a: 1, b: 2, c: 3 },
  { a: 4, b: 5, c: 6 },
  { a: 7, b: 8, c: 9 },
];

test(pluck(arrayOfObjects, "a"), [1, 4, 7]);
