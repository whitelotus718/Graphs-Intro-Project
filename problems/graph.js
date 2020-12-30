
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



  buildGraph(edges) {
    // Code goes here ...
    edges.forEach((subArray) => { 
       // adds vertex
       if (subArray.length===1) {
         this.addVertex(subArray[0])
       } else {
         this.addEdges(subArray[0], subArray[1])
       }
    })
    return this.adjList;
  }
  
  // for (key in adjList)
  // this.adjList[b].forEach((el) )
  // a = [b, c, d]  key = a
  // b = [a, c. e]
  // c = [a, f, g]
  // d [a, g]
  // e = [b]
  // f = [g]
  // g = [c, f]
  // h = []

    // resultArr = ['a', 'b', 'c', 'd']
  breadthFirstTraversal(startingVertex) {
    const resultArr = [startingVertex]
    for (let key in this.adjList) {
      this.adjList[key].forEach((el) => {
        if (!resultArr.includes(el))
        resultArr.push(el)
      })
    }
    return resultArr;
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









