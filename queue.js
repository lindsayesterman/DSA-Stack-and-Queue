class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }
  dequeu(data) {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
  peek() {
    if (this.first === null) {
      this.first = null;
    }
    return this.first;
  }
  isEmpty() {
    if (this.first === null) {
      return true;
    } else {
      return false;
    }
  }
  display() {
    let print = "";
    if (this.isEmpty() || this.first === null) {
      return null;
    }
    let currNode = this.first;
    if (currNode.next === null) {
      return currNode.value;
    }
    while (currNode !== null) {
      print = print + currNode.value + " -> ";
      currNode = currNode.next;
    }

    return print;
  }
}

function main() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");
  starTrekQ.deenqueue("Spock");
}
