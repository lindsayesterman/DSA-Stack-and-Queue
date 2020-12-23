const _Node = require("./node.js");

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    /* If the stack is empty, then the node will be the
           top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  peek(stack) {
    return stack.top.data;
  }
  isEmpty() {
    if (this.top === null) {
      console.log("stack is empty");
    } else {
      console.log("stack is not empty");
    }
  }
  display(stack) {
    let current = stack.top;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reverse = new Stack();
    for (let i = 0; i < s.length; i++) {
      reverse.push(s.charAt(i));
    }
    for (let j = 0; j < s.length; j++) {
      if (s[j] === reverse.pop()) continue;
      else return false;
    }
    return true;
  }
  matchParentheses(str) {
    let newStack = new Stack();
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        newStack.push(str[i]);
        counter++;
      }
      if (str[i] === ")" && !newStack.top) {
        return new Error(`Missing an open parenthesis at ${counter}`);
      }
      if (str[i] === ")") {
        newStack.pop();
        counter++;
      }
      if (newStack.top === "(") {
        return new Error(`Missing closing parenthesis at ${counter}`);
      }
    }
    return true;
  }
  sortStack(stack) {
    let holderStack = new Stack();
    if (!stack.top) {
      return;
    }
    for (let i = 0; i < stack.length; i++) {}
  }
}

function main() {
  let starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  console.log(starTrek);
  console.log("this is peek: " + starTrek.peek(starTrek));
  console.log(starTrek.isEmpty());
  starTrek.pop("McCoy");
  starTrek.display(starTrek);
}

main();
