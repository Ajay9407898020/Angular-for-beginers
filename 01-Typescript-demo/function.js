var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function Declaration
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
// Arrow Expression
var sub = function (num1, num2) { return num1 - num2; };
console.log(sub(4, 3));
// Function Expression
var mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(4, 7));
// optional Parameter : num3
var div = function (num1, num2, num3) {
    return num1 / num2;
};
console.log(div(6, 2));
// Default or required Parameter : num3
var defaultParameter = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 10; }
    return num1 / num2;
};
console.log(defaultParameter(6, 2));
// Rest Parameter
var restParameter = function (num1, num2) {
    var num3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        num3[_i - 2] = arguments[_i];
    }
    return num1 + num2 + num3.reduce(function (num, acc) { return acc + num; });
};
var numbers = [1, 2, 3, 4, 5, 6, 8];
console.log(restParameter.apply(void 0, __spreadArray([3, 4], numbers, false)));
// Generic Function 
function getItems(items) {
    return new Array().concat(items);
}
var contactNumbers = getItems([1, 2, 3, 4, 5]);
var contactString = getItems(['a', 'b', 'c', 'd']);
console.log(contactNumbers, contactString);
function genericFuntion(item) {
    return item.concat.apply(item, item);
}
var addition = genericFuntion([1, 2, 3, 4]);
console.log('addition', addition);
