// Primitives type  number, string boolen
// More Complex types : arrays, objects
// Function types , parameters


// Primitives type start only lowercase if write start letter uppercase then javascript understand object{Number}
// let age: number=12;
var age: number
age = 12;


var userName: string;
userName = 'shiva'
console.log(userName);

var user: boolean;
user = true;


// More complex
var hobbies: string[];
hobbies = ['sport', 'cooking']


var person: {
    name: string;
    age: number;
}

person = {
    name: 'shiva',
    age: 23
}
// person ={
//     empName =true;
// }


// Type inference

var course: string = 'typeScript is complete Guide';

// course=12134;

// Union type
var book: string | number = 'typescript';
book = 123;
console.log(book);


// Alias 


// function & types 

function add(a: number, b: number): number {
    return a + b;
}
var res = add(4, 5);
console.log(res);

BBB
    return newArray;
}
var demoStrArray = ['as', 'the ', 'type', 'generic'];
var stingArray = insertAtBeginning(demoStrArray, -1);

console.log(demoStrArray);
console.log(stingArray);



// classes typeScript

class Student {
    firstName: string;
    lastName: string;
     private age: number;
    // if you add private property then add private 
    // by default property is public
    
    courses:string[];

    constructor(first: string, last: string, age: number, courses:string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses=courses

    }

    // add method
    enroll(courseName:string){
        this.courses.push(courseName);
    }

}
var student = new Student ('shiva', 'kant', 23,['Typescript'])
student.enroll('NextJs')
console.log(student);


//  also write in short typeScript
class Student1 {
        constructor(
        public firstName: string,
        public lastName: string, 
        public age: number,
        public courses:string[]) {        
    }

    // add method
    enroll(courseName:string){
        this.courses.push(courseName);
    }

}
var student1 = new Student1 ('shiva', 'kant', 23,['Typescript'])
student1.enroll('NextJs')
console.log(student1);


// Interface
interface Human{
    fName:string;
    ages:number;
    greet:()=>void;
}
var max:Human;
max={
    fName:'Shiva Kant',
    ages:23,
    greet(){
        console.log("Hello");
        
    }
}