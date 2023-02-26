"use strict";
// Please don't delete the 'use strict' line above

let theLoneliestNumber = 1;

let aFriend = theLoneliestNumber;

console.log(theLoneliestNumber, "1");
console.log(aFriend, "1");
console.log(theLoneliestNumber === aFriend, "true");

const kermit = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const missPiggy = kermit.slice();

console.log(kermit); // ???
console.log(missPiggy); // ???
console.log(kermit === missPiggy); // ???

let mamas = "Monday";

let papas = mamas;

papas += ", so good to me.";

console.log(mamas); // ???
console.log(papas); // ???
console.log(mamas === papas); // ???

const theFabFour = {
  bass: ["paul"],
  drums: ["ringo"],
  guitar: ["george", "john"],
  vocals: ["george", "john", "paul", "ringo"],
};

const theFifthBeatle = theFabFour;
theFifthBeatle.guitar.push("beau");

console.log(theFabFour); // ???
console.log(theFifthBeatle); // ???
console.log(theFabFour === theFifthBeatle); // ???

console.log(theFabFour.guitar); // ???
console.log(theFifthBeatle.guitar); // ???
console.log(theFabFour.guitar === theFifthBeatle.guitar); // ???

let isHot = true;
let isCold = !isHot;

isHot = !isHot;

console.log(isHot); // ???
console.log(isCold); // ???
console.log(isHot === isCold); // ???

const easyAs = [
  ["a", "b", "c"],
  [1, 2, 3],
  ["do", "re"],
];
const simpleAs = easyAs.slice();
simpleAs[2].push("mi");

console.log(easyAs); // ???
console.log(simpleAs); // ???
console.log(easyAs === simpleAs); // ???

console.log(easyAs[2]); // ???
console.log(simpleAs[2]); // ???
console.log(easyAs[2] === simpleAs[2]); // ???
