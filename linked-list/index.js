class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  removeHead() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeTail() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  deleteNode(data) {
    if (!this.head) return;
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  addAtPosition(data, position) {
    if (position === 0) {
      this.prepend(data);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; current && i < position - 1; i++) {
      current = current.next;
    }
    if (!current) return;
    newNode.next = current.next;
    current.next = newNode;
  }

  addAfterNode(targetData, data) {
    let current = this.head;
    while (current) {
      if (current.data === targetData) {
        const newNode = new Node(data, current.next);
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  printList() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(' -> '));
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.addAtPosition(1.5, 1);
list.addAfterNode(1, 1.25);
list.printList(); 
list.removeHead();
list.printList(); 
list.removeTail();
list.printList(); 
list.deleteNode(1.25);
list.printList(); 
