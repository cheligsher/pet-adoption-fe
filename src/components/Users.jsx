import axios from "axios";
import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import { toast } from 'react-toastify';


function Users() {
  const [users, setUsers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState("")

  const getAllUsers = async() => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const allUsers = await axios.get("http://localhost:8080/user", {
        headers: { authorization: `Bearer ${token}` },
      });
      setUsers(allUsers.data);
      console.log(allUsers.data)
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleShowInfo = (user) => {
    handleShow()
    setSelectedUser(user)
  }

  return (
    <div className="background">
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
                  <td onClick={()=>handleShowInfo(user)} className="cursor-pointer"><span>Info</span></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    <UserDetails handleClose={handleClose} show={show} selectedUser={selectedUser}/>
    </div>
       
  );
}

export default Users;