function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  
}



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// index.js

function fetchBooks() {
 return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
      return response.json();
    })
    .then(data => {

      renderBooks(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

document.addEventListener('DOMContentLoaded', fetchBooks);
