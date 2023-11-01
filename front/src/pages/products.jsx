import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from "@mui/material";
import axios from "axios";
import Navbar from "./navbar";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/product/list", { withCredentials: true })
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete("http://localhost:8000/product/" + id, { withCredentials: true })
      .then(() => {
        alert("deleted");
        window.location.reload();
      });
  };

  return (
    <div>
      <Navbar />
      <Grid container justifyContent="center" marginTop={5}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Products
            </Typography>
            <List>
              {products.map((product) => (
                <ListItem key={product._id}>
                  <ListItemAvatar>
                    <Avatar alt={product.name} src={product.image} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.name}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="textPrimary"
                        >
                          {product.description}
                        </Typography>
                        <br />
                        Price: {product.price}
                        <br />
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => deleteProduct(product._id)}
                        >
                          Delete
                        </Button>
                      </>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
