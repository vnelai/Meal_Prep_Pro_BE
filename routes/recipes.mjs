// Import modules
import express from "express"; // express for routing
//import controller functions
import viewRecipeById from "../controllers/viewRecipeById.mjs";
import saveRecipeToFavorites from "../controllers/saveRecipeToFavorites.mjs";
import fetchRecipesFromExternalApi from "../controllers/fetchRecipesFromExternalApi.mjs";

const router = express.Router(); // create router

// Get all recipes from external API
router.get("/search", fetchRecipesFromExternalApi);

// View a single recipe by ID
router.get("/:id", viewRecipeById);

// Save a recipe to favorites
router.post("/favorites", saveRecipeToFavorites);


export default router;