import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TodoApp from "./components/TodoApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
);
