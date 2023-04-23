const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://Moitreya:capitapiz@cluster0.ag0bxo7.mongodb.net/Portfolio",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const schema = {
  message: "string",
  name: "string"
};

const Message = mongoose.model("Message", schema);

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let newMessage = new Message({
    message: req.body.message,
    name: req.body.name
  });
  
  console.log(newMessage);
  
  newMessage.save()
		.then((result) => {
			console.log(result);
			res.status(200).json(result);
		})
		.catch((error) => {
			console.error(error);
			res.status(500).send('Error saving message to database.');
		});
});

app.listen(3000, () => {
  console.log("listening on port 3000 http://localhost:3000");
});
