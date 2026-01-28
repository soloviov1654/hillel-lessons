import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, editTodo } from "../todo/actions";
import { Button, TextField, List, ListItem } from "@mui/material";

export default function Todo() {
  const [text, setText] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <TextField
        label="Todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button onClick={() => {
        dispatch(addTodo(text));
        setText("");
      }}>
        Add
      </Button>

      <List>
        {todos.map(todo => (
          <ListItem key={todo.id}>
            {todo.text}
            <Button onClick={() => {
              const newText = prompt("Edit todo", todo.text);
              dispatch(editTodo(todo.id, newText));
            }}>
              Edit
            </Button>
            <Button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
}