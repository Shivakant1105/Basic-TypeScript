
class app{
    test()
    {
    console.log("test function")
    }
    }
    let a1=new app();
    a1.test()



    
function add1(a: number, b: number) {
    return a + b;
}

const result = add1(2, 5);
console.log(result);
//union type
let data:string|number='shiva'
data=30;
//data =true;
console.warn(data)


// Enum in  TypeScript
enum Days{
	mon=2, tue, wed,thu, fir, sat, sun
}
let whichDay:Days;
whichDay=Days.mon
console.log(whichDay)

//
// enum days{
//     mon='mon', tue='tue'
// }
// var whichdays:days;
// whichdays=days.mon
// console.log(whichdays=="mon")

enum days{
    mon='mon', tue='tue'

}
function whichdays(day:days)
{
    return day
}
//var whichdays:days;
//whichdays=days.mon
console.log(whichdays(days.mon))

type varType =string|number|boolean
let a :varType=10;
let b:varType=true;
let c:varType='hello'


// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}.`)
//   }
  
//   printStatusCode('hello');
//   printStatusCode('404');

// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}.`)
//   }
  
//   printStatusCode('hello');
//   printStatusCode('404');
enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};
  function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};
const request =  {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log('Send email to the Applicant...');
}   



// never type 
// function fn(a: string | number): boolean {
//     if (typeof a === "string") {
//       return true;
//     } else if (typeof a === "number") {
//       return false;
//     }   
//   }
function fn(a: string | number): boolean {
    if (typeof a === "string") {
      return true;
    } else if (typeof a === "number") {
      return false;
    }  
    // make the function valid
    // return neverOccur();
  }
  
//   let neverOccur = () => {
//      throw new Error('Never!');
//   } 
// const d=fn('shiva')
const d=fn(2333)
console.log(d);

//   The never type contains no value.
// The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop

// UNION TYPE

// A TypeScript union type allows you to store a value of one or several types in a variable.
function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;   
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
var abc=add('shiva' ,1)
console.log(abc);

// tuple type sequenc must be same as the define
    let skill: [string, number];
    skill = ['Programming', 5];
// let skill: [string, number];
// skill = [5, 'Programming'];