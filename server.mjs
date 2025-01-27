// Importing modules: express for routing,
// cors for managing cross-origin requests, morgan for logging http requests
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'




// Create express app
const app = express();

// Set PORT and default to 3000 if first port not available
const PORT = process.env.PORT || 3000;





// Listener
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });