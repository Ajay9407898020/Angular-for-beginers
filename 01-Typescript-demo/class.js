"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Employee.prototype.login = function () {
        return { name: 'john', age: 12, id: 1, email: 'emainl@gmail.com' };
    };
    Employee.variableAccessUsingClass = 'Special';
    return Employee;
}());
var john = new Employee(2, 'John', { street: 'street', city: 'city', pin: 'pin', state: 'state' });
// john.id = 1;
// john.name = "John";
// john.address = "Highway 69";
console.log(john);
console.log(Employee.variableAccessUsingClass);
