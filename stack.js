/**
 * Stack Data Structure 
 * 
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[--this.top];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

let s = new Stack();
console.log(s.peek());

// Base conversion
//================
function toBase(number, base) {
    let s = new Stack();
    do {
        s.push(number % base);
        number = Math.floor(number / base);
        console.log(number);
    } while (number > 0);
    let converted = "";
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

console.log(toBase(32, 2));

// Palindrome
//===========

function isPalindrome(word) {
    let s = new Stack();
    for (let i = 0; i < word.length; i++) {
        s.push(word[i]);
    }

    let rWord = "";
    while (s.length() > 0) {
        rWord += s.pop();
    }
    if (word == rWord) {
        return true;
    }
    else {
        return false;
    }
}

console.log("isPalindrome: ", isPalindrome("racecar"));

function isPalindrome2(word) {
    return word === [...word].reverse();
}
console.log("isPalindrome: ", isPalindrome("racecar"));


// Pez dispencer
//==============
let pez = new Stack();
pez.push("red");
pez.push("yellow");
pez.push("white");
pez.push("red");
pez.push("yellow");
pez.push("red");

function pezDispencer(pez) {
    let yelloStack = new Stack();
    let tempStack = new Stack();
    while (pez.length() > 0) {
        let item = pez.pop();
        if (item === "yellow") {
            yelloStack.push(item);
        }
        else {
            tempStack.push(item);
        }
    }
    pez.clear();
    while (tempStack.length() > 0) {
        pez.push(tempStack.pop());
    }
    return pez;
}

console.log(pezDispencer(pez));

// Balanced Paranthesis
//=====================
function isBalancedParanthesis(exp) {
    let s = new Stack();
    for (let i = 0; i < exp.length; i++) {
        const nextChar = exp[i];
        if (nextChar === "(") {
            s.push(nextChar);
            continue;
        }

        if (nextChar === ")") {
            if (s.length() === 0) {
                return false;
            }
            s.pop();
        }
    }
    return s.length() === 0;
}
console.log(isBalancedParanthesis("(1+2+(3)*4)-(10)"));


// Postfix operator
//=================
function postfixCalculate(exp) {
    let s = new Stack();
    let expArray = exp.split(" ");
    expArray.forEach(element => {
        if (isOperator(element)) {
            s.push(compute(s.pop(), symbolToOperator(element), s.pop()));
        }
        else {
            s.push(element);
        }
    });
    return s.pop();
}

function isOperator(element) {
    switch (element) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            return true;
        default:
            return false;
    }
}

function compute(operand1, operator, operand2) {
    return operator(operand1, operand2);
}

function symbolToOperator(element) {
    switch (element) {
        case "+": return plus;
        case "-": return minus;
        case "*": return multiply
        case "/": return divide;
        case "%": return modolus;

    }
}

function plus(a, b) {
    return Number(a) + Number(b);
}
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function modolus(a, b) {
    return a % b;
}

console.log(postfixCalculate("3 4 * 2 + 3 - 2 * -1 *"));