const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name of a product"],
    trim: true,
    maxLength: [20, "Product name not exceed than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a decription of your product"],
    maxLength: [4000, "Description is can not exceed than 4000 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please add a price for your product"],
    maxLength: [8, "Price can not exceed than 8 characters"],
  },
  size: {
    type: String,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  stock: {
    type: Number,
    required: [true, "Please add some stock for your product"],
    maxLength: [3, "Stock can not exceed than 3 characters"],
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
