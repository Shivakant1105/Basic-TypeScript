var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Generic functions with multiple types
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var result = merge({ name: 'Shiva' }, { jobTitle: 'Frontend Developer' });
console.log(result);
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 5, 7, 4, 2, 9];
var randomEle = getRandomElement(numbers);
console.log(randomEle);
// Generic Constraints
// Using type parameters in generic constraints
function prop(obj, key) {
    return obj[key];
}
var str = prop({ name: 'Shiva' }, 'name');
console.log(str);
// Use extends keyword to constrain the type parameter to a specific type.
// Use extends keyof to constrain a type that is the property of another object.
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length === this.size;
    };
    Stack.prototype.push = function (element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    };
    return Stack;
}());
// 
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
var numbers = new Stack(5);
while (!numbers.isEmpty()) {
    var n = numbers.pop();
    console.log("Pop ".concat(n, " from the stack."));
}
// 
var words = 'The quick brown fox jumps over the lazy dog'.split(' ');
var wordStack = new Stack(words.length);
// push words into the stack
words.forEach(function (word) { return wordStack.push(word); });
// pop words from the stack
while (!wordStack.isEmpty()) {
    console.log(wordStack.pop());
}
