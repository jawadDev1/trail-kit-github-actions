require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

connectDB();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));
app.use(express.json());
app.use(morgan("dev"));

// Health check — useful for load balancer checks and verifying a deploy worked
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/items", itemRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
