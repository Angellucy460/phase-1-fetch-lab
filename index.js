function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => renderBooks(books));
}

// A helper function to render the book titles to the DOM
function renderBooks(books) {
  const main = document.querySelector('main');

  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

// Call the function to trigger fetch on load
document.addEventListener('DOMContentLoaded', fetchBooks);
