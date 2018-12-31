document.addEventListener('DOMContentLoaded', function(){
  
  const list = document.getElementById('book-list');
  const buttons = document.getElementsByTagName('button');
  const myBooks = document.getElementsByClassName('book');

  // turns HTML collection into an Iterable Array
  const toArray = [...buttons].map(btn => console.log(btn.textContent)); 

  const myQueryBook = document.querySelector('#book-list .book:nth-child(2) div:first-child p');
  const allQueryBooks = document.querySelectorAll('#book-list .book div p');

  const allParagraphs = document.querySelectorAll('#book-list .book div p');

  const changeParagraph = paragraphs => {
    const arr = [...paragraphs]
      const paragraphsArr = arr.map(item => item.textContent += ' (book-title)')
    return paragraphsArr
  }

  changeParagraph(allParagraphs)

  //  replace and append text
  const h3 = document.querySelector('h3');

  h3.innerHTML = '<h3>Books and more books </h3> <input type="checkbox" id="hide"> <label for="hide">Hide all books</label>'
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

    // add classes
    book.classList.add("book");

    // append to DOM
    divDelete.appendChild(deleteBtn);
    divTitle.appendChild(bookTitle);

    book.appendChild(divTitle);
    book.appendChild(divDelete);
    list.appendChild(book);
  });

  // hidding books

  const hideBooks = document.querySelector('#hide');

  hideBooks.addEventListener('change', function(e) {
    if(hideBooks.checked) {
      list.style.display = 'none';
    } else {
      list.style.display = 'block'; // initial or block will show the block;
    }
  })

  // search field

  const search = document.forms['search-book'].querySelector('input');
  search.addEventListener('keyup', function (e) {

    let searchTerm = e.target.value.toLowerCase();
    let book = list.getElementsByClassName('book');

    [...book].map(item => {
      const title = item.firstElementChild.textContent;

      if(title.toLowerCase().indexOf(searchTerm) != -1) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    })

  });

  // tabbed content

  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');

  tabs.addEventListener('click', function(e) {
    if (e.target.tagName == 'LI') {
      const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function(panel) {
        if (panel == targetPanel) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      })
    }
  })

})
