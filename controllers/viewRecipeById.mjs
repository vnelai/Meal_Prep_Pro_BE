// Import modules
import FavoriteRecipes from "../models/FavoriteRecipes.mjs"; // Import FavoriteRecipes model

// Function to view a recipe by ID
const viewRecipeById = async (req, res) => {
    try {
      // Fetch recipe by ID
      const favoriteRecipe = await FavoriteRecipes.findById(req.params.id); 
  
      // If recipe is not found, return an error
      if (!favoriteRecipe) {
        return res.status(404).json({ message: "Favorite recipe not found" });
      }
  
      // If recipe is found, return it in JSON format
      res.status(200).json(favoriteRecipe);
    } catch (error) {
      // If there's an error, return a server error message
      res.status(500).json({ message: "Server error", error });
    }
  };

// Export function
export default viewRecipeById; 