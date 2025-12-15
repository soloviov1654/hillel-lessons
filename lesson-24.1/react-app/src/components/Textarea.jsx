const Textarea = () => {
  return (
    <div className="container form-floating mt-1">
      <textarea
        className="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        style={{ height: "100px" }}
      ></textarea>
      <label htmlfor="floatingTextarea2">JSON will be here...</label>
    </div>
  );
};

export default Textarea;
