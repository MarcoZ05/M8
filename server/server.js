// imports
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { log } = require("console");
const bodyParser = require("body-parser");
const { initializeSchema } = require("./schema.js");
require("dotenv").config();

// initialize schema
const { UserSchema, ThreatSchema } = initializeSchema();

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
    if (user) return res.send("user already exists");

    const newUser = new mongoose.model("User")({
      name: req.body.name,
      password: req.body.password,
      avatarSrc: "",
      reports: [],
    });
    // newUser.save();
    res.send(newUser);
  });
});

// delete user
app.post("/deleteUser", async (req) => {
  getUsers().then((users) => {
    const user = users.find((user) => user.name === req.body.name);

    if (user) mongoose.model("User").deleteOne({ _id: user._id });
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
