const TodoList = () => {
  return (
    <>
    <input type="text" name="text" id="text" />
        <button className="btn btn-danger btn-sm">Push</button>
    <ul>
      <li className="list-group-item d-flex align-items-center justify-content-between">
        <div className="form-check">
          <input className="form-check-input me-1" type="checkbox" />
          <label className="form-check-label"></label>
        </div>
        item 1
        <button>Remove</button>
      </li>
      <li className="list-group-item d-flex align-items-center justify-content-between">
        <div className="form-check">
          <input className="form-check-input me-1" type="checkbox" />
          <label className="form-check-label"></label>
        </div>
        item 2
        <button>Remove</button>
      </li>
      <li className="list-group-item d-flex align-items-center justify-content-between">
        <div className="form-check">
          <input className="form-check-input me-1" type="checkbox" />
          <label className="form-check-label"></label>
        </div>
        item 3
        <button>Remove</button>
      </li>
    </ul>
    </>
    
  );
};

export default TodoList;
