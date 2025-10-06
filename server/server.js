import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./App.js";

dotenv.config();

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
