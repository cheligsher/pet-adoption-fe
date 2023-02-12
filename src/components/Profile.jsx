import React, { useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";

function Profile() {

  //fix userInfo naming
  const token = JSON.parse(localStorage.getItem("token"));
  const [userInfo, setUserInfo] = useState("")
  const { userDetails, setUser } = useContext(AppContext);
  const { firstName, lastName } = userDetails;
  const fetchUserInfo = async() => {
 const userInfo = await axios.get(`http://localhost:8080/${userDetails.userId}`)
 setUserInfo(userInfo)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])
  

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
    <div className="mt-4 w-50 mx-auto background p-3">
      <h3>
        Welcome to your profile {" "}
        {firstName} {lastName} 🐾
      </h3>
      <p>
        If you'd like to update your details, please complete the below form!
      </p>
      <ProfileForm />
    </div>
  );
}

export default Profile;
