import { takeEvery } from "redux-saga/effects";
import { addTodo, deleteTodo, editTodo } from "./todosSlice";

function* logAddTodo(action) {
  console.log( action.payload);
}

function* logDeleteTodo(action) {
  console.log( action.payload);
}

function* logEditTodo(action) {
  console.log( action.payload);
}

export default function* todosSaga() {
  yield takeEvery(addTodo.type, logAddTodo);
  yield takeEvery(deleteTodo.type, logDeleteTodo);
  yield takeEvery(editTodo.type, logEditTodo);
}