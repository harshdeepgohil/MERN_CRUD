import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,

  phone: Number,

  email: String,

  password: String,
});

export default mongoose.model("userReg", userSchema, "users");
