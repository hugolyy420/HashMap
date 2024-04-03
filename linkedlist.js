import Node from './node.js';

export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(key, value) {
    if (this.head == null) this.prepend(value);
    else {
      let temp = this.head;
      while (temp.nextNode !== null) temp = temp.nextNode;
      temp.nextNode = new Node(key, value, null);
    }
  }

  size() {
    let size = 0;
    let temp = this.head;
    while (temp !== null) {
      size += 1;
      temp = temp.nextNode;
    }
    return size;
  }

  contains(key) {
    if (this.head == null) return false;
    let temp = this.head;
    while (temp.key !== key && temp.nextNode !== null) temp = temp.nextNode;
    if (temp.key === key) return true;
    else if (temp.nextNode == null) return false;
  }

  find(key) {
    if (this.head == null) return null;
    let currentIndex = 0;
    let temp = this.head;
    while (temp.key !== key && temp.nextNode !== null) {
      temp = temp.nextNode;
      currentIndex += 1;
    }
    if (temp.key === key) return currentIndex;
    else if (temp.nextNode == null) return null;
  }

  removeAt(index) {
    if (this.head == null) throw new Error('Empty list. Cannot remove');
    if (index == 0) {
      this.head = this.head.nextNode;
      return;
    }
    let cur = this.head;
    let prev = null;
    let currentIndex = 0;
    while (index !== currentIndex && cur !== null) {
      prev = cur;
      cur = cur.nextNode;
      currentIndex += 1;
    }
    if (index === currentIndex) prev.nextNode = cur.nextNode;
    else if (cur == null) throw new Error('No such index. Cannot delete.');
  }
}
