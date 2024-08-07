// TypeScript functions are the building blocks of readable, maintainable, and reusable code.
function add(a: number, b: number): number {
    return a + b;
}
let sum = add(10, 12);
console.log(sum);


// A function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts with the following syntax:
// (parameter: type, parameter:type,...) => type
let adds: (x: number, y: number) => number;



// TypeScript Optional Parameters
// Use the parameter?: type syntax to make a parameter optional.
// Use the expression typeof(parameter) !== 'undefined' to check if the parameter has been initialized.   
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
let res=multiply(2,4)

// let res=multiply(2,4,3)
console.log(res);


// Default Parameters   
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

// Rest Parameters
/* A function has only one rest parameter.
The rest parameter appears last in the parameter list.
The type of the rest parameter is an array type.*/

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
console.log(getTotal()); // 0
console.log(getTotal( 10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60


// TypeScript function overloadings
function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}


console.log(addNumbers(3,6));
console.log(addStrings('s','h'));


function add2(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}   
let plus=add2(2,4)
let plus1=add2('shiva','kant')
console.log(plus);
console.log(plus1);

// Method overloading
class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}

let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array