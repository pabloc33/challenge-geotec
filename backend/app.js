const express = require("express");
const ErrorHandler = require("./middleware/error");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// Route imports
const products = require("./routes/ProductRoute");

app.use("/api/v2", products);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(ErrorHandler);

module.exports = app;
