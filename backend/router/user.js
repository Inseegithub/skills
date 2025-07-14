import { Router } from "express";
import { createUser, getUser } from "../controllers/user.js";

const router = Router();

// Import user controller functions
router.post("/createUser", createUser);
router.get("/getUser", getUser);

export default router;