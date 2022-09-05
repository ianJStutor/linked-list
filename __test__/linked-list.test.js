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

describe("Adding three values", () => {
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
