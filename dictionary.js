function Dictionary() {
	this.dataStore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
	this.exist = exist;
}

function add(key, value) {
	this.dataStore[key] = value;
}

function find(key) {
	return this.dataStore[key];
}

function exist(key) {
	return key in Object.keys(this.dataStore);
}

function remove(key) {
	delete this.dataStore[key];
}

function showAll() {
	for (let key in Object.keys(this.dataStore).sort()) {
		console.log(`${key} -> ${this.dataStore[key]} `);
	}
}

function count() {
	let n = 0;
	for (let key in Object.keys(this.dataStore)) {
		n++;
	}
	return n;
}

function clear() {
	for (let key in Object.keys(this.dataStore)) {
		delete this.dataStore[key];
	}
}

// Test program
//=============

let books = new Dictionary();
books.add("Mike", "123");
books.add("David", "435");
books.add("Cynthia", "345");
console.log(books.find("David"));
books.showAll();
console.log(books);
console.log(books.dataStore);
for (let key in Object.keys(books.dataStore)) {
	console.log(key);
	console.log(books[key]);
}
console.log(books.count());
books.clear();
console.log(books.dataStore);

// Number of word occurences
//==========================
let string = "the brown fox jumped over the blue fox";
let stringArray = string.split(" ");
let words = {};
console.log(stringArray);
for (let word of stringArray) {
	if (word in words) {
		words[word]++;
	} else {
		words[word] = 1;
	}
}
console.log(words);
console.log(sortObject(words));

function sortObject(obj) {
	let result = Object.entries(obj);
	result.sort((first, second) => first[2] - second[1]);
	return result;
}
