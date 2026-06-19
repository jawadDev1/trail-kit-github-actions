require("dotenv").config();
const mongoose = require("mongoose");
const Item = require("../models/Item");

const sampleItems = [
  {
    name: "Trailhead Boots",
    description:
      "Waterproof leather boots built for muddy switchbacks and long descents.",
    category: "Footwear",
    price: 145,
    imageUrl: "https://picsum.photos/seed/trailhead-boots/480/360",
  },
  {
    name: "Windline Shell Jacket",
    description: "Packable rain shell that cuts wind on exposed ridgelines.",
    category: "Apparel",
    price: 98,
    imageUrl: "https://picsum.photos/seed/windline-jacket/480/360",
  },
  {
    name: "Basecamp Canvas Pack",
    description:
      "32L canvas pack with a hidden laptop sleeve for the commute home.",
    category: "Accessories",
    price: 76,
    imageUrl: "https://picsum.photos/seed/basecamp-pack/480/360",
  },
  {
    name: "Emberlight Stove",
    description:
      "Two-burner camp stove that boils water in under three minutes.",
    category: "Camping",
    price: 64,
    imageUrl: "https://picsum.photos/seed/emberlight-stove/480/360",
  },
  {
    name: "Driftwood Wool Socks",
    description: "Merino blend socks that stay warm even when they get wet.",
    category: "Apparel",
    price: 18,
    imageUrl: "https://picsum.photos/seed/driftwood-socks/480/360",
  },
  {
    name: "Lowlight Headlamp",
    description: "300-lumen headlamp with a red-light mode for camp at dusk.",
    category: "Camping",
    price: 42,
    imageUrl: "https://picsum.photos/seed/lowlight-headlamp/480/360",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for seeding...");

    await Item.deleteMany({});
    console.log("Existing items cleared.");

    await Item.insertMany(sampleItems);
    console.log(`${sampleItems.length} items inserted.`);

    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err.message);
    process.exit(1);
  }
};

seedDB();
