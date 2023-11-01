// AddProduct.js
import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import axios from "axios";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const nav = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const addProduct = () => {
    axios
      .post("http://localhost:8000/product/create", newProduct, {
        withCredentials: true,
      })
      .then(() => {
        alert("Product added successfully");
        nav("/products");
      });
  };

  return (
    <>
      <Navbar />
      <div>
        <Typography marginTop={5} variant="h4" align="center" gutterBottom>
          Add a Product
        </Typography>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <form>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newProduct.name}
              onChange={handleProductChange}
            />
            <TextField
              label="Description"
              name="description"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newProduct.description}
              onChange={handleProductChange}
            />
            <TextField
              label="Price"
              name="price"
              type="number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newProduct.price}
              onChange={handleProductChange}
            />
            <TextField
              label="Image URL"
              name="image"
              variant="outlined"
              fullWidth
              margin="normal"
              value={newProduct.image}
              onChange={handleProductChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={addProduct}
              style={{ marginTop: "16px" }}
            >
              Add Product
            </Button>
          </form>
        </Paper>
      </div>
    </>
  );
}

export default AddProduct;
