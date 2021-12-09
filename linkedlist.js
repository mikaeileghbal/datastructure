/**
 * Linked List Data Structure
 * 
 */

function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
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
    let prevItem = this.findPrevious(item);
    if (prevItem != null) {
        prevItem.next = prevItem.next.next;
    }
}



let cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("New York", "Conway");
cities.insert("Alma", "New York");
cities.display();
cities.remove("Conway");
cities.display();
