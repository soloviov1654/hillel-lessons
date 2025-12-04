"use strict";

var todoList = JSON.parse(localStorage.getItem("todos")) || [];
var myModal = $("#myModal");
function Todos() {
  var _this = this;
  var ul = $("ul");
  this.addToDo = function (text, id) {
    var save = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var checkboxId = "checkbox-".concat(id);
    var li = $("\n      <li class=\"list-group-item d-flex align-items-center justify-content-between\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input me-1\" type=\"checkbox\" id=\"".concat(checkboxId, "\">\n          <label class=\"form-check-label\" for=\"").concat(checkboxId, "\"></label>\n        </div>\n          <button class=\"btn btn-danger btn-sm\">\n            <i class=\"bi bi-trash\"></i>\n          </button>\n      </li>\n    "));
    li.find(".form-check").append($("<span>").addClass("todo-text").text(text));
    ul.append(li);
    if (save) {
      todoList.push({
        text: text,
        id: id
      });
      localStorage.setItem("todos", JSON.stringify(todoList));
    }
  };
  this.remove = function (event) {
    var li = $(event.target).closest("li");
    var text = li.find(".todo-text").text();
    todoList = todoList.filter(function (todo) {
      return todo.text !== text;
    });
    localStorage.setItem("todos", JSON.stringify(todoList));
    li.remove();
  };
  this.renderTodos = function () {
    todoList.forEach(function (todo) {
      return _this.addToDo(todo.text, todo.id, false);
    });
  };
  this.done = function (event) {
    var checkbox = $(event.target);
    var text = checkbox.siblings(".todo-text");
    text.toggleClass("text-decoration-line-through");
  };
  this.showModal = function (event) {
    var text = $(event.target).text();
    myModal.find("p").text(text);
    myModal.modal("show");
  };
}
var todos = new Todos();
todos.renderTodos();
$(".btn-success").on("click", function () {
  var text = $(".form-control").val();
  if (text.trim() !== "") {
    todos.addToDo(text, Date.now());
    $(".form-control").val("");
  }
});
$(document).on("click", ".btn-danger", function (event) {
  todos.remove(event);
});
$(document).on("change", ".form-check-input", function (event) {
  todos.done(event);
});
$(document).on("click", ".todo-text", function (event) {
  todos.showModal(event);
});