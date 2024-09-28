import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../App.css";
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

function AddUser() {

  const userId = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getSingleUser();
  }, []);

  const handleAddUser = async () => {
    if (!name || !phone || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/user/AddUser", {
        name,
        phone,
        email,
        password,
      });
      console.log("Response from API:", response);
      alert("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user. Please check the console for more details.");
    }
  };

  const handleUpdateUser = async () => {
    const response = await axios.put("http://localhost:3001/user/AddUser/" + userId.id, {
      name,
      phone,
      email,
      password
    });
    if (response) {
      navigate("/DispUser");
    }
  }

  const getSingleUser = async () => {
    const response = await axios.get("http://localhost:3001/user/AddUser/" + userId.id);
    console.log(response.data);
    setName(response.data.name);
    setPhone(response.data.phone);
    setEmail(response.data.email);
    setPassword(response.data.password);
  }

  return (
    <div className="container">
      <h3>ADD USER</h3>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <label>Name</label>
      </div>
      <div className="form-floating mb-3">
        <input type="number" className="form-control" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
        <label>Number</label>
      </div>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <label>Email</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <label>Password</label>
      </div>
      <button type="button" className="btn btn-primary" onClick={!userId.id ? handleAddUser : handleUpdateUser}>{!userId.id ? "ADD" : "UPDATE"}</button>
    </div>
  );
}

export default AddUser;
