import Node from './node.js';
import LinkedList from './linkedlist.js';

export default class HashMap {
  constructor() {
    this.array = new Array(16);
    this.capacity = this.array.length;
    this.loadFactor = 0.75;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    const node = new Node(key, value);
    if (
      this.array[hashCode] === undefined ||
      this.array[hashCode].head === null
    )
      this.array[hashCode] = new LinkedList(node);
    // if key exist, find the index, overwrite
    if (this.array[hashCode].contains(key)) {
      const index = this.array[hashCode].find(key);
      let i = 0;
      let temp = this.array[hashCode].head;
      while (i < index) {
        temp = temp.nextNode;
        i += 1;
      }
      temp.value = value;
      // if key does not exist in linkedlist, append node
    } else this.array[hashCode].append(key, value);

    const currentCapacity = this.length() / this.capacity;
    if (currentCapacity >= this.loadFactor) this.grow();
  }

  get(key) {
    const hashCode = this.hash(key);
    // if key exists, find the index, extract value
    if (this.array[hashCode] === undefined) return null;
    if (this.array[hashCode].contains(key)) {
      const index = this.array[hashCode].find(key);
      let i = 0;
      let temp = this.array[hashCode].head;
      while (i < index) {
        temp = temp.nextNode;
        i += 1;
      }
      return temp.value;
    } else return null;
  }

  has(key) {
    const hashCode = this.hash(key);
    if (this.array[hashCode] === undefined) return false;
    if (this.array[hashCode].contains(key)) return true;
    else return false;
  }

  remove(key) {
    const hashCode = this.hash(key);
    if (this.array[hashCode] === undefined) return false;
    if (this.array[hashCode].contains(key)) {
      const index = this.array[hashCode].find(key);
      this.array[hashCode].removeAt(index);
      return true;
    } else return false;
  }

  length() {
    let length = 0;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === undefined) continue;
      else length += this.array[i].size();
    }
    return length;
  }

  clear() {
    this.array = new Array(this.capacity);
  }

  keys() {
    let array = [];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === undefined) continue;
      let temp = this.array[i].head;
      while (temp !== null) {
        array.push(temp.key);
        temp = temp.nextNode;
      }
    }
    return array;
  }

  values() {
    let array = [];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === undefined) continue;
      let temp = this.array[i].head;
      while (temp !== null) {
        array.push(temp.value);
        temp = temp.nextNode;
      }
    }
    return array;
  }

  entries() {
    let array = [];
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] === undefined) continue;
      let temp = this.array[i].head;
      while (temp !== null) {
        const entry = [temp.key, temp.value];
        array.push(entry);
        temp = temp.nextNode;
      }
    }
    return array;
  }

  grow() {
    const allEntries = this.entries();
    this.array = new Array(this.capacity * 2);
    this.capacity *= 2;
    allEntries.forEach((entry) => {
      const key = entry[0];
      const value = entry[1];
      this.set(key, value);
    });
  }
}
