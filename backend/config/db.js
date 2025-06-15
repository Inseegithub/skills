import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const MONGO_URI = process.env.MONGO_URI || '';

// region: Database Connection
export const connectDB = async () => {
    try {
        if (!MONGO_URI) {
            console.log("MongoDB URI is not defined. Please set the MONGO_URI environment variable.");
            return;
        }
        const conn = await mongoose.connect(process.env.MONGO_URI, clientOptions);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}
// endregion: Database Connection