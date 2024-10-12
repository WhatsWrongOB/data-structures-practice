class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  push(element) {
    this.items.push(element);
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.length--;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.length - 1];
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

const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());
