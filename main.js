const list = document.getElementById('book-list');

const buttons = document.getElementsByTagName('button');

const myBooks = document.getElementsByClassName('book');

const toArray = [...buttons].map(btn => btn); // turns HTML collection into an Iterable Array

