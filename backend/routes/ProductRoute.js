const express = require("express");
const {
  getAllProducts,
  createProduct,
  getSingleProduct,
} = require("../controller/ProductController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router.route("/product/:id").get(getSingleProduct);

module.exports = router;
