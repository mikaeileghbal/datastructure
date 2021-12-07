/**
 * List Data Structure
 * 
 */
function List() {
    // valriables
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    // methods
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    let foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    let insertAfter = this.find(after);
    if (insertAfter > -1) {
        this.dataStore.splice(insertAfter + 1, 0, element)
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.pos = this.listSize = 0;
}

function contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.dataStore.length - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if (this.pos < this.listSize) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}


// Test programm
let names = new List();
names.append("Michael");
names.append("John");
names.append("Wiillie");
console.log(names.toString());

for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}

// Video rental 
//=============
let moviesArray = ["Th Godfather", "Pulp Fiction", "Casablanca", "Titanic"];
let customers = new List();
let movies = new List();

for (let i = 0; i < moviesArray.length; i++) {
    movies.append(moviesArray[i]);
}

console.log(movies);

function checkout(name, movie, customerList, movieList) {
    if (movieList.contains(movie)) {
        console.log("ok Exists");
        customerList.append({ name, movie });
        movieList.remove(movie);
    }
    else
        return "Not available!";
}

console.log(checkout("Mikaeil", "Casablanca", customers, movies));
console.log(customers.dataStore);