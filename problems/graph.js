
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
// Expected: (['a', 'd', 'g', 'f', 'c', 'b', 'e']);
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
  //a = [b, c, d]  key = a
  // b = [a, c. e]
  // c = [a, f, g]
  // d [a, g]
  // e = [b]
  // f = [g]
  // g = [c, f]
  // h = []
// Expected: (['a', 'd', 'g', 'f', 'c', 'b', 'e']);
   let stack = [startingVertex]
   let resultArr = [];
   while (stack.length) {
     let current = stack.pop()
      if (!resultArr.includes(current)) {
      let arr = this.adjList[current]
     arr.forEach((el)=> {
      stack.push(el);
     }) 
     resultArr.push(current)
    }
  }
    return resultArr
}
  

// startingVertex = a
// stack = [startingVertex]
// 
// visited = {a}
// vertices = [a]

  depthFirstTraversalRecursive(startingVertex, visited = new Set(), vertices = []) {
 // base case
 if (visited.has(startingVertex)) return;

 visited.add(startingVertex);
 vertices.push(startingVertex);

 adjList[startingVertex].forEach((el) => {
   this.depthFirstTraversalRecursive(el, visited, vertices)
 })

 return vertices;

}

}
module.exports = {
  Graph
};









