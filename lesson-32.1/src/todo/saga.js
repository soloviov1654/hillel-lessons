import { takeEvery } from "redux-saga/effects";

function* logTodo(action) {
  console.log("Todo action:", action);
}

export default function* todoSaga() {
  yield takeEvery("*", logTodo);
}