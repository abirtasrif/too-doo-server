require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const notesRoute = require("./routes/notesRoute");
const userRoutes = require("./routes/userRoute");

//port
const port = process.env.PORT || 4000;

//express app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/notes", notesRoute);
app.use("/api/user", userRoutes);

//mongodb connection
// mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    //request listening
    app.listen(port, () => {
      console.log(`Mongo connected and server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
