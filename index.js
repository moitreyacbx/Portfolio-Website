const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://moichat15:capitapiz@cluster0.1ax10zj.mongodb.net/Portfolio",
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6 
  }
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
  newMessage.save()
		.then(() => {
			res.status(200).redirect('/');
		})
		.catch((error) => {
			console.error(error);
			res.status(500).send('Error saving message to database.');
		});
});

app.listen(3000, () => {
  console.log("listening on port 3000 http://localhost:3000");
});
