export interface User {
    name: string,
    age: number,
    id: number,
    email?: string
}
let john: User = { name: 'john', age: 12, id: 1, email: 'emainl@gmail.com' }


export interface Address {
    street: string,
    city: string,
    state: string,
    pin: string
}

// Extends User interface
export interface Employee extends User {
    salary: number,
}

let employee: Employee = {
    name: 'john', age: 12, id: 1, email: 'emainl@gmail.com', salary: 12000
}

export interface Login {
    login(): User
}


// Object destructring 
// What if we only want name and email from user object
// loginEmail is alias name of email
let { name, email: loginEmail } = john;
console.log(name, loginEmail);

// Array Destructring
let [users1, users2, ...rest]: User[] = [
    {name: 'john', age: 12, id: 1, email: 'emainl@gmail.com'},
    {name: 'mohn', age: 22, id: 1, email: 'hotmail@gmail.com'},
    {name: 'soham', age: 32, id: 1, email: 'soham@gmail.com'},
    {name: 'rohan', age: 32, id: 1, email: 'rohan@gmail.com'},
];
console.log(users1, users2);
console.log(rest);