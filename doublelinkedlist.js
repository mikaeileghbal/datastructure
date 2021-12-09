/**
 * Double Linked List Data Structure
 * 
 */

function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.displayReverse = displayReverse;
    this.findPrevious = findPrevious;
    this.findLast = findLast;
}

function find(item) {
    let currentNode = this.head;
    while (currentNode.element != item) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(element, item) {
    let newNode = new Node(element);
    currentNode = this.find(item);
    newNode.next = currentNode.next;
    newNode.previous = currentNode;
    currentNode.next = newNode;
}

function display() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

function findPrevious(item) {
    let currentNode = this.head;
    while (currentNode.next != null && currentNode.next.element != item) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function remove(item) {
    let currentItem = this.find(item);
    if (currentItem != null) {
        currentItem.previous.next = currentItem.next;
        if (currentItem.next != null) {
            currentItem.next.previous = currentItem.previous;
        }
        currentItem.next = null;
        currentItem.previous = null;
    }
}

function findLast() {
    let currentNode = this.head;
    while (currentNode.next != null) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function displayReverse() {
    let currentNode = this.findLast();
    while (currentNode.previous != null) {
        console.log(currentNode.element);
        currentNode = currentNode.previous;
    }
}

let cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("New York", "Conway");
cities.insert("Alma", "New York");
cities.display();
cities.remove("Conway");
cities.display();
cities.displayReverse();

