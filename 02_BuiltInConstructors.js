// String

const name1 = "Yash";
const name2 = new String("Yash");

console.log(typeof name1, name1);
console.log(typeof name2, name2);

if (name2 == "Yash") console.log("Yes");
else console.log("No");

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num1, num1);
console.log(typeof num2, num2);

if (num2 == 5) console.log("Yes");
else console.log("No");

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Functions
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return x+ y");

console.log(getSum1(1, 2), getSum2(3, 4));

// Objects
const obj1 = {
  name: "Yash",
};

const obj2 = new Object({ name: "Yash" });

console.log(obj1, obj2);

// Arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr1, arr2);

// Regular Expression
const re1 = /\w+/;
const re2 = new RegExp("\\w+");

console.log(re1, re2);
