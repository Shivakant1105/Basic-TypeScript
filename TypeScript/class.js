var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}
var Person1 = /** @class */ (function () {
    function Person1(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person1;
}());
var Person3 = /** @class */ (function () {
    function Person3(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person3.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person3;
}());
var person = new Person3('171-28-0926', 'Shiva', 'Kant');
console.log(person.getFullName());
//  Inheritance
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person2.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person2.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person2;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        // call the constructor of the Person class:
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    return Employee;
}(Person2));
var employee = new Employee('Shiva', 'Kant', 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
var Person4 = /** @class */ (function () {
    function Person4(name, age) {
        this.name = name;
        this.age = age;
    }
    Person4.prototype.getName = function () {
        return this.name;
    };
    Person4.prototype.getAge = function () {
        return this.age;
    };
    Person4.prototype.celebrateBirthday = function () {
        this.age++;
        console.log("".concat(this.name, " is now ").concat(this.age, " years old! Happy birthday!"));
    };
    return Person4;
}());
// Example usage:
var person1 = new Person4("Shiva", 25);
console.log("".concat(person1.getName(), " is ").concat(person1.getAge(), " years old."));
person1.celebrateBirthday();
// Output: Shiva is now 26 years old! Happy birthday!
