import { useState } from "react";
import { Button, TextField, TextareaAutosize } from "@mui/material";

export default function Swapi() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");

  const loadData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <TextField
        label="SWAPI URL"
        value={url}
        onChange={e => setUrl(e.target.value)}
      />

      <Button onClick={loadData}>Load</Button>
      <Button onClick={() => setResult("")}>Clear</Button>

      <TextareaAutosize
        minRows={10}
        value={result}
        style={{ width: "100%" }}
      />
    </div>
  );
}