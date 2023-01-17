import React, { useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState("")
  const { userDetails } = useContext(AppContext);
  const { firstName, lastName } = userDetails;
  const fetchUserInfo = async() => {
 const userInfo = await axios.get(`http://localhost:8080/${userDetails.userId}`)
 setUser(userInfo)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])
  

   return (
    <div className="mt-5 w-50 mx-auto">
      <h3>
        Welcome to your profile 
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
