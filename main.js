const list = document.getElementById('book-list');

const buttons = document.getElementsByTagName('button');

const myBooks = document.getElementsByClassName('book');

const toArray = [...buttons].map(btn => btn); // turns HTML collection into an Iterable Array

const myQueryBook = document.querySelector('#book-list .book:nth-child(2) div:first-child p');

const allQueryBooks = document.querySelectorAll('#book-list .book div p');
