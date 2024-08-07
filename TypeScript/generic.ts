
// Generic functions with multiple types
function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}


let result = merge(
    { name: 'Shiva' },
    { jobTitle: 'Frontend Developer' }
);

console.log(result);


function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let numbers = [1, 5, 7, 4, 2, 9];
let randomEle = getRandomElement<number>(numbers); 
console.log(randomEle);

// Generic Constraints
// Using type parameters in generic constraints
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let str = prop({ name: 'Shiva' }, 'name');
console.log(str);

// Use extends keyword to constrain the type parameter to a specific type.
// Use extends keyof to constrain a type that is the property of another object.

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}
// 
function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

let numbers = new Stack<number>(5);

while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`Pop ${n} from the stack.`);
}
// 

let words = 'The quick brown fox jumps over the lazy dog'.split(' ');

let wordStack = new Stack<string>(words.length);

// push words into the stack
words.forEach(word => wordStack.push(word));

// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
