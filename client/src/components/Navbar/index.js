import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className= "container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1> React User Directory</h1>
    </nav></div>
  );
}

export default Navbar;