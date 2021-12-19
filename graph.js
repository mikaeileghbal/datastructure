function Vertex(label) {
	this.label = label;
}

function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	for (let i = 0; i < this.vertices; i++) {
		this.adj[i] = [];
		this.adj[i].push("");
	}
	this.addEdge = addEdge;
	this.showGraph = showGraph;
}

function addEdge(v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph() {
	let result = "";
	for (let i = 0; i < this.vertices; i++) {
		result += i + " ->";
		for (let j = 0; j < this.vertices; j++) {
			if (this.adj[i][j] != undefined) {
				result += " " + this.adj[i][j];
			}
		}
		console.log(result);
		result = "";
	}
}

// Graph Test Program
//===================

let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);

g.showGraph();
