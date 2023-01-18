import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddPet from "./components/AddPet";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import MyPetPage from "./components/MyPetPage";
import Navbar from "./components/Navbar";
import PetPage from "./components/PetPage";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Search from "./components/Search";
import AppContext from "./context/AppContext";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("token")) ? true : false);

  
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : 
    {
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    password: "",
    repassword: "",
  });
  const [petDetails, setPetDetails] = useState({
    type: "",
    name: "",
    breed: "",
    adoptionStatus: "Available",
    picture: "",
    height: "",
    weight: "",
    hypoallergenic: "Yes",
    color: "",
    bio: "",
    dietary: ""
  })
  const contextValues = {
    user,
    setUser,
    userDetails,
    setUserDetails,
    petDetails,
    setPetDetails
  };

  return (
    <div className="App">
      <AppContext.Provider value={contextValues}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/MyPetPage"
              element={
                <PrivateRoute>
                  <MyPetPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/PetPage"
              element={
                <PrivateRoute>
                  <PetPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/Profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/addpet" element={<PrivateRoute><AddPet /></PrivateRoute>}></Route>
            <Route path="/dash" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
