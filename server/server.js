// imports
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const { log } = require("console");
const bodyParser = require('body-parser');
require("dotenv").config();

// Schema
const UserSchema = new Schema({
  name: String,
  password: String,
  avatarSrc: String,
  reports: [String],
});
mongoose.model("User", UserSchema);
const ThreatSchema = new Schema({
  userSchema: UserSchema,
  ranks: [String],
  languages: [String],
  platform: String,
  date: Date,
  other: [String],
});
mongoose.model("Threat", ThreatSchema);

// express server
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client")));
app.listen(3000, log("✓ Running on port 3000"));

// connect to mongodb
const uri = `mongodb+srv://website:${process.env.MONGO_KEY}@mate.qgioxlr.mongodb.net/?retryWrites=true&w=majority`;
connect(uri);

// login route
app.post("/login", async (req, res) => {
  getUsers().then((users) => {
    const user = users.find((user) => user.name === req.body.name);
    if (user) {
      if (user.password === req.body.password) {
        res.send(user);
      } else {
        res.send("wrong password");
      }
    } else {
      res.send("user not found");
    }
  });
});

// register route
app.post("/register", async (req, res) => {
  getUsers().then((users) => {
    const user = users.find((user) => user.name === req.body.name);
    if (user) {
      res.send("user already exists");
    } else {
      const newUser = new mongoose.model("User")({
        name: req.body.name,
        password: req.body.password,
        avatarSrc: "",
        reports: [],
      });
      newUser.save();
      res.send(newUser);
    }
  });
});

// functions
async function connect(uri) {
  try {
    await mongoose.connect(uri);
    log("✓ Connected to MongoDB ");
  } catch (err) {
    log(err);
  }
}
async function getUsers() {
  try {
    const users = await mongoose.model("User").find();
    return users;
  } catch (err) {
    log(err);
  }
}
