import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import mentorModel from "./models/mentorRegis.js";
import jwt from "jsonwebtoken"

dotenv.config();

const app = express();

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

app.get("/getMentors", async (req, res) => {
  try {
    const result = await mentorModel.find();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

// Endpoint for user authentication
app.post("/login", async (req, res) => {
  console.log(req.body)
  const { name, password } = req.body;
  try {
    const user = await UserModel.findOne({ name });

    if (!user) {
      return res.json({ message: "User Doesn't Exist!" });
    }

    const isPasswordValid = await user.comparePassword(password);

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
