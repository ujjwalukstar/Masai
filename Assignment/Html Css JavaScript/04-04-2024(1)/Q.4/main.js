const BASE_URL = "https://getxhired-default-rtdb.firebaseio.com/books";
let books = [];
let currentPage = 1;
const itemsPerPage = 5;

window.addEventListener("load", () => {
  document.getElementById("bookForm").addEventListener("submit", handleFormSubmit);
  document.getElementById("genreFilter").addEventListener("change", fetchBooks);
  document.getElementById("sortBy").addEventListener("change", fetchBooks);
  fetchBooks();
});

function fetchBooks() {
  fetch(`${BASE_URL}.json`)
    .then(res => res.json())
    .then(data => {
      books = Object.entries(data || {}).map(([id, book]) => ({ id, ...book }));
      applyFilters();
    });
}

function applyFilters() {
  let filtered = [...books];
  const genre = document.getElementById("genreFilter").value;
  const sortBy = document.getElementById("sortBy").value;

  if (genre) filtered = filtered.filter(book => book.genre === genre);
  if (sortBy) filtered.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);

  renderBooks(filtered);
}

function renderBooks(data) {
  const tbody = document.querySelector("#bookTable tbody");
  tbody.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const paginated = data.slice(start, start + itemsPerPage);
  paginated.forEach(book => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.genre}</td>
      <td>${book.publishedYear}</td>
      <td>${book.available}</td>
      <td>
        <button onclick="editBook('${book.id}')">Edit</button>
        <button onclick="deleteBook('${book.id}')">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
  document.getElementById("pageInfo").textContent = `Page ${currentPage}`;
}

function handleFormSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("bookId").value;
  const book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    genre: document.getElementById("genre").value,
    publishedYear: +document.getElementById("publishedYear").value,
    available: document.getElementById("available").value === "true"
  };
  if (id) {
    fetch(`${BASE_URL}/${id}.json`, {
      method: "PATCH",
      body: JSON.stringify(book)
    }).then(fetchBooks);
  } else {
    fetch(`${BASE_URL}.json`, {
      method: "POST",
      body: JSON.stringify(book)
    }).then(fetchBooks);
  }
  e.target.reset();
}

function editBook(id) {
  const book = books.find(b => b.id === id);
  document.getElementById("bookId").value = id;
  document.getElementById("title").value = book.title;
  document.getElementById("author").value = book.author;
  document.getElementById("genre").value = book.genre;
  document.getElementById("publishedYear").value = book.publishedYear;
  document.getElementById("available").value = book.available;
}

function deleteBook(id) {
  fetch(`${BASE_URL}/${id}.json`, {
    method: "DELETE"
  }).then(fetchBooks);
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    applyFilters();
  }
}

function nextPage() {
  currentPage++;
  applyFilters();
}
