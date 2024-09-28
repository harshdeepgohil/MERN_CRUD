import express from "express";
import mongoose from "mongoose";
import userRoute from "./route/userRoute.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const connectDB = () => {
  try {
    mongoose.connect("mongodb://localhost:27017");
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

app.use("/user", userRoute);

app.listen(3001, (req, res) => {
  console.log("Server Is Running");
});
