"use strict";
// Please don't delete the 'use strict' line above

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}

function sumArray(arrayOfNumbers) {
  // write your code
}

// 次の関数は何度呼び出しても期待どおりに動作するはずです
test(sumArray([1, 2, 3]), 6);
test(sumArray([10, 20, 30]), 60);
test(sumArray([100, 200, 300]), 600);

let count = 0;

function counter(x) {
  // write your code
}

test(counter(3), 3);
test(counter(4), 7);
test(counter(5), 12);
