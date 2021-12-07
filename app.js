let x = 3;
let y = 1.1;
let z = x * y;
console.log(z.toPrecision(2));

const monthName = 10;
switch (monthName) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("Oktober")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;

    default:
        break;
}

function factorial(number) {
    let result = 1;
    for (let i = number; i > 1; --i) {
        result *= i;
    }
    return result;
}

console.log(factorial(10));

function factorialR(number) {
    if (number === 1) {
        return 1
    }
    else {
        return number * factorialR(number - 1);
    }
}
console.log(factorialR(10));

// Define object with constructor function
//========================================

function Checking(amount) {
    this.balance = amount;
    // this.deposit = deposit; // function
    // this.withdraw = withdraw;
    // this.toString = toString;
}
Checking.prototype.deposit = deposit; // function
Checking.prototype.withdraw = withdraw;
Checking.prototype.toString = toString;

function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance) {
        console.log("Insufficient funds.");
    }
}

function toString() {
    return "Balance: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);
console.log(account.toString()); // Balance: 1500
account.withdraw(750);
console.log(account.toString()); // Balance: 750
account.withdraw(800); // displays "Insufficient funds"
console.log(account.toString());

let sentence = "The quick brouwn fox jumped over lazy dog";
let words = sentence.split(" ");
let wordsLenght = words.length;

console.log(sentence);
console.log(words);

for (let i = 0; i < wordsLenght; i++) {
    console.log(words[i]);
}

for (let word of words) {
    console.log(word);
}

console.log(words.join());
console.log(words.toString());

let source = [1, 2, 3];
let dest = [4, 5];
let conc = source.concat(dest);
console.log(conc);
console.log(source);

dest.unshift(1);
// dest.unshift(2);
// dest.unshift(3);
console.log(dest);

source = [1, 2, 3, 100, 200, 300, 400, 4, 5];
dest = source.splice(3, 4);
console.log(dest);
console.log(source);

source.reverse();
console.log(source);

function comapre(num1, num2) {
    return num1 - num2
}

console.log(source.sort(comapre));


// Non array iterators
//====================
// foeEach()
// every()
// sum()

function square(num) {
    console.log(num, num * num);
}

source.forEach(square);

source.forEach(num => console.log(num, num * num));

//---------------

function even(num) {
    return num % 2 === 0
}

if (source.every(even)) {
    console.log("all are even");
}
else {
    console.log("all are not even")
}

console.log(source.every(num => num % 2 === 0));
console.log(source.some(num => num % 2 === 0));

//console.log(source.reduce((sum, num) => { return sum += num }, 0));
console.log(source.reduce((arrObject, num, index) => {
    arrObject[index] = num;
    return arrObject;
}, {}));

function add(total, value) {
    return total + value;
}
console.log(source.reduce(add));


console.log(source.map((item => item * 5)));
console.log(source);


function isOdd(num) {
    return num % 2 === 0;
}

function isEven(num) {
    return num % 2 !== 0;
}

let oddNums = source.filter(isOdd);
let evenNums = source.filter(isEven);

console.log(oddNums);
console.log(evenNums);
console.log(source);

// Matrix
//=======

Array.matrix = function (numRows, numColumns, initial) {
    let arr = [];
    for (let i = 0; i < numRows; i++) {
        let column = [];
        for (let j = 0; j < numColumns; j++) {
            column[j] = initial;
        }
        arr[i] = column;
    }
    return arr;
}

// Arrays in objects
// Temperature class
let data = [];
data.push(3);
console.log(data);


//----------------------------

function MyStack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.length = length;
    this.clear = clear;
    //this.toString = toString;
}

function push(element) {
    this.dataStore[this.top++] = element
}

function pop() {
    return this.dataStore[this.top--];
}

function length() {
    return this.dataStore.length;
}

function clear() {
    this.top = 0;
}

MyStack.prototype.toString = function () {
    return this.dataStore.join(", ");
}


console.log("ok done")
let myStack = new MyStack();
myStack.push(2);
myStack.push(3);
myStack.pop();

console.log(myStack.toString());


