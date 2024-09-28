import express from "express";
import userData from "../model/userSchema.js";

const route = express.Router();

//INSERT
route.post("/AddUser", async (req, res) => {
  const newUser = new userData({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  });

  const response = await newUser.save();
  res.status(200).json(response);
});

//UPDATE
route.put("/AddUser/:id", async (req, res) => {
  const response = await userData.findByIdAndUpdate(req.params.id, {
    _id: req.params.id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password,
  });
  res.sendStatus(200);
});

//DISPLAY
route.get("/DispUser", async (req, res) => {
  const response = await userData.find();
  res.status(200).json(response);
});

//DELETE
route.delete("/DeleteUser/:id", async (req, res) => {
  const id = req.params.id;
  const response = await userData.findByIdAndDelete(id);
  res.status(200).json(response);
});

//SEARCH
route.get("/SearchUser/:key", async (req, res) => {
  const key = req.params.key;
  const response = await userData.find({
    name: { $regex: key, $options: "i" },
  });
  res.status(200).json(response);
});

//GET SINGLE USER
route.get("/AddUser/:id", async (req, res) => {
  const response = await userData.findById(req.params.id);
  res.status(200).json(response);
});
export default route;
