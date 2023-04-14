"use strict";
let lname = 'john';
lname.toLocaleUpperCase();
console.log(lname);
let age;
age = 24;
let result = parseInt("20");
console.log(result);
let empList = ['santosh', 'jai', 'harish'];
// empList = [3];
let numList = [2, 3, 4, 5, 6, 7];
let results = numList.filter(n => n > 2);
console.log(results);
let santosh = empList.find(emp => emp === 'santosh');
console.log(santosh);
let totalNum = numList.reduce((value, acc) => acc + value);
console.log(totalNum);
let c = 2 /* Color.Blue */;
//# sourceMappingURL=datatypes.js.map