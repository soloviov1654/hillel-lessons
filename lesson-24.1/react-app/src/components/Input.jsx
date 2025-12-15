const Input = () => {
  return (
    <div className="container d-flex gap-2">
      <div class="input-group">
    <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
  </div>
      <button className="btn btn-success">Push</button>
    </div>
  );
};

export default Input;