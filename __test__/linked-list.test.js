import { LinkedList } from "../linked-list.js";

describe("Base functionality", () => {
    test("creates an instance of LinkedList class", () => {
        expect(new LinkedList()).toBeInstanceOf(LinkedList);
    });
    test("empty LinkedList head is null", () => {
        const ll = new LinkedList();
        expect(ll.head).toBeNull();
    });
    test("empty LinkedList tail is null", () => {
        const ll = new LinkedList();
        expect(ll.tail).toBeNull();
    });
    test("head.prev is null", () => {
        const ll = new LinkedList();
        ll.add(Math.random());
        expect(ll.head.prev).toBeNull();
    });
    test("tail.next is null", () => {
        const ll = new LinkedList();
        ll.add(Math.random());
        expect(ll.tail.next).toBeNull();
    });
});

describe("Adding values", () => {
    const val1 = "abc",
          val2 = "def",
          val3 = "ghi",
          ll = new LinkedList();
    ll.add(val1).add(val2).add(val3);
    test("adding to head keeps value", () => {
        expect(ll.head.item).toBe(val1);
    });
    test("adding to head.next keeps value", () => {
        expect(ll.head.next.item).toBe(val2);
    });
    test("adding to head.next.next keeps value", () => {
        expect(ll.head.next.next.item).toBe(val3);
    });
    test("tail equals head.next.next", () => {
        expect(ll.tail).toEqual(ll.head.next.next);
    });
    test("tail.prev equals head.next", () => {
        expect(ll.tail.prev).toEqual(ll.head.next);
    });
    test("tail.prev.prev equals head", () => {
        expect(ll.tail.prev.prev).toEqual(ll.head);
    });
});

describe("Removing values", () => {
    const val1 = 123,
          val2 = 456,
          val3 = 789,
          ll = new LinkedList();
    ll.add(val1).add(val2).add(val3);
    test("removes the last item added", () => {
        expect(ll.remove()).toBe(val3);
    });
    test("removed item stays removed", () => {
        expect(ll.tail.next).toBeNull();
    });
    test("removes the new last item added", () => {
        expect(ll.remove()).toBe(val2);
    });
    test("second removed item stays removed", () => {
        expect(ll.tail.next).toBeNull();
    });
    test("removes the new, new last item added", () => {
        expect(ll.remove()).toBe(val1);
    });
    test("empty list head is null", () => {
        expect(ll.head).toBeNull();
    });
    test("empty list tail is null", () => {
        expect(ll.tail).toBeNull();
    });
    test("removing from empty list returns undefined", () => {
        expect(ll.remove()).toBeUndefined();
    });
});

describe("Using find", () => {
    const val1 = 3,
          val2 = 6,
          val3 = 9,
          val4 = 12,
          val5 = 15,
          ll = new LinkedList();
    ll.add(val1).add(val2).add(val3).add(val4).add(val5);
    test("can find the first value", () => {
        expect(ll.find(i => i % 2 === 1)).toBe(val1);
    });
    test("can find the second value", () => {
        expect(ll.find(i => i % 2 === 0)).toBe(val2);
    });
    test("can find the third value", () => {
        expect(ll.find(i => i % 4 === 1)).toBe(val3);
    });
    test("can find the fourth value", () => {
        expect(ll.find(i => i % 4 === 0)).toBe(val4);
    });
    test("can find the fifth value", () => {
        expect(ll.find(i => i % 5 === 0)).toBe(val5);
    });
});

describe("Using forEach", () => {
    const val1 = "Aaa",
          val2 = "Bbb",
          val3 = "Ccc",
          val4 = "Ddd",
          ll = new LinkedList(),
          expected = [val1, val2, val3, val4].map(item => item[0]),
          firstLetters = [];
    ll.add(val1).add(val2).add(val3).add(val4);
    ll.forEach(item => firstLetters.push(item[0]));
    test("each item is iterated over", () => {
        expect(firstLetters.toString()).toBe(expected.toString())
    });
    test("item 1 hasn't been mutated", () => {
        expect(ll.head.item).toBe(val1);
    });
    test("item 2 hasn't been mutated", () => {
        expect(ll.head.next.item).toBe(val2);
    });
    test("item 3 hasn't been mutated", () => {
        expect(ll.head.next.next.item).toBe(val3);
    });
    test("item 4 hasn't been mutated", () => {
        expect(ll.head.next.next.next.item).toBe(val4);
    });
});

describe("Using static fromArray", () => {
    const arr = [1,2,3,4,5,6,7,8],
          ll = LinkedList.fromArray(arr),
          llArr = [];
    ll.forEach(i => llArr.push(i));
    test("creates an instance of LinkedList class from array", () => {
        expect(ll).toBeInstanceOf(LinkedList);
    });
    test("inserts array elements into list", () => {
        expect(llArr).toEqual(arr);
    });
});

describe("Using toArray", () => {
    const arr = [1,2,3,4,5,6,7,8],
          ll = new LinkedList();
    for (let i of arr) ll.add(i);
    const llArr = ll.toArray();
    test("creates an instance of Array from list", () => {
        expect(llArr).toBeInstanceOf(Array);
    });
    test("creates array from items", () => {
        expect(llArr).toEqual(arr);
    });
});
