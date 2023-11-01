const express = require("express");
const router = express.Router();
const Product = require("../models/product");
router.post("/create", async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    const product = new Product({ name, description, price, image });

    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/list", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.put("/product/:id", async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    const product = await Product.findByIdAndUpdate(req.params.id, {
      name,
      description,
      price,
      image,
    });

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/product/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);

    if (!product) {
      return res.status(404).send("Product not found");
    }

    res.status(204).send("Product deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
