import "./App.css";
import AddUser from "./Components/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import AddWarehouse from "./Components/AddWarehouse";
import AddStock from "./Components/AddStock";
import AddProduct from "./Components/AddProduct";
import Notification from "./Components/Notification";
function App() {
  return (
    <>
      {/* <AddUser /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/AddWarehouse" element={<AddWarehouse />} />
          <Route path="/AddStock" element={<AddStock />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/Notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
