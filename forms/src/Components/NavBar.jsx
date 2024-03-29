import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <li>
            <Link to="/AddUser">Add User</Link>
        </li>
        <li>
            <Link to="/AddWarehouse">Add Warehouse</Link>
        </li>
        <li>
            <Link to="/AddStock">Add Stock</Link>
        </li>
        <li>
            <Link to="/AddProduct">Add Product</Link>
        </li>
        <li>
            <Link to="/Notification">Notification</Link>
        </li>
      </div>
    </>
  );
}

export default NavBar;
