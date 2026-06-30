// Problem: 003
// Topic: Variables & Scope
// Difficulty: ⭐⭐⭐
// Date: 2026-06-29

// Objective:
// Understand var, let, const, scope rules, and hoisting behavior.

// Instructions:
// Predict output + explain WHY (do not run the code).

console.log(a);
// Output: undefined
// Explanation:
// Variables declared with var are hoisted and initialized with undefined.
// Therefore, accessing 'a' before its declaration returns undefined.

var a = 10;

console.log(b);
// Output: ReferenceError
// Explanation:
// Variables declared with let are also hoisted, but they remain in the
// Temporal Dead Zone (TDZ) until their declaration is reached.
// Accessing 'b' before its declaration throws a ReferenceError.

let b = 20;

function test() {
  var x = 1;

  if (true) {
    let y = 2;
    var z = 3;
  }

  console.log(x);
  // Output: 1
  // Explanation:
  // 'x' is declared with var, so it is function-scoped and accessible
  // throughout the function.

  console.log(y);
  // Output: ReferenceError
  // Explanation:
  // 'y' is declared with let, so it is block-scoped and exists only
  // inside the if block.

  console.log(z);
  // Output: 3
  // Explanation:
  // 'z' is declared with var, so it is function-scoped, not block-scoped.
  // It is accessible anywhere inside the function.

}

test();

console.log(typeof c);
// Output: "undefined"
// Explanation:
// 'c' is declared with var, so it is hoisted and initialized with undefined.
// Therefore, typeof c returns the string "undefined".

var c;