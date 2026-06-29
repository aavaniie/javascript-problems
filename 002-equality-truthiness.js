// Problem: 002
// Topic: Equality & Truthiness
// Difficulty: ⭐⭐
// Date: 2026-06-29

// Objective:
// Learn how JavaScript determines whether values are truthy or falsy,
// and understand the difference between loose equality (==)
// and strict equality (===).

// Predict the output and explain.

console.log(Boolean(""));
// Output: false
// Explanation:
// An empty string ("") is one of JavaScript's falsy values.

console.log(Boolean(" "));
// Output: true
// Explanation:
// " " contains one space, so it is not an empty string.
// Any non-empty string is truthy.

console.log(Boolean(0));
// Output: false
// Explanation:
// 0 is one of JavaScript's falsy values.

console.log(Boolean(-1));
// Output: true
// Explanation:
// Any number other than 0 is truthy.
// Since -1 is not 0, Boolean(-1) returns true.

console.log(Boolean([]));
// Output: true
// Explanation:
// An array is an object in JavaScript.
// All objects (including empty arrays) are truthy.

console.log(Boolean({}));
// Output: true
// Explanation:
// An object is always truthy, even if it has no properties.

console.log([] == false);
// Output: true
// Explanation:
// The == operator performs type coercion.
// false is converted to 0.
// [] is converted to an empty string ("").
// The empty string ("") is then converted to 0.
// Final comparison:
// 0 == 0
// Result: true

console.log("" == false);
// Output: true
// Explanation:
// The == operator performs type coercion.
// false is converted to 0.
// The empty string ("") is also converted to 0.
// Final comparison:
// 0 == 0
// Result: true

console.log(null == undefined);
// Output: true
// Explanation:
// JavaScript has a special rule:
// null and undefined are considered equal when using ==.
// Therefore:
// null == undefined
// returns true.

console.log(null === undefined);
// Output: false
// Explanation:
// === checks both value and type.
// null has the type "null" (special primitive value).
// undefined has the type "undefined".
// Since their types are different,
// the comparison returns false.