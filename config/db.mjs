// Importing modules: mongoose for database interactions and dotenv for environmental variables
import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environmental variables
dotenv.config();

// Load mongoUri
const mongoURI = process.env.mongoURI || throw new Error('mongoURI is not defined');