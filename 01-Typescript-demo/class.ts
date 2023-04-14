import { Address, Login, User } from "./interface";

class Employee implements Login {
    id!: number;
    name!: string;
    address!: Address;

    static variableAccessUsingClass = 'Special';

    constructor(id: number, name: string, address: Address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    login() : User {
        return { name: 'john', age: 12, id: 1, email: 'emainl@gmail.com' }
    }

}

let john = new Employee(2, 'John', { street: 'street', city: 'city', pin: 'pin', state: 'state' });

// john.id = 1;
// john.name = "John";
// john.address = "Highway 69";

console.log(john);
console.log(Employee.variableAccessUsingClass);