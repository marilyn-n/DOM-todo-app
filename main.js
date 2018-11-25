const list = document.getElementById('book-list');

const buttons = document.getElementsByTagName('button');

const myBooks = document.getElementsByClassName('book');

const toArray = [...buttons].map(btn => console.log(btn.textContent)); // turns HTML collection into an Iterable Array

const myQueryBook = document.querySelector('#book-list .book:nth-child(2) div:first-child p');

const allQueryBooks = document.querySelectorAll('#book-list .book div p');



const allParagraphs = document.querySelectorAll('#book-list .book div p');

const changeParagraph = paragraphs => {
  const arr = [...paragraphs]
    const paragraphsArr = arr.map(item => item.textContent += ' (book-title)')
  return paragraphsArr
}

changeParagraph(allParagraphs)
 
const bookList = document.querySelector('h3');
bookList.innerHTML = '<h3>Books and more books </h3>'
bookList.innerHTML += '<h6>This is how you add text to HTML</h6>'



