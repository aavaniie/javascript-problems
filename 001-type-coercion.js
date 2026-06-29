// Problem: 001
// Topic: Type Coercion
// Difficulty: ⭐
// Date: 2026-06-29

// Type coercion is the process where JavaScript automatically converts 
// a value from one data type to another when performing an operation.
// 1. Implicit Type Coercion (Automatic)
// JavaScript does it for you.
// Eg: "5" + 2
// 2. Explicit Type Conversion (Manual)
// You tell JavaScript exactly what to do.
// Eg: Number("5")

console.log("5" + 2 + 3);
// Output: "523"
// Explanation: 
// The + operator performs string concatenation when one operand is a string. 
// JavaScript evaluates the expression from left to right.

console.log(2 + 3 + "5");
// Output: "55"
// Explanation: 
// Even though there is a string JavaScript evaluates the expression from left to right.

console.log("5" - 2);
// Output: 3 
// Explanation: 
// The - operator only performs numeric subtraction.
// Before subtracting, JavaScript converts the string "5" into the number 5.

console.log(true + 1);
// Output: 2
// Explanation:
// JavaScript converts the boolean true to the number 1.

console.log(false + false);
// Output: 0
// Explanation: 
// JavaScript converts the boolean False to the number 0.

console.log(null + 5);
// Output: 5
// Explanation:
// In numeric operations, JavaScript converts null to the number 0.

console.log(undefined + 5);
// Output: NaN
// Explanation:
// JavaScript converts undefined to NaN in numeric operations.