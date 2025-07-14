import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

// file imports
import { connectDB } from "./config/db.js";
import router from "./router/index.js";

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.use('/', router);

app.listen(port, () => {
  console.log("Server is running on http://localhost:3000");
});