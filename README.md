# Linked List

## Ian Marshall

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

### Live Site

> [https://ianjstutor.github.io/linked-list/](https://ianjstutor.github.io/linked-list/)

### Description

Linked lists are scalable, fast, and more efficient than mutable arrays. They can be implemented with stacks, higher math, and sparse matrices, to name a few use cases.

This library is a doubly linked list with an O(1) insertion time and O(n) iteration time.

Built with vanilla JavaScript, my favorite flavor!

### Testing

```bash
npm test
```

Provided testing uses Jest on a Node environment. Please note that special configuration has been made for Node and for Jest to both use ECMAScript modules (<code>import</code> instead of the Common.js <code>require()</code>).

The following was inserted into <code>package.json</code> for testing to work.

```json
"type": "module",
"jest": {
    "transform": {}
},
"scripts": {
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}
```

### Usage

Include <code>linked-list.js</code> in your project. Import the JS into your main JavaScript file and call <code>new LinkedList()</code>. The return value is an object with four possible functions: <code>add(item)</code>, <code>remove()</code>, <code>find(func)</code>, and <code>forEach(func)</code>.

#### HTML

```html
<head>
    <script defer type="module" src="main.js"></script>
</head>
```

#### JavaScript

```js
//main.js
import { betterRandom } from "./linked-list.js";
const ll = new LinkedList();
```

### Documentation

#### Module Export

```js
export { LinkedList };
```

#### Public Methods

##### constructor

```js
new LinkedList()
```

Creates a new instance of <code>LinkedList</code>.

##### add

```js
LinkedList.prototype.add(item)
```

Adds <code>item</code> (any data type) to the <code>LinkedList</code>. <code>add</code> returns the <code>LinkedList</code> object so the method is chainable:

```js
const ll = new LinkedList();
ll.add("a").add("b").add("c");
```

##### remove

```js
LinkedList.prototype.remove()
```

Removes the last <code>item</code> inserted into the <code>LinkedList</code> and returns it.

##### find

```js
LinkedList.prototype.find(func)
```

Searches the <code>LinkedList</code> for the first item that produces a <code>true</code> return value from the callback <code>func</code> when passed in as an argument. If no item produces a <code>true</code> return value then <code>find</code> returns <code>undefined</code>. Compare to <code>Array.prototype.find</code>.

##### forEach

```js
LinkedList.prototype.forEach(func)
```

Passes each item in the <code>LinkedList</code> as an argument to the callback <code>func</code>. Compare to <code>Array.prototype.forEach</code>.

##### toObj

```js
LinkedList.prototype.toObj()
```

Converts the <code>LinkedList</code> into a JavaScript object literal. Note: by default, <code>LinkedList</code> uses <code>null</code> values as an empty-set placeholder. These <code>null</code> values are changed to <code>undefined</code> values when converted into an object. This enables an easy later conversion to JSON, which cannot accept <code>null</code> values.

##### toString

```js
LinkedList.prototype.toString()
```

Converts the <code>LinkedList</code> into a JavaScript string using <code>JSON.stringify()</code>.
