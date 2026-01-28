const initialState = [];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];

    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload);

    case "EDIT_TODO":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    default:
      return state;
  }
}