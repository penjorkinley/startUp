import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import mentorModel from "./models/mentorRegis.js";

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
    const result = await mentorModel.find({ name: "John Doe" });
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
