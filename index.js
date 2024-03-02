// ReferenceError: Cannot access before initialization in JS

// EXAMPLE 1 - Initialize the variables before accessing them

// ✅ use the let keyword before accessing the variable
let arr = [1, 2, 3];
arr = [3, 2, 1];

// // ---------------------------------------------

// if (5 === 5) {
//   // ✅ use the const keyword before accessing the variable
//   const num = 100;
//   console.log(num);
// }

// // ---------------------------------------------

// function example() {
//   // ✅ use the let keyword before accessing the variable
//   let str = 'bobbyhadz.com';
//   console.log(str);
// }

// // ---------------------------------------------

// // ✅ Define a function with the function keyword instead
// const result = sum(5, 10);
// console.log(result); // 👉️ 15

// function sum(a, b) {
//   return a + b;
// }

// ------------------------------------------------------------------

// // EXAMPLE 2 - A local declaration shadows the outer one

// const arr = ['bobby', 'hadz', 'com'];

// if ('hi'.length === 2) {
//   // ⛔️ ReferenceError: Cannot access 'arr' before initialization
//   arr.push('test');

//   const arr = [1, 2, 3];
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Moving the variable to the top of the block

// const arr = ['bobby', 'hadz', 'com'];

// if ('hi'.length === 2) {
//   // 👇️ first declare the variable
//   const arr = [1, 2, 3];

//   // 👇️ access variable after
//   arr.push('test');

//   console.log(arr); // 👉️ [ 1, 2, 3, 'test' ]
// }

// console.log(arr); // 👉️ [ 'bobby', 'hadz', 'com' ]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Functions defined using the function keyword get hoisted to the top

// const result = sum(5, 10);
// console.log(result); // 👉️ 15

// function sum(a, b) {
//   return a + b;
// }
