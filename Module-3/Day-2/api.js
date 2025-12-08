const BASE_URL = "https://book-mangement-web-default-rtdb.firebaseio.com/";
export async function addBook(book) {
  const res = await fetch(`${BASE_URL}/books.json`, {
    method: "POST",
    body: JSON.stringify(book)
  });
  return await res.json(); 
}
export async function getBooks() {
  const res = await fetch(`${BASE_URL}/books.json`);
  return await res.json(); 
}
export async function updateBook(id, data) {
  const res = await fetch(`${BASE_URL}/books/${id}.json`, {
    method: "PATCH",
    body: JSON.stringify(data)
  });
  return await res.json();
}

// DELETE
export async function deleteBook(id) {
  await fetch(`${BASE_URL}/books/${id}.json`, {
    method: "DELETE"
  });
}
