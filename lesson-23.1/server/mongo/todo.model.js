const { Schema, model } = require("mongoose");

const TodoSchema = Schema({
  text: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
  },
});

module.exports = model('Todos', TodoSchema)