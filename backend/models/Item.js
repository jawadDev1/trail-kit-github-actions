const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["Footwear", "Apparel", "Accessories", "Camping"],
    },
    price: { type: Number, required: true, min: 0 },
    imageUrl: { type: String, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Item", itemSchema);
