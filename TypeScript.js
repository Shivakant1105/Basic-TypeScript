// function add(n1: number, n2: number, showResult: boolean, phrase: string){
//     // if (typeof n1 !== "number" || typeof n2 !== "number"){
//     //     throw new Error("Incorrect input!");
//     // }
//     let result = n1 + n2;
//     if(showResult){
//         //console.log(`${phrase}${n1 + n2}`);
//         console.log(phrase + result);
//     } else {
//         return n1 + n2;
//     }
//     return n1 + n2;
// }
// let number1 = 6;
// let number2 = 10.9;
// let printResult = true;
// let resultPhrase = "Result is : ";
// add(number1,number2, printResult, resultPhrase);
// let person = {
//     name: "Faizan",
//     age: 25,
//     hobbies: ["Football", "Gaming", "Music"]
// };
// console.log(person.name);
// let favouriteActivities: string[];
// favouriteActivities = ["Eating", "Playing"];
// for(let hobby of person.hobbies){
//     console.log(hobby.toUpperCase());   // toUpperCase will convert all elements in arrays to uppercase
// }
// -----------  Tuples ---------------
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string],
// } = {
//     name: "Faizan",
//     age: 25,
//     hobbies: ["Football", "Gaming", "Music"],
//     role: [2, "Author"],
// };
// person.role = [1, "Admin"];
// //person.role.push("Admin");  // we can push in tuples because push is exception which is allowed in tuples
// //person.role[1] = 10;      the typescript will give error because we have already described the length of the elements above in the object data type delaration 
// console.log(person.role);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = { name: "Faizan",
    age: 25,
    hobbies: ["Football", "Gaming", "Music"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("That's Enum");
}
