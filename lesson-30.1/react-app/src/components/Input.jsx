import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadSwapi } from "../store/store";

const Input = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="container d-flex gap-2">
      <div className="input-group">
        <span className="input-group-text">
          https://swapi.py4e.com/api/
        </span>
        <input
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="people/1"
        />
      </div>

      <button
        className="btn btn-success"
        onClick={() => dispatch(loadSwapi(value))}
      >
        Push
      </button>
    </div>
  );
};

export default Input;