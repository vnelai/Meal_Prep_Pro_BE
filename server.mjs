// Importing modules: express for routing, mongoose for database, 
// cors for managing cross-origin requests, morgan for logging http requests
// dotenv for environmental variables
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

// Load environmental variables
dotenv.config();

// Create express app
const app = express();

// Set PORT and default to 3000 if first port not available
const PORT = process.env.PORT || 3000;





// Listener
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });