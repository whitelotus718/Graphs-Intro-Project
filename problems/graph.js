
class Graph {
  constructor() {
    // Code goes here ...
    this.adjList = new Object();

  }

  addVertex(vertex) {
    // Code goes here ...
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Array();
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
  }

  buildGraph(edges) {
    // Code goes here ...
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









