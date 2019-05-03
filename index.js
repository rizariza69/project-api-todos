require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const todosRoutes = require("./routes/todos");

app.use(express.json());

app.use(cors());
app.use(morgan("dev"));

app.use("/", todosRoutes);

app.listen(3000, () => {
  console.log("Todos is listening on port:", 3000);
});
