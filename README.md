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