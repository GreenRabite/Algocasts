// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor(){
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  add(element){
    this.pushStack.push(element);
  }

  remove(){
    while (this.pushStack.peek() !== undefined) {
      this.popStack.push(this.pushStack.pop());
    }
    let result = this.popStack.pop();
    while (this.popStack.peek() !== undefined) {
      this.pushStack.push(this.popStack.pop());
    }
    return result;
  }

  peek(){
    while (this.pushStack.peek() !== undefined) {
      this.popStack.push(this.pushStack.pop());
    }
    let result = this.popStack.peek();
    while (this.popStack.peek() !== undefined) {
      this.pushStack.push(this.popStack.pop());
    }
    return result;
  }
}

module.exports = Queue;
