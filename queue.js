/**
 * Queue Data Structure
 * 
 */
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift(element);
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    let result = "";
    for (let index = 0; index < this.dataStore.length; index++) {
        result += this.dataStore[index] + ", ";
    }
    return result;
}

function empty() {
    return this.dataStore.length === 0;
}

function count() {
    return this.dataStore.length;
}

// Dance Partners
//===============

function dancer(name, gender) {
    this.name = name;
    this.gender = gender;
}

const data = ["F Sandra", "M Alex", "F Alice", "M Michael", "M Johnny"]
let maleDancers = new Queue();
let femaleDancers = new Queue();

function getDancers(males, females, data) {
    for (let i = 0; i < data.length; i++) {
        const dataItem = data[i].split(" ");
        const dancerTemp = new dancer(dataItem[1], dataItem[0]);
        if (dancerTemp.gender === "M") {
            males.enqueue(dancerTemp);
        }
        else if (dancerTemp.gender === "F") {
            females.enqueue(dancerTemp);
        }
    }
}

function dance(males, females) {
    while (!males.empty() && !females.empty()) {
        console.log(`Female: ${females.dequeue().name} - Male: ${males.dequeue().name}`);
    }
}

getDancers(maleDancers, femaleDancers, data);
console.log("Male dancers: ", maleDancers);
console.log("Female dancers: ", femaleDancers);

dance(maleDancers, femaleDancers);
if (maleDancers.count() > 0) {
    console.log(`Waiting: ${maleDancers.count()}`);
}

// Radix Sort
//===========
/**
 * 
 * @param {array} nums 
 * @param {queue} queues 
 * @param {number} n 
 * @param {number} digit 
 */
function distribute(nums, queues, n, digit) {
    for (let i = 0; i < n; i++) {
        if (digit === 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        }
        else if (digit === 10) {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    let i = 0;
    for (let digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function displayNums(nums) {
    let result = "";
    for (let i = 0; i < nums.length; i++) {
        result += nums[i] + ", ";
    }
    return result;
}

let nums = [];
let queues = [];
for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random() * 101);
}
for (let i = 0; i < 10; i++) {
    queues[i] = new Queue();
}

console.log(displayNums(nums));
distribute(nums, queues, 10, 1);
collect(queues, nums)
console.log(displayNums(nums));
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log(displayNums(nums));