import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyPetPage from "./components/MyPetPage";
import Navbar from "./components/Navbar";
import PetPage from "./components/PetPage";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Search from "./components/Search";
import AppContext from "./context/AppContext";

function App() {
  const [user, setUser] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    password: "",
    repassword: "",
  });
  // const [email, setEmail] = useState("c@g.com");
  // const [phone, setPhone] = useState("0123");
  // const [firstName, setFirstName] = useState("Cheli");
  // const [lastName, setLastName] = useState("Sher");
  const contextValues = {
    // user,
    // setUser,
    // email,
    // setEmail,
    // phone,
    // setPhone,
    // firstName,
    // setFirstName,
    // lastName,
    // setLastName,
    user,
    setUser,
    userDetails,
    setUserDetails,
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
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
