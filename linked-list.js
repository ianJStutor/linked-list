class LinkedList {

  constructor () {
    this.head = this.tail = null;
  }

  addToTail (item) {
    if (this.head === null){
		this.tail = this.head = new ListNode(item);
	}
	else {
		this.tail.next = new ListNode(item, this.tail);
		this.tail = this.tail.next;
	}
    return this;
  }

  removeFromTail () {
	if (!this.tail) return undefined;
	var item = this.tail.item;
	this.tail = this.tail.prev;
	if (!this.tail){
		this.head = this.tail = null;
	}
	else {
		this.tail.next = null;
	}
	return item;
  }

  forEach (callbackFunc) {
	var current = this.head;
	while (current !== null) {
		callbackFunc(current.item);
		current = current.next;
	}
  }
}

class ListNode {
  constructor (item, prev, next) {
    this.item = item;
    this.next = next || null;
    this.prev = prev || null;
  }
}

export { LinkedList };
