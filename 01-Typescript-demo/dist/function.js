"use strict";
// Function Declaration
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
// Arrow Expression
const sub = (num1, num2) => num1 - num2;
console.log(sub(4, 3));
// Function Expression
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(4, 7));
// optional Parameter : num3
const div = function (num1, num2, num3) {
    return num1 / num2;
};
console.log(div(6, 2));
// Default or required Parameter : num3
const defaultParameter = function (num1, num2, num3 = 10) {
    return num1 / num2;
};
console.log(defaultParameter(6, 2));
// Rest Parameter
const restParameter = function (num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((num, acc) => acc + num);
};
let numbers = [1, 2, 3, 4, 5, 6, 8];
console.log(restParameter(3, 4, ...numbers));
// Generic Function 
function getItems(items) {
    return new Array().concat(items);
}
let contactNumbers = getItems([1, 2, 3, 4, 5]);
let contactString = getItems(['a', 'b', 'c', 'd']);
console.log(contactNumbers, contactString);
//# sourceMappingURL=function.js.map