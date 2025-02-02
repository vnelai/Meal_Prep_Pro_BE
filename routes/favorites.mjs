// Import modules
import express from "express"; // express for routing
import FavoriteRecipes from "../models/FavoriteRecipes.mjs"; // import FavoriteRecipes model
import viewRecipeById from "../controllers/viewRecipeById.mjs"; // Import viewRecipeById function

const router = express.Router(); // create router

router
  .route("/")
  // View all recipes in favorites
  .get(async (req, res) => {
    try {
      const favoriteRecipes = await FavoriteRecipes.find(); // Get all favorite recipes
      console.log(favoriteRecipes); // Log the recipes to verify data
      if (!favoriteRecipes || favoriteRecipes.length === 0) {
        return res.status(404).json({ message: "No favorite recipe found" });
      }
      res.status(200).json(favoriteRecipes); // Convert response to json format
    } catch (error) {
      res.status(500).json({ message: "Server error", error }); // Send error response
    }
  })
  // Create a new recipe into favorites
  .post(async (req, res) => {
    try {
      // Use destructuring to automatically extract all the properties from req.body and assign them to variables in a single line
      const { recipeId, recipeName, recipeImg, ingredients, instructions } =
        req.body;

      // This variable will be the new document we will save in the database
      const newFavorite = new FavoriteRecipes({
        recipeId,
        recipeName,
        recipeImg,
        ingredients,
        instructions,
      });

      // The save method saved the newFavorite into database
      const savedFavorite = await newFavorite.save();

      // The savedFavorite is then returned in json format
      res.status(201).json(savedFavorite);
    } catch (error) {
      // If any errors occur send the error message
      res.status(500).json({ message: "Server error", error });
    }
  });

router
  .route("/:id")
  // Get by id a recipe in favorites
  .get(viewRecipeById) // The viewRecipeById function simplifies the get by id request
  // Update by id a recipe in favorites
  .put(async (req, res) => {
    try {
      const updateFavorite = await FavoriteRecipes.findByIdAndUpdate(
        req.params.id, // The ID of the recipe we wish to update
        req.body, // The data we want to update the recipe with
        {
          new: true, // Return the updated recipe and not the original
          runValidators: true, // Ensure the new data matches the schema
        }
      );

      // If favorite recipe not found throw an error
      if (!updateFavorite) {
        return res.status(404).json({ message: "Favorite recipe not found" });
      }

      // If favorite recipe found and updated successfully return result to json format
      res.status(200).json(updateFavorite);
    } catch (error) {
      // If try block doesn't work send error response
      res.status(500).json({ message: "Server error", error });
    }
  })
  // Delete by id a recipe in favorites
  .delete(async (req, res) => {
    try {
      // Find and delete by id
      const deleteFavorite = await FavoriteRecipes.findByIdAndDelete(
        req.params.id
      );

      // If favorite recipe not found throw an error
      if (!deleteFavorite) {
        return res.status(404).json({ message: "Favorite recipe not found" });
      }

      // If favorite recipe found and deleted successfully return result in json format
      res.status(200).json(deleteFavorite);
    } catch (error) {
      // If try block doesn't work send error response
      res.status(500).json({ message: "Server error", error });
    }
  });

export default router;
