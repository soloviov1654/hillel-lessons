import { put, takeEvery, select } from "redux-saga/effects";
import {
  loadTodos,
  setTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearTodos,
} from "./todosSlice";

const getTodos = (state) => state.todos.list;

function* loadTodosSaga() {
  const saved = JSON.parse(localStorage.getItem("todos")) || [];
  yield put(setTodos(saved));
}

function* saveTodosSaga() {
  const todos = yield select(getTodos);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function* addTodoSaga(action) {
  const todos = yield select(getTodos);
  yield put(
    setTodos([...todos, { id: Date.now(), text: action.payload, done: false }])
  );
  yield saveTodosSaga();
}

function* removeTodoSaga(action) {
  const todos = yield select(getTodos);
  yield put(setTodos(todos.filter((t) => t.id !== action.payload)));
  yield saveTodosSaga();
}

function* toggleTodoSaga(action) {
  const todos = yield select(getTodos);
  yield put(
    setTodos(
      todos.map((t) =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      )
    )
  );
  yield saveTodosSaga();
}

function* editTodoSaga(action) {
  const { id, text } = action.payload;
  const todos = yield select(getTodos);
  yield put(
    setTodos(todos.map((t) => (t.id === id ? { ...t, text } : t)))
  );
  yield saveTodosSaga();
}

function* clearTodosSaga() {
  yield put(setTodos([]));
  localStorage.removeItem("todos");
}

export default function* rootSaga() {
  yield takeEvery(loadTodos.type, loadTodosSaga);
  yield takeEvery(addTodo.type, addTodoSaga);
  yield takeEvery(removeTodo.type, removeTodoSaga);
  yield takeEvery(toggleTodo.type, toggleTodoSaga);
  yield takeEvery(editTodo.type, editTodoSaga);
  yield takeEvery(clearTodos.type, clearTodosSaga);
}