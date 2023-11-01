const express = require("express");
require("./config/db").connectDB();
const authrouter = require("./controller/usercontroller");
const productrouter = require("./controller/productcontroller");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authrouter);
app.use("/product", productrouter);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.listen(8000, () => {
  console.log("listening to port 8000");
});
