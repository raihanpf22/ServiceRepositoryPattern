require("dotenv").config();

const express = require("express");
const productController = require("./controllers/ProductController");
const app = express();
const PORT = process.env.PORT;

app.get("/",productController.findAll)


app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is Successfully Running, http://localhost:${PORT}`);
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
