// Import modules
import express from "express"; // express for routing
import FavoriteRecipes from "../models/FavoriteRecipes.mjs"; // import FavoriteRecipes model
const router = express.Router(); // create router

router
  .route("/")
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
  .get(async (req, res) => {
    try {
      const favoriteRecipe = await FavoriteRecipes.findById(req.params.id); // Get the recipe by ID
      if (!favoriteRecipe) {
        return res.status(404).json({ message: "Favorite recipe not found" });
      }
      res.status(200).json(favoriteRecipe); // Return the recipe in json format
    } catch (error) {
      res.status(500).json({ message: "Server error", error }); // Send error response
    }
  })
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
