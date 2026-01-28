import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { renderWithRedux } from "./tests";

test("have name", () => {
  renderWithRedux(<App />);
  const title = screen.getByText(/todo list/i);
  expect(title).toBeInTheDocument();
});


test("letters and numbers", () => {
  renderWithRedux(<App />);
  const input = screen.getByPlaceholderText("todo name");
  fireEvent.change(input, { target: { value: "Test123" } });
  expect(input.value).toBe("Test123");
});


test("empty", () => {
  renderWithRedux(<App />);
  const button = screen.getByText("add");
  fireEvent.click(button);
  const todos = screen.queryAllByRole("listitem");
  expect(todos.length).toBe(0);
});


test("adding element", () => {
  renderWithRedux(<App />);
  const input = screen.getByPlaceholderText("todo name");
  const button = screen.getByText("add");
  fireEvent.change(input, { target: { value: "my todo" } });
  fireEvent.click(button);
  const todo = screen.getByText("my todo");
  expect(todo).toBeInTheDocument();
});


test("removing", () => {
  renderWithRedux(<App />);
  const input = screen.getByPlaceholderText("todo name");
  const addButton = screen.getByText("add");
  fireEvent.change(input, { target: { value: "removing test" } });
  fireEvent.click(addButton);
  const removeButtons = screen.getAllByText("remove");
  fireEvent.click(removeButtons[removeButtons.length - 1]);
  expect(screen.queryByText("removing test")).not.toBeInTheDocument();
});


