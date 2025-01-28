// Import modules
import express from 'express'; // express for routing
import FavoriteRecipes from 'BE/models/FavoriteRecipes.mjs'; // import FavoriteRecipes model
const router = express.Router(); // create router

router
    .route('/') // ("/api/favorites") endpoint
    .get(async (req,res) => {
        try {
            const favoriteRecipes = await FavoriteRecipes.find(); // Get all favorite recipes
            res.json(favoriteRecipes); // Convert response to json format
        } catch (error) {
            console.error('Error fetching favorite recipes:', error); // Log error
        }        
    })





export default router;