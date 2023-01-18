import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const getAllUsers = async() => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const allUsers = await axios.get("http://localhost:8080/user", {
        headers: { authorization: `Bearer ${token}` },
      });
      setUsers(allUsers.data);
      console.log(allUsers.data)
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
 <h3 className="text-center mx-auto">Users</h3>
    <div className='table-div'>
      <table className="table w-75 mx-auto">
        <thead>
          <tr>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">.</th>
          </tr>
        </thead>
        <tbody>
          {users.length &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  {/* can access _id. check id _id = fetch id */}
                  <button className="btn btn-dark">See more</button>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    </div>
       
  );
}

export default Users;