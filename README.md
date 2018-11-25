# JS The DOM

A Book-Store App to store your favorite books.

Made with the DOM.

## Get Element By Id

```js
const allBooks = document.getElementById('book-list');

// output
<div id="book-list">...</div>

```

## Get Elements By Tag Name 

HTML Collections have to be turned into array to later iterate over them.

```js
const btns = document.getElementsByTagName('button')

// output
HTMLCollection(4) [button, button, button, button]

```

## Get Elements By Class Name

```js
const myBooks = document.getElementsByClassName('book')

// output
HTMLCollection(4) [div.book, div.book, div.book, div.book]

```

## Query Selector
```js
const myQueryBook = document.querySelector('#book-list .book:nth-child(2) div:first-child p'); // returns the p element that lives in the second div element of book-list id.

// output
<p>...</p>
```

## Query Selector All

It returns with a nodeList you can iterate over the nodeList without turning it into an array.
```js
const allQueryBook = document.querySelector('#book-list .book div p'); // returns a nodeList with all the p elements.

// output
<p>...</p>
<p>...</p>
<p>...</p>

```

### HTML Collections

### Node List

## Properties

* textContent: appends or replace text content to an element.
* innerHTML: add text.
