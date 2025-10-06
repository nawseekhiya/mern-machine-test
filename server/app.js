import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

// Core middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check route
app.get("/ping", (req, res) => {
  res.json({ message: "pong 🏓" });
});

// API routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

export default app;
