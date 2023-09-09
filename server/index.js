const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const imageDownloader = require("image-downloader");
const fs = require("fs");
const cookieParser = require("cookie-parser");

const multer = require("multer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;
const User = require("./models/user");
const Accommodation = require("./models/accommodation");

const jwtSecret = process.env.JWT_SECRET_KEY;

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

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

    const token = jwt.sign({ userId: user._id }, jwtSecret, {});

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

  if (!token) {
    return res.json(null); // Return null if there's no token
  }

  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) {
      console.error("Token verification error:", err);

      // Clear the token and send a response indicating logout
      res.clearCookie("token");
      return res
        .status(401)
        .json({ message: "Logged out due to token expiration." });
    }

    try {
      const user = await User.findById(userData.userId); // Use "userId" as it's the field set during token signing

      if (!user) {
        console.error("User not found:", userData.userId);

        // Clear the token and send a response indicating logout
        res.clearCookie("token");
        return res.status(401).json({ message: "User not found." });
      }

      res.json({ name: user.fullName, email: user.email, _id: user._id });
    } catch (error) {
      console.error("Error fetching user:", error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching user data." });
    }
  });
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

app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;

  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });

  res.json(newName);
});

const photosMiddleware = multer({ dest: "uploads" });
app.post("/upload", photosMiddleware.array("photos", 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;

    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace("uploads\\", ""));
  }

  res.json(uploadedFiles);
});

// ... (Your existing code)

// Route for creating a new accommodation
app.post("/accommodations", async (req, res) => {
  try {
    const { placeDetails } = req.body; // Extract user email

    const email = placeDetails.email;

    const user = await User.findOne({ email }); // Find the user by email

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    await Accommodation.create({
      email: user.email,
      title: placeDetails.title,
      address: placeDetails.address,
      photos: placeDetails.addedPhotos,
      description: placeDetails.description,
      perks: placeDetails.perks,
      extraInfo: placeDetails.extraInfo,
      checkIn: placeDetails.checkIn,
      checkOut: placeDetails.checkOut,
      maxGuests: placeDetails.maxGuests,
      price: placeDetails.price, // Spread the rest of the accommodation data
    });

    res.status(201).json({ message: "Accommodation added successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while adding accommodation." });
  }
});

// Route for updating an existing accommodation
app.put("/accommodations/:id", async (req, res) => {
  try {
    const { placeDetails } = req.body; // Extract updated accommodation data

    // Find the accommodation by its ID
    const accommodation = await Accommodation.findById(req.params.id);

    if (!accommodation) {
      return res.status(404).json({ error: "Accommodation not found." });
    }

    // You can update specific fields here based on the data in placeDetails
    accommodation.title = placeDetails.title;
    accommodation.address = placeDetails.address;
    accommodation.photos = placeDetails.addedPhotos;
    accommodation.description = placeDetails.description;
    accommodation.perks = placeDetails.perks;
    accommodation.extraInfo = placeDetails.extraInfo;
    accommodation.checkIn = placeDetails.checkIn;
    accommodation.checkOut = placeDetails.checkOut;
    accommodation.maxGuests = placeDetails.maxGuests;
    accommodation.price = placeDetails.price;

    // Save the updated accommodation
    await accommodation.save();

    res.status(200).json({ message: "Accommodation updated successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating accommodation." });
  }
});

// ... (Rest of your code)

app.get("/user-places", async (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const { id } = userData;
    res.json(await Accommodation.find({ owner: id }));
  });
});

app.get("/accommodation/:id", async (req, res) => {
  const { id } = req.params;

  res.json(await Accommodation.findById(id));
});

app.get("/accommodation", async (req, res) => {
  res.json(await Accommodation.find());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
