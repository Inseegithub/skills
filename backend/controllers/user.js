import { hashPassword } from "../common/passwordHashing.js";
import User from "../models/userModal.js";

const createUser = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // Check if user already exists
        const existingUser = await User.find({ email });
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash the password
        const hashedPassword = await hashPassword(password);
        if (!hashedPassword) {
            return res.status(500).json({ message: "Error hashing password" });
        }
        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const getUser = async(req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User found", user: user });
    } catch (error) {
        console.error("Error getting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export {
    createUser,
    getUser
}