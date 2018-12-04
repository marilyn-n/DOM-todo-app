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

//  replace or add text
const h3 = document.querySelector('h3');
h3.innerHTML = '<h3>Books and more books </h3>'
h3.innerHTML += '<h6>This is how you add text to HTML</h6>'

// delete a book
const bookList = document.querySelector('#book-list');

bookList.addEventListener('click', e => {
  if(e.target.tagName === 'BUTTON') {
    const parent = e.target.parentElement.parentElement;  
    parent.parentNode.removeChild(parent);
  }
});

// forms

const addBookForm = document.forms['new-book'];

addBookForm.addEventListener('submit', e => {
  e.preventDefault();
  const value = addBookForm.querySelector('input[type="text"]').value;

  // create elements

  const divDelete = document.createElement('div');
  const divTitle = document.createElement('div');

  const book = document.createElement('div');
  const deleteBtn = document.createElement('button');
  const bookTitle = document.createElement('p');

  //add content

  deleteBtn.textContent = "delete";
  bookTitle.textContent = value;

  // append to DOM
  divDelete.appendChild(deleteBtn);
  divTitle.appendChild(bookTitle);

  book.appendChild(divTitle);
  book.appendChild(divDelete);
  list.appendChild(book);
});

