// Import modules
import express from "express"; // express for routing
import Recipes from "../models/Recipes.mjs" // import Recipes model
//import controller functions
import { viewRecipeById, saveRecipeToFavorites, fetchRecipesFromExternalApi } from "../controllers";
const router = express.Router(); // create router

// Get all recipes from external API
router.get("/", fetchRecipesFromExternalApi);

// View a single recipe by ID
router.get("/:id", viewRecipeById);

// Save a recipe to favorites
router.post("/favorites", saveRecipeToFavorites);


export default router;