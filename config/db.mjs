// Importing modules: mongoose for database interactions and dotenv for environmental variables
import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environmental variables
dotenv.config();

// Load mongoUri
const mongoURI = process.env.mongoURI 
if (!mongoURI) {
    throw new Error('mongoURI is not defined');
}    

// Connecting to database function
const connectDB = async () => {
    try {
        // Try to connect to database if successful log success
        await mongoose.connect(mongoURI);
        console.log("Database connected")
    } catch (error) {
        // If database connection not successful, log error and exit 
        console.error('An error occurred:', error);
        process.exit(1); // Application stops running immediately, to prevent further any further issues
    }
};

export default connectDB;