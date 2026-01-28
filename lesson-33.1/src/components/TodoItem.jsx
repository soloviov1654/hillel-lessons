import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../todos/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const editHandler = () => {
    const newTitle = prompt("new name", todo.title);
    if (newTitle) {
      dispatch(editTodo({ id: todo.id, title: newTitle }));
    }
  };

  return (
    <li>
      {todo.title}
      <button onClick={editHandler}>edit</button>
      <button onClick={deleteHandler}>remove</button>
    </li>
  );
};

export default TodoItem;