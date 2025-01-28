// Importing necessary modules
import express from 'express' // express for routing
import cors from 'cors' // cors for managing cross-origin requests
import morgan from 'morgan' // morgan for logging http requests
import connectDB from './config/db.mjs'; // connectDB function to connect to database
import dotenv from 'dotenv'; // dotenv for environmental variables
import favoritesRoutes from './routes/favorites.mjs'; // Import favorites route

// Load environmental variables
dotenv.config();

// Create express app
const app = express();

// Set PORT and default to 3000 if first port not available
const PORT = process.env.PORT || 3000;

// Connect to database
connectDB();

// Middleware
app.use(express.json());  // Parse JSON requests

 // Connect route handler favoritesRoutes to base path /api/favorites
app.use('/api/favorites', favoritesRoutes);

app.get('/test', (req, res) => {
  console.log("Test route hit!");
  res.send("Test route works!");
});

// Listener
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });