import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todos/todosSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addHandler = () => {
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="todo name"
      />
      <button onClick={addHandler}>add</button>
    </div>
  );
};

export default TodoInput;