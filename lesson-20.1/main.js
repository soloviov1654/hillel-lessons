let todoList = JSON.parse(localStorage.getItem("todos")) || [];
const myModal = $("#myModal");
function Todos() {
  const ul = $("ul");

  this.addToDo = (text, id, save = true) => {
    const checkboxId = `checkbox-${id}`;

    const li = $(`
      <li class="list-group-item d-flex align-items-center justify-content-between">
        <div class="form-check">
          <input class="form-check-input me-1" type="checkbox" id="${checkboxId}">
          <label class="form-check-label" for="${checkboxId}"></label>
          <span class="todo-text">${text}</span>
        </div>
          <button class="btn btn-danger btn-sm">
            <i class="bi bi-trash"></i>
          </button>
      </li>
    `);

    ul.append(li);
    if (save) {
      todoList.push({ text, id });
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  };

  this.remove = (event) => {
    const li = $(event.target).closest("li");
    const text = li.find(".todo-text").text();
    todoList = todoList.filter((todo) => todo.text !== text);
    localStorage.setItem("todos", JSON.stringify(todoList));
    li.remove();
  };

  this.renderTodos = () => {
    todoList.forEach((todo) => this.addToDo(todo.text, todo.id, false));
  };
  this.done = (event) => {
    const checkbox = $(event.target);
    const text = checkbox.siblings(".todo-text");
    text.toggleClass("text-decoration-line-through");
  };

  this.showModal = (event) => {
    const text = $(event.target).text();
    myModal.find("p").text(text);
    myModal.modal("show");
  };
}

const todos = new Todos();
todos.renderTodos();





$(".btn-success").on("click", () => {
  const text = $(".form-control").val();
  if (text.trim() !== "") {
    todos.addToDo(text, Date.now());
    $(".form-control").val("");
  }
});

$(document).on("click", ".btn-danger", (event) => {
  todos.remove(event);
});

$(document).on("change", ".form-check-input", (event) => {
  todos.done(event);
});

$(document).on("click", ".todo-text", (event) => {
  todos.showModal(event);
});
