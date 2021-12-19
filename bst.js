function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
	this.count = 1;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
	this.postOrder = postOrder;
	this.getMin = getMin;
	this.getMax = getMax;
	this.find = find;
	this.remove = remove;
	this.removeNode = removeNode;
	this.update = update;
}

function insert(data) {
	let n = new Node(data, null, null);
	if (this.root === null) {
		this.root = n;
	} else {
		let current = this.root;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current === null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current === null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}

function update(data) {
	let grade = this.find(data);
	grade.count++;
	return grade;
}

function inOrder(node) {
	if (node !== null) {
		inOrder(node.left);
		console.log(node.show() + ", ");
		inOrder(node.right);
	}
}

function preOrder(node) {
	if (node !== null) {
		console.log(node.show() + ", ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder(node) {
	if (node !== null) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + ", ");
	}
}

function getMin() {
	let current = this.root;
	while (current.left !== null) {
		current = current.left;
	}
	return current.data;
	// To return the position of node simply:
	// return current;
}

function getMax() {
	let current = this.root;
	while (current.right !== null) {
		current = current.right;
	}
	return current.data;
}

function find(data) {
	let current = this.root;
	while (current.data !== data) {
		if (data < current.data) {
			current = current.left;
		} else {
			current = current.right;
		}
		if (current === null) {
			return null;
		}
	}
	return current;
}

function remove(data) {
	root = removeNode(this.root, data);
}

function removeNode(node, data) {
	if (node === null) {
		return null;
	}
	if (data === node.data) {
		// node has no children
		if (node.left === null && node.right === null) {
			return null;
		}
		// node has no left child
		if (node.left === null) {
			return node.right;
		}
		// node has no right child
		if (node.right === null) {
			return node.left;
		}
		// node has two children
	} else if (data < node.data) {
	} else {
	}
}

// Counting Occurrences
// ====================

function printArray(arr) {
	let result = arr[0] + " ";
	for (let i = 1; i < arr.length; i++) {
		result += arr[i] + " ";
		if (i % 10 === 0) {
			result += "\n";
		}
	}
	return result;
}

function generateArray(length) {
	let arr = [];
	for (let i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * 101);
	}
	return arr;
}

// Test BST
//=========
console.log("bst");
let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log("inOrder : ");
inOrder(nums.root);
console.log("preOrder : ");
preOrder(nums.root);
console.log("postOrder : ");
postOrder(nums.root);

console.log(nums.getMin());
console.log(nums.getMax());

console.log(nums.find(37) !== null);

// Test Occurrences in a BST

let grades = generateArray(100);
console.log(printArray(grades));

let gradesTree = new BST();
gradesTree.insert(grades[0]);
for (let i = 1; i < grades.length; i++) {
	let g = grades[i];
	let grade = gradesTree.find(g);
	if (grade === null) {
		gradesTree.insert(g);
	} else {
		gradesTree.update(g);
	}
}

let number = 87;

let grade = gradesTree.find(number);
if (grade === null) {
	console.log("Not exist.");
} else {
	console.log(`${grade.data} : ${grade.count}`);
}
