// Import modules
import express from "express"; // express for routing
import MealPlanner from "../models/MealPlanner.mjs" // import MealPLanner model
const router = express.Router(); // create router

router
  .route("/")
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
