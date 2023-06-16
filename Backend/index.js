import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import mentorModel from "./models/UserModel.js";
import jwt from "jsonwebtoken";
import UserModel from "./models/UserModel.js";
import bcrypt from "bcrypt";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb+srv://startup2023:$heerioeD16@cluster0.z32x289.mongodb.net/startup?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});
//routes

// Endpoint for user sign-up
app.post("/signup", async (req, res) => {
  const { name, CID, email, gender, password, role, expertise, phoneNo } =
    req.body;
  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.json({ message: "User Already Exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      CID,
      email,
      gender,
      password: hashedPassword,
      role,
      expertise,
      phoneNo,
    });
    console.log(newUser);
    await newUser.save(); // Save the newUser object to the database

    res.json({ message: "User Created Successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint for user authentication
app.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await UserModel.findOne({ name });

    if (!user) {
      return res.json({ message: "User Doesn't Exist!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({ message: "Username or Password Is Incorrect!" });
    }

    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
