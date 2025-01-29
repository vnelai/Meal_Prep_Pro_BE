// Import modules
import FavoriteRecipes from "../models/favoriteRecipesModel"; // Import FavoriteRecipes model

// Function to save a recipe to favorites
const saveRecipeToFavorites = async (req, res) => {
    // Destructure necessary fields from req.body
    const { title, image, recipeId, instructions, extendedIngredients } = req.body; 
  
    try {
      // Create new recipe from request body
      const favoriteRecipe = new FavoriteRecipes({
        recipeId,  
        recipeName: title,  // Renaming the 'title' key from the request body from external API to 'recipeName', to match the FavoriteRecipes schema. 
        recipeImg: image,  // Renaming the 'image' key from the request body from external API to 'recipeImg', to match the FavoriteRecipes schema. 
        instructions,
         // Renaming the 'extendedIngredients' key from the request body from external API to 'ingredients', to match the FavoriteRecipes schema.  
        ingredients: extendedIngredients.map(ingredient => ({
            name: ingredient.name,
            quantity: ingredient.amount, // Renamed 'amount' to 'quantity'
        })),
      });
  
      // Save the recipe to the database
      const savedRecipe = await favoriteRecipe.save();
      
      // If successful return response in json format
      res.status(201).json(savedRecipe); 
    } catch (error) {
      // If not successful send the error message  
      res.status(500).json({ message: "Server error", error });
    }
  };
  
// Export function
export default saveRecipeToFavorites;