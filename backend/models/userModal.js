import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.set("timestamps", true)
// Create a compound index on name and email
userSchema.index({ name: 1, email: 1 });

const User = mongoose.model("User", userSchema);

export default User;