class Queue {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  enqueue(element) {
    this.items.push(element);
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    this.length--;
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  clear() {
    this.items = [];
    this.length = 0;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front()); 
console.log(queue.dequeue()); 
console.log(queue.size()); 
console.log(queue.isEmpty()); 
queue.clear();
console.log(queue.isEmpty()); 
