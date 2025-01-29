// Import modules
import express from "express"; // express for routing
import MealPlanner from "../models/MealPlanner.mjs" // import MealPLanner model
const router = express.Router(); // create router

router
  .route("/")
  .get(async (req, res) => {
    try {
      const MealPLannerRecipes = await MealPlanner.find(); // Get all meal planner recipes
      console.log(MealPLannerRecipes); // Log the recipes to verify data
      if (!MealPLannerRecipes || MealPLannerRecipes.length === 0) {
        return res.status(404).json({ message: "No meal plan recipe found" });
      }
      res.status(200).json(MealPLannerRecipes); // Convert response to json format
    } catch (error) {
      res.status(500).json({ message: "Server error", error }); // Send error response
    }
  })
  .post(async (req, res) => {
    try {
      // Use destructuring to automatically extract all the properties from req.body and assign them to variables in a single line
      const { mealDay, recipeId, recipeName } =
        req.body;

      // This variable will be the new document we will save in the database
      const newMealPlan = new MealPlanner({
        mealDay,
        recipeId,
        recipeName,
      });

      // The save method saves the newMealPlan into database
      const savedMealPlanRecipe = await newMealPlan.save();

      // The savedFavorite is then returned in json format
      res.status(201).json(savedMealPlanRecipe);
    } catch (error) {
      // If any errors occur send the error message
      res.status(500).json({ message: "Server error", error });
    }
  });

  export default router;
