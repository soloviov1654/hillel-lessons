const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connect = mongoose.connect(
  "mongodb+srv://soloviov1654_db_user:jQUg03sq2K2YN4t1@firstdb.t2kwyoj.mongodb.net/?appName=FirstDB"
);
const TodoModel = require("./mongo/todo.model.js");
app.use("/node_modules", express.static(__dirname + "/../node_modules"));

connect.then(() => console.log("DB connected"));
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/../client"));

app.listen(8080, () => {
  console.log("started server");
});

app.get("/api/todos", (req, res) => {
  TodoModel.find().then((data) => res.send(data));
});

app.post("/api/todos", (req, res) => {
  const todo = new TodoModel(req.body);
  todo.save().then((data) => res.send(data));
});

app.delete("/api/todos/:id", (req, res) => {
  TodoModel.findByIdAndDelete(req.params.id).then(() =>
    res.send({ success: true })
  );
});
