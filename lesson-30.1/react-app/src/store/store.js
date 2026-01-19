import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
  data: "",
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_START":
      return { ...state, loading: true };

    case "LOAD_SUCCESS":
      return { data: action.payload, loading: false };

    case "CLEAR":
      return { data: "", loading: false };

    default:
      return state;
  }
}

export const loadSwapi = (endpoint) => {
  return async (dispatch) => {
    dispatch({ type: "LOAD_START" });

    const res = await fetch(`https://swapi.py4e.com/api/${endpoint}`);
    const data = await res.json();

    dispatch({
      type: "LOAD_SUCCESS",
      payload: JSON.stringify(data, null, 2),
    });
  };
};

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
);