const mongoose = require("../configs/mongoose");

const todosSchema = mongoose.Schema(
  {
    text: String,
    done: Boolean
  },
  {
    timestamps: true
  }
);

const Todos = mongoose.model("Todos", todosSchema);

module.exports = Todos;
