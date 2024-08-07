var app = /** @class */ (function () {
    function app() {
    }
    app.prototype.test = function () {
        console.log("test function");
    };
    return app;
}());
var a1 = new app();
a1.test();
function add1(a, b) {
    return a + b;
}
var result = add1(2, 5);
console.log(result);
//union type
var data = 'shiva';
data = 30;
//data =true;
console.warn(data);
// Enum in  TypeScript
var Days;
(function (Days) {
    Days[Days["mon"] = 2] = "mon";
    Days[Days["tue"] = 3] = "tue";
    Days[Days["wed"] = 4] = "wed";
    Days[Days["thu"] = 5] = "thu";
    Days[Days["fir"] = 6] = "fir";
    Days[Days["sat"] = 7] = "sat";
    Days[Days["sun"] = 8] = "sun";
})(Days || (Days = {}));
var whichDay;
whichDay = Days.mon;
console.log(whichDay);
//
// enum days{
//     mon='mon', tue='tue'
// }
// var whichdays:days;
// whichdays=days.mon
// console.log(whichdays=="mon")
var days;
(function (days) {
    days["mon"] = "mon";
    days["tue"] = "tue";
})(days || (days = {}));
function whichdays(day) {
    return day;
}
//var whichdays:days;
//whichdays=days.mon
console.log(whichdays(days.mon));
var a = 10;
var b = true;
var c = 'hello';
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
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    var isSummer;
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
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["draft"] = 0] = "draft";
    ApprovalStatus[ApprovalStatus["submitted"] = 1] = "submitted";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
var request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};
if (request.status === ApprovalStatus.approved) {
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
function fn(a) {
    if (typeof a === "string") {
        return true;
    }
    else if (typeof a === "number") {
        return false;
    }
    // make the function valid
    // return neverOccur();
}
//   let neverOccur = () => {
//      throw new Error('Never!');
//   } 
// const d=fn('shiva')
var d = fn(2333);
console.log(d);
//   The never type contains no value.
// The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop
// UNION TYPE
// A TypeScript union type allows you to store a value of one or several types in a variable.
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
var abc = add('shiva', 1);
console.log(abc);
// tuple type sequenc must be same as the define
var skill;
skill = ['Programming', 5];
// let skill: [string, number];
// skill = [5, 'Programming'];
