import bcrypt from 'bcryptjs';

// Function to hash a password
const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing password:", error);
        return '';
    }
}

// verify if the password matches the hashed password
const verifyPassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        console.error("Error verifying password:", error);
        return '';
    }
}

export {
    hashPassword,
    verifyPassword
}