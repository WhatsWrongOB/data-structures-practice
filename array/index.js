class CustomArray {
    constructor() {
      this.items = [];
      this.length = 0;
    }
  
    push(element) {
      this.items[this.length] = element;
      this.length++;
      return this.length;
    }
  
    pop() {
      if (this.length === 0) return undefined;
      const lastElement = this.items[this.length - 1];
      this.items.length = --this.length;
      return lastElement;
    }
  
    shift() {
      if (this.length === 0) return undefined;
      const firstElement = this.items[0];
      for (let i = 1; i < this.length; i++) {
        this.items[i - 1] = this.items[i];
      }
      this.length--;
      return firstElement;
    }
  
    unshift(element) {
      for (let i = this.length; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[0] = element;
      this.length++;
      return this.length;
    }
  
    insertAt(index, element) {
      if (index < 0 || index > this.length) return undefined;
      for (let i = this.length; i > index; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[index] = element;
      this.length++;
      return this.length;
    }
  
    deleteAt(index) {
      if (index < 0 || index >= this.length) return undefined;
      const deletedElement = this.items[index];
      for (let i = index; i < this.length - 1; i++) {
        this.items[i] = this.items[i + 1];
      }
      this.length--;
      return deletedElement;
    }
  
    reverse() {
      for (let i = 0; i < Math.floor(this.length / 2); i++) {
        let temp = this.items[i];
        this.items[i] = this.items[this.length - 1 - i];
        this.items[this.length - 1 - i] = temp;
      }
    }
  
    indexOf(element) {
      for (let i = 0; i < this.length; i++) {
        if (this.items[i] === element) return i;
      }
      return -1;
    }
  
    includes(element) {
      return this.indexOf(element) !== -1;
    }
  
    slice(start, end = this.length) {
      let result = new CustomArray();
      for (let i = start; i < end && i < this.length; i++) {
        result.push(this.items[i]);
      }
      return result.items;
    }
  
    concat(array) {
      let result = new CustomArray();
      for (let i = 0; i < this.length; i++) {
        result.push(this.items[i]);
      }
      for (let i = 0; i < array.length; i++) {
        result.push(array[i]);
      }
      return result.items;
    }
  
    join(separator = ',') {
      let result = '';
      for (let i = 0; i < this.length; i++) {
        result += this.items[i];
        if (i < this.length - 1) {
          result += separator;
        }
      }
      return result;
    }
  }
  
  const arr = new CustomArray();
  arr.push(1);
  arr.push(2);
  arr.push(3);
  console.log(arr.items); 
  arr.pop();
  console.log(arr.items); 
  arr.unshift(0);
  console.log(arr.items); 
  arr.insertAt(1, 5);
  console.log(arr.items);
  arr.deleteAt(2);
  console.log(arr.items); 
  arr.reverse();
  console.log(arr.items); 
  console.log(arr.slice(1)); 
  console.log(arr.concat([4, 5, 6])); 
  console.log(arr.join('-')); 
  