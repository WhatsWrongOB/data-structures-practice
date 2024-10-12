class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (this.adjacencyList[vertex1]) {
        this.adjacencyList[vertex1].push(vertex2);
      }
      if (this.adjacencyList[vertex2]) {
        this.adjacencyList[vertex2].push(vertex1);
      }
    }
  
    // Breadth-First Search
    bfs(start) {
      const queue = [start];
      const result = [];
      const visited = {};
  
      visited[start] = true;
  
      while (queue.length) {
        const vertex = queue.shift();
        result.push(vertex);
  
        for (const neighbor of this.adjacencyList[vertex]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
  
      return result;
    }
  
    // Depth-First Search (iterative)
    dfsIterative(start) {
      const stack = [start];
      const result = [];
      const visited = {};
  
      visited[start] = true;
  
      while (stack.length) {
        const vertex = stack.pop();
        result.push(vertex);
  
        for (const neighbor of this.adjacencyList[vertex]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        }
      }
  
      return result;
    }
  
    // Depth-First Search (recursive)
    dfsRecursive(start, visited = {}, result = []) {
      visited[start] = true;
      result.push(start);
  
      for (const neighbor of this.adjacencyList[start]) {
        if (!visited[neighbor]) {
          this.dfsRecursive(neighbor, visited, result);
        }
      }
  
      return result;
    }
  }
  
  // Example usage:
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addVertex('E');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'E');

  console.log('BFS:', graph.bfs('A'));          // BFS: [ 'A', 'B', 'C', 'D', 'E' ]
  console.log('DFS Iterative:', graph.dfsIterative('A')); // DFS Iterative: [ 'A', 'C', 'E', 'B', 'D' ]
  console.log('DFS Recursive:', graph.dfsRecursive('A')); // DFS Recursive: [ 'A', 'B', 'D', 'C', 'E' ]
  