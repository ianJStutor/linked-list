class LinkedList {

    constructor() {
        this.head = this.tail = null;
    }

    add(item) {
        if (this.head === null){
            this.tail = this.head = new ListNode(item);
        }
        else {
            this.tail.next = new ListNode(item, this.tail);
            this.tail = this.tail.next;
        }
        return this;
    }

    remove() {
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

    find(callback) {
        if ("function" !== typeof callback) return console.error("LinkedList.prototype.forEach requires a function as an argument.");
        var current = this.head;
        while (current !== null) {
            if (callback(current.item)) return current.item;
            current = current.next;
        }
        return undefined;
    }

    forEach(callback) {
        if ("function" !== typeof callback) return console.error("LinkedList.prototype.forEach requires a function as an argument.");
        var current = this.head;
        while (current !== null) {
            callback(current.item);
            current = current.next;
        }
    }

    toString() {
        return {head: this.head?.toString(), tail: this.tail?.toString()};
    }
}

class ListNode {
    constructor(item, prev, next) {
        this.item = item;
        this.next = next || null;
        this.prev = prev || null;
    }

    toString() {
        return {item: this.item, next: this.next?.toString(), prev: this.prev?.toString()};
    }
}

export { LinkedList };
