class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

}

class LL {
  constructor() {
    this.head = null;
  }

  add(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  // getList() {
  //   if (!this.head) return null;

  //   let current = this.head;

  //   while (current) {
  //     current = current.next;
  //   }
  // }
}

class Hashmap {
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  add(key, val) {
    let hash = this.hash(key);

    if (!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add([key, val]);
    }
  }

  get(key) {
    let hash = this.hash(key);

    if (!this.storage[hash]) {
      return null;
    } else {
      let node = this.storage[hash];
      let thisNode = node.head;
      let result = [];

      while (thisNode) {
        if(thisNode.val[0] === key) {
          result.push(`${thisNode.val[0]} ${thisNode.val[1]}`);
        }
        thisNode = thisNode.next;
      }
      return result.length > 0 ? result : (`no data containing ${key}`);
    }
  }

  contains(key) {
    let hash = this.hash(key);

    if (!this.storage[hash]) {
      return false;
    } else {
      let node = this.storage[hash];
      let thisNode = node.head;

      while(thisNode) {
        if (thisNode.val[0] === key) {
          return true;
        }
        thisNode = thisNode.next;
      }
      return false;
    }
  }
}

module.exports = Hashmap;
