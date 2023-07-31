require("dotenv").config();
const express = require("express");
const notesRoute = require("./routes/notesRoute");

//port
const port = process.env.PORT || 4000;

//express app
const app = express();

//middlewares
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/notes", notesRoute);

//request listening
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
