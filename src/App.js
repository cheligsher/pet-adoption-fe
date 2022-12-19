import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPetPage from "./components/MyPetPage";
import Navbar from "./components/Navbar";
import PetPage from "./components/PetPage";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<MyPetPage />}>
          </Route>
          <Route path="/PetPage" element={<PetPage />}>
            
          </Route>
          <Route path="/search" element={<Search />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
