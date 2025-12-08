import { addBook, getBooks, updateBook, deleteBook } from "./api.js";

async function loadBooks() {
  const data = await getBooks();

  const books = Object.entries(data || {}).map(([id, value]) => ({
    id,
    ...value
  }));

  console.log(books); // display in UI
}

async function createNewBook() {
  const newBook = {
    title: "New Book",
    author: "Author",
    price: 200
  };

  await addBook(newBook);
  loadBooks();
}

async function modifyBook(id) {
  await updateBook(id, { author: "Updated Name" });
  loadBooks();
}

async function removeBook(id) {
  await deleteBook(id);
  loadBooks();
}

loadBooks();
