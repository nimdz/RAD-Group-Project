const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;
const User = require("./models/user");
const secretKey = process.env.JWT_SECRET_KEY;

const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/stayheredb";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to the database");
});

db.on("error", (error) => {
  console.error("Database connection error:", error);
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  try {
    const { fullName, email, password, userType } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      userType,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while registering user." });
  }
});

app.post("/check-email", async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ available: false });
    }

    res.json({ available: true });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while checking email." });
  }
});

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Sign in successful.",
      token: token,
      userType: user.userType,
      email: user.email,
      userName: user.fullName,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while signing in." });
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, secretKey, {}, async (err, userData) => {
      if (err) throw err;
      const { fullName, email, _id } = await User.findById(userData.userId);
      res.json({ fullName, email, userType, _id });
    });
  } else {
    res.json(null);
  }
});

app.get("/api-users", async (req, res) => {
  try {
    const users = await User.find({}, "_id fullName email userType"); // Modify this to fetch the desired fields

    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching user data." });
  }
});

app.delete("/api-users/:email", async (req, res) => {
  try {
    const email = req.params.email;
    await User.findOneAndDelete({ email }); // Find and delete user by email
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while deleting user." });
  }
});

app.put("/api-users/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const updatedData = req.body;

    await User.findOneAndUpdate({ email }, updatedData);
    res.status(200).json({ message: "User data updated successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating user data." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
