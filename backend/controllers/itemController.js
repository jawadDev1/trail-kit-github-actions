const Item = require("../models/Item");

// GET /api/items
const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch items", error: err.message });
  }
};

// GET /api/items/:id
const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch item", error: err.message });
  }
};

// POST /api/items
const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to create item", error: err.message });
  }
};

module.exports = { getItems, getItemById, createItem };
