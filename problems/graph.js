
class Graph {
  constructor() {
    // Code goes here ...
    this.adjList = new Object();

  }

  addVertex(vertex) {
    // Code goes here ...
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = []; // new Array()
    }
    if (this.adjList[vertex]) return;
  }

  addEdges(srcValue, destValue) {
    // Code goes here ...
    if (!this.adjList[srcValue]) {
      this.addVertex(srcValue)
    } 
    if (!this.adjList[destValue]) {
      this.addVertex(destValue)
    }
    this.adjList[srcValue].push(destValue)
    this.adjList[destValue].push(srcValue)
  }

//  adjList = {
  'a' : []
  'b' : []
  'c' : []
  'd' : []
  'e' : []
  'f' : []
}

  buildGraph(edges) {
    // Code goes here ...
    edges.forEach((arr, idx) => {  // adds vertex
      let currentVertex = arr[idx]
      let nextVertex = arr[idx + 1]
      if (!this.adjList[currentVertex]) {
        this.addVertex(currentVertex)
      }
      if (!this.adjList[nextVertex]) {
        this.addVertex(nextVertex)
      }
    })

  }

  breadthFirstTraversal(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalIterative(startingVertex) {
    // Code goes here ...
  }

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
    // Code goes here ...
  }

}

module.exports = {
  Graph
};









