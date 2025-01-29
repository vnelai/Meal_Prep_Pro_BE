// Import modules
import express from "express"; // express for routing
import Recipes from "../models/Recipes.mjs" // import Recipes model
const router = express.Router(); // create router
//import controller functions
import { viewRecipeById, saveRecipeToFavorites, fetchRecipesFromExternalApi } from "../controllers";




export default router;