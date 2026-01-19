import { useDispatch } from "react-redux";

const Clear = () => {
  const dispatch = useDispatch();

  return (
    <div className="container mt-2">
      <button
        className="btn btn-warning"
        onClick={() => dispatch({ type: "CLEAR" })}
      >
        Clear
      </button>
    </div>
  );
};

export default Clear;
