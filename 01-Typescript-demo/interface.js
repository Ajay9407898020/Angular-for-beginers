"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var john = { name: 'john', age: 12, id: 1, email: 'emainl@gmail.com' };
var employee = {
    name: 'john', age: 12, id: 1, email: 'emainl@gmail.com', salary: 12000
};
// Object destructring 
// What if we only want name and email from user object
// loginEmail is alias name of email
var name = john.name, loginEmail = john.email;
console.log(name, loginEmail);
// Array Destructring
var _a = [
    { name: 'john', age: 12, id: 1, email: 'emainl@gmail.com' },
    { name: 'mohn', age: 22, id: 1, email: 'hotmail@gmail.com' },
    { name: 'soham', age: 32, id: 1, email: 'soham@gmail.com' },
    { name: 'rohan', age: 32, id: 1, email: 'rohan@gmail.com' },
], users1 = _a[0], users2 = _a[1], rest = _a.slice(2);
console.log(users1, users2);
console.log(rest);
