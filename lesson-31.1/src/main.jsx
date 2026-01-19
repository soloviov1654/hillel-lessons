import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import TodoApp from "./TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
);
