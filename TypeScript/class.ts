function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}   


class Person1 {
    ssn;
    firstName;
    lastName;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Person3 {
    ssn;
    firstName;
    lastName;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person = new Person3('171-28-0926','Shiva','Kant');
console.log(person.getFullName());



//  Inheritance
class Person2{
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
class Employee extends Person2 {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }    
    // describe(): string {
    //     return super.describe() + `I'm a ${this.jobTitle}.`;
    // }
}
let employee = new Employee('Shiva', 'Kant', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());


class Person4 {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    celebrateBirthday(): void {
        this.age++;
        console.log(`${this.name} is now ${this.age} years old! Happy birthday!`);
    }
}

// Example usage:
const person1 = new Person4("Shiva", 25);
console.log(`${person1.getName()} is ${person1.getAge()} years old.`);

person1.celebrateBirthday();
// Output: Shiva is now 26 years old! Happy birthday!
