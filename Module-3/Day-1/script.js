async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data.slice(0, 20);
}
function saveToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}
function deleteTodo(id) {
  let todos = getFromLocalStorage();
  todos = todos.filter(todo => todo.id !== id);
  saveToLocalStorage(todos);
  renderTodos();
}
function toggleComplete(id) {
  let todos = getFromLocalStorage();
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveToLocalStorage(todos);
  renderTodos();
}
function renderTodos() {
  const container = document.getElementById("todoContainer");
  const emptyMsg = document.getElementById("emptyMsg");

  const todos = getFromLocalStorage();

  container.innerHTML = "";

  if (todos.length === 0) {
    emptyMsg.style.display = "block";
    return;
  } else {
    emptyMsg.style.display = "none";
  }

  todos.forEach(todo => {
    const div = document.createElement("div");
    div.className = "todo";
    if (todo.completed) div.classList.add("completed");

    div.innerHTML = `
      <div>
        <strong>${todo.title}</strong><br>
        Status: ${todo.completed ? "✔ Completed" : "❌ Not Completed"}
      </div>

      <div>
        <button class="toggle-btn" onclick="toggleComplete(${todo.id})">
          Toggle
        </button>
        <button class="delete-btn" onclick="deleteTodo(${todo.id})">
          Delete
        </button>
      </div>
    `;

    container.appendChild(div);
  });
}
async function loadTodos() {
  const todos = await fetchTodos();
  saveToLocalStorage(todos);
  renderTodos();
}
renderTodos();
