const parent = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("input");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function newTodoElement(todo) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const deleteBtn = document.createElement("button");
  const spanText = document.createElement("span");
  checkbox.type = "checkbox";
  checkbox.checked = todo.check;
  li.className = "todo-item";
  spanText.className = "todo-item__description";
  spanText.textContent = todo.text;
  deleteBtn.textContent = "Видалити";
  deleteBtn.className = "todo-item__delete";
  li.appendChild(checkbox);
  li.appendChild(spanText);
  li.appendChild(deleteBtn);
  parent.appendChild(li);
  checkbox.addEventListener("change", () => {
    todo.check = checkbox.checked;
    if (todo.check) {
      li.classList.add("todo-item--checked");
    } else {
      li.classList.remove("todo-item--checked");
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  return li;
}

function renderTodos() {
  todos.forEach(newTodoElement);
}

renderTodos();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const newTodo = { text, check: false };
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  newTodoElement(newTodo);
  input.value = "";
});

parent.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.parentElement;
    const text = li.querySelector("span").textContent;
    todos = todos.filter((todo) => todo.text !== text);
    localStorage.setItem("todos", JSON.stringify(todos));
    li.remove();
  }
});
