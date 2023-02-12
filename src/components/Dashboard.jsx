import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext';
import Pets from './Pets'
import Users from './Users'

function Dashboard() {
 const {setUser} = useContext(AppContext)
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/user`, {
          headers: { authorization: `Bearer ${token}` },
        });
      } catch (err) {
        if (err.response.data === "Invalid Token") {
          setUser(false);
          localStorage.clear();
        }
      }
    };
    verifyUser();
  }, []);
    
  return (
    <div>
        <Users />
        <Pets />
    </div>
  )
}

export default Dashboard