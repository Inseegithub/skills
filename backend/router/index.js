import { Router } from "express";
import user from "./user.js";
const router = Router();

// Import user controller functions
router.use("/user", user);

export default router;