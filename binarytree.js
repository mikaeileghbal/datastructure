function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}

function insert(data) {
	let n = new Node(data, null, null);
	if (this.root === null) {
		this.root = n;
	} else {
		let current = this.root;
		while (true) {
			parrent = current;
			if (data < current.left) {
				current = current.left;
				if (current === null) {
					parrent.left = n;
					break;
				}
			} else if (data >= current.data) {
				current = current.right;
				if (current === null) {
					parent.right = n;
					break;
				}
			}
		}
	}
}
