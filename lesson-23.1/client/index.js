let todoList = [];
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
        </div>
          <button class="btn btn-danger btn-sm">
            <i class="bi bi-trash"></i>
          </button>
      </li>
    `);
    li.find(".form-check").append($("<span>").addClass("todo-text").text(text));
    $("ul").append(li);

    if (save) {
      fetch("http://localhost:8080/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Saved to DB:", data);
          todoList.push(data);
        })
        .catch((err) => console.error(err));
    }
  };

  this.remove = (event) => {
    const li = $(event.target).closest("li");
    const text = li.find(".todo-text").text();
    const todo = todoList.find((t) => t.text === text);
    if (!todo) return;

    fetch(`http://localhost:8080/api/todos/${todo._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        li.remove();
        todoList = todoList.filter((t) => t._id !== todo._id);
      })
      .catch((err) => console.error(err));
  };

  this.renderTodos = (todos) => {
    todos.forEach((todo) => {
      this.addToDo(todo.text, todo._id, false);
    });
  };
  this.loadTodos = () => {
    fetch("http://localhost:8080/api/todos/")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded:", data);
        todoList = data;
        this.renderTodos(data);
      })
      .catch((err) => console.error(err));
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
todos.loadTodos();

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
