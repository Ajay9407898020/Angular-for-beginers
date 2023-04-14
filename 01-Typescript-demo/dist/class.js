"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    login() {
        return { name: 'john', age: 12, id: 1, email: 'emainl@gmail.com' };
    }
}
let john = new Employee(2, 'John', { street: 'street', city: 'city', pin: 'pin', state: 'state' });
// john.id = 1;
// john.name = "John";
// john.address = "Highway 69";
console.log(john);
//# sourceMappingURL=class.js.map