// Import modules
import express from 'express'; // express for routing
import FavoriteRecipes from '../models/FavoriteRecipes.mjs'; // import FavoriteRecipes model
const router = express.Router(); // create router

router
    .route('/') // ("/api/favorites") endpoint
    .get(async (req,res) => {
        try {
            const favoriteRecipes = await FavoriteRecipes.find(); // Get all favorite recipes
            console.log(favoriteRecipes); // Log the recipes to verify data
            if (!favoriteRecipes || favoriteRecipes.length === 0) {
                return res.status(404).json({message: 'No favorite recipe found'});
            }
            res.status(200).json(favoriteRecipes); // Convert response to json format
        } catch (error) {
            console.error('Error fetching favorite recipes:', error); // Log error
            res.status(500).json({ message: 'Server error', error }); // Send error response
        }        
    })





export default router;