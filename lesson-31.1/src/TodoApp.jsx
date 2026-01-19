import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  clearTodos,
} from "./todosSlice";

export default function TodoApp() {
  const [text, setText] = useState("");
  const todos = useSelector((s) => s.todos.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <div>
      <h2>TODO</h2>

      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(addTodo(text))}>Add</button>
      <button onClick={() => dispatch(clearTodos())}>Clear</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => dispatch(toggleTodo(t.id))}
              style={{ textDecoration: t.done ? "line-through" : "none" }}
            >
              {t.text}
            </span>
            <button onClick={() => dispatch(removeTodo(t.id))}>Remove</button>
            <button
              onClick={() =>
                dispatch(editTodo({ id: t.id, text: prompt("New text") }))
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
