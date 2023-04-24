const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://moichat15:capitapiz@cluster0.1ax10zj.mongodb.net/messages",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const messageSchema = new mongoose.Schema({
  message: String,
  name: String,
});

const Message = mongoose.model("Message", messageSchema);

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let newMessage = new Message({
    message: req.body.message,
    name: req.body.name,
  });
  newMessage
    .save()
    .then(() => {
      res.status(200).redirect("/");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error saving message to database.");
    });
});

app.listen(3000, () => {
  console.log("listening on port 3000 http://localhost:3000");
});
