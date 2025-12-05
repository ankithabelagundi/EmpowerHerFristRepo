const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function renderTasks(filterText = "") {
  taskList.innerHTML = "";

  tasks
    .filter(task => task.text.toLowerCase().includes(filterText.toLowerCase()))
    .forEach(task => {
      const li = document.createElement("li");
      li.className = task.completed ? "completed" : "";

      li.innerHTML = `
        <span>${task.text}</span>
        <div>
          <button class="removeBtn">Delete</button>
        </div>
      `;
      li.addEventListener("click", (e) => {
        if (e.target.classList.contains("removeBtn")) return;
        task.completed = !task.completed;
        saveTasks();
        renderTasks(searchInput.value);
      });
      li.querySelector(".removeBtn").addEventListener("click", () => {
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks();
        renderTasks(searchInput.value);
      });

      taskList.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  const newTask = {
    id: Date.now(),
    text: text,
    completed: false
  };

  tasks.push(newTask);
  saveTasks();
  taskInput.value = "";
  renderTasks(searchInput.value);
});

searchInput.addEventListener("input", (e) => {
  renderTasks(e.target.value);
});

renderTasks();
