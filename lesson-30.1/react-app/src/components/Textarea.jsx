import { useSelector } from "react-redux";

const Textarea = () => {
  const { data, loading } = useSelector((state) => state);

  return (
    <div className="container mt-2">
      <textarea
        className="form-control"
        style={{ height: "200px" }}
        readOnly
        value={loading ? "Loading..." : data}
      />
    </div>
  );
};

export default Textarea;
