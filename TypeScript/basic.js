// Primitives type  number, string boolen
// More Complex types : arrays, objects
// Function types , parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives type start only lowercase if write start letter uppercase then javascript understand object{Number}
// let age: number=12;
var age;
age = 12;
var userName;
userName = 'shiva';
console.log(userName);
var user;
user = true;
// More complex
var hobbies;
hobbies = ['sport', 'cooking'];
var person;
person = {
    name: 'shiva',
    age: 23
};
// person ={
//     empName =true;
// }
// Type inference
var course = 'typeScript is complete Guide';
// course=12134;
// Union type
var book = 'typescript';
book = 123;
console.log(book);
// Alias 
// function & types 
function add(a, b) {
    return a + b;
}
var res = add(4, 5);
console.log(res);
function print(value) {
    console.log(value);
}
// Generics
function insertBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertBeginning(demoArray, -1);
console.log(demoArray);
console.log(updatedArray);
// generics type function
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    // insert at last
    // const newArray=[ ...array,value]; 
    return newArray;
}
var demoStrArray = ['as', 'the ', 'type', 'generic'];
var stingArray = insertAtBeginning(demoStrArray, -1);
console.log(demoStrArray);
console.log(stingArray);
// classes typeScript
var Student = /** @class */ (function () {
    function Student(first, last, age, courses) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }
    // add method
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    return Student;
}());
var student = new Student('shiva', 'kant', 23, ['Typescript']);
student.enroll('NextJs');
console.log(student);


//  also write in short typeScript
var Student1 = /** @class */ (function () {
    function Student1(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    // add method
    Student1.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    return Student1;
}());
var student1 = new Student1('shiva', 'kant', 23, ['Typescript']);
student1.enroll('NextJs');
console.log(student1);
var max;
max = {
    fName: 'Shiva Kant',
    ages: 23,
    greet: function () {
        console.log("Hello");
    }
};
