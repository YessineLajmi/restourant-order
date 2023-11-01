import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const nav = useNavigate();
  const handlelogout = () => {
    axios.post("http://localhost:8000/auth/logout");
    nav("/");
  };
  return (
    <AppBar position="static">
      <Toolbar style={{ marginLeft: "auto" }}>
        <Button component={Link} to="/products" color="inherit">
          Products
        </Button>
        <Button component={Link} to="/addproduct" color="inherit">
          add product
        </Button>
        <Button component={Link} onClick={handlelogout} color="inherit">
          logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
