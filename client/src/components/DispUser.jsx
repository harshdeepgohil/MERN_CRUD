import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"

const DispUser = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/user/DispUser");
      // console.log(response.data);

      setUsers(response.data);
    } catch (error) {
      alert("Error in fetcing data : " + error);
    }
  }
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete("http://localhost:3001/user/DeleteUser/" + id);
      if (response) {
        fetchData();

      }
    } catch (error) {
      alert("Error In Delteing Data : " + error);
    }
  }

  const searchUser = async (e) => {
    const value = e.target.value;

    if (!value) {
      fetchData();
    }

    const response = await axios.get("http://localhost:3001/user/SearchUser/" + value);
    setUsers(response.data);
  }
  return (
    <div>
      <div className="container">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={searchUser} />
          <label for="floatingInput">Search</label>
        </div>
      </div>

      <div className="container d-flex">
        {

          users.map((each) => {
            return (
              <>
                <div class="card" style={{ "width": "18rem;" }}>
                  <div class="card-body" >
                    <h5 class="card-title">Name : {each.name}</h5>
                    <h6>Phone : {each.phone}</h6>
                    <p class="card-text">Email : {each.email}</p>
                    <button type="button" class="btn btn-danger" onClick={() => deleteUser(each._id)}>DELETE</button> &nbsp;
                    <button type="button" class="btn btn-info" onClick={() => navigate("/AddUser/" + each._id)}>UPDATE</button>
                  </div>
                </div>


              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default DispUser