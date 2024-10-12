class Node {
  constructor(left = null, data, right = null) {
    this.left = left;
    this.data = data;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(null, data, null);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  search(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      current = data < current.data ? current.left : current.right;
    }
    return false;
  }

  delete(data) {
    this.root = this._deleteNode(this.root, data);
  }

  _deleteNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this._deleteNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._deleteNode(node.right, data);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      const minNode = this._findMin(node.right);
      node.data = minNode.data;
      node.right = this._deleteNode(node.right, minNode.data);
    }
    return node;
  }

  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  inorderTraversal() {
    const result = [];
    this._inorderHelper(this.root, result);
    return result;
  }

  _inorderHelper(node, result) {
    if (node) {
      this._inorderHelper(node.left, result);
      result.push(node.data);
      this._inorderHelper(node.right, result);
    }
  }

  preorderTraversal() {
    const result = [];
    this._preorderHelper(this.root, result);
    return result;
  }

  _preorderHelper(node, result) {
    if (node) {
      result.push(node.data);
      this._preorderHelper(node.left, result);
      this._preorderHelper(node.right, result);
    }
  }

  postorderTraversal() {
    const result = [];
    this._postorderHelper(this.root, result);
    return result;
  }

  _postorderHelper(node, result) {
    if (node) {
      this._postorderHelper(node.left, result);
      this._postorderHelper(node.right, result);
      result.push(node.data);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);
console.log(bst.search(4)); 
console.log(bst.search(10)); 
bst.delete(7);
console.log(bst.inorderTraversal()); 
console.log(bst.preorderTraversal()); 
console.log(bst.postorderTraversal());
