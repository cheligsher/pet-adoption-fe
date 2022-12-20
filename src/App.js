import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyPetPage from "./components/MyPetPage";
import Navbar from "./components/Navbar";
import PetPage from "./components/PetPage";
import Profile from "./components/Profile";
import Search from "./components/Search";
import AppContext from "./context/AppContext";

function App() {
  const [user, setUser] = useState(true);
  const [email, setEmail] = useState("c@g.com");
  const [phone, setPhone] = useState("0123");
  const [firstName, setFirstName] = useState("Cheli");
  const [lastName, setLastName] = useState("Sher");
  const contextValues = {
    user,
    setUser,
    email,
    setEmail,
    phone,
    setPhone,
    firstName,
    setFirstName,
    lastName,
    setLastName,
  };

  return (
    <div className="App">
      <AppContext.Provider value={contextValues}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/MyPetPage" element={<MyPetPage />}></Route>
            <Route path="/PetPage" element={<PetPage />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
