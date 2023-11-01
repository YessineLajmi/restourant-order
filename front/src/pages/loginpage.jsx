// Login.js
import React, { useState } from "react";
import { Button, TextField, Paper, Typography, Grid } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const style = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: "16px",
    flexDirection: "column",
    alignItems: "center",
  },
};

function Loginpage() {
  let nav = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        formData,
        { withCredentials: true }
      );
      console.log(response);
      alert("ok");
      nav("/products");
    } catch (error) {
      alert("error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Grid container component="main" style={style.root}>
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        component={Paper}
        elevation={6}
        square
        style={style.paper}
      >
        <div style={style.paper}>
          <Typography variant="h5">Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Loginpage;
