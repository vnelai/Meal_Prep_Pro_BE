// Import modules
import express from "express"; // express for routing
import MealPlanner from "../models/MealPlanner.mjs" // import MealPLanner model
const router = express.Router(); // create router

router
  .route("/")
  // View all recipes in meal-planner
  .get(async (req, res) => {
    try {
      const MealPLannerRecipes = await MealPlanner.find(); // Get all meal planner recipes
      if (!MealPLannerRecipes || MealPLannerRecipes.length === 0) {
        return res.status(404).json({ message: "No meal plan recipe found" });
      }
      res.status(200).json(MealPLannerRecipes); // Convert response to json format
    } catch (error) {
      res.status(500).json({ message: "Server error", error }); // Send error response
    }
  })
  // Create a new recipe into meal-planner
  .post(async (req, res) => {
    try {
      // Assign the request body to the weekMealPlan variable.
      const weekMealPlan = req.body;

      // Check if a meal plan already exists
      let existingMealPlan = await MealPlanner.findOne();

      // If a meal plan exists, update it instead of creating a new one
      if (existingMealPlan) {
        existingMealPlan.weekMealPlan = weekMealPlan;
        const updatedMealPlan = await existingMealPlan.save();
        return res.status(200).json(updatedMealPlan);
      }
      
      // If no meal plan exists, create a new one
      // This variable will be the new document we will save in the database
      const newMealPlan = new MealPlanner({ weekMealPlan });

      // The save method saves the newMealPlan into database
      const savedMealPlanRecipe = await newMealPlan.save();

      // The saved item is then returned in json format
      res.status(201).json(savedMealPlanRecipe);
    } catch (error) {
      // If any errors occur send the error message
      res.status(500).json({ message: "Server error", error });
    }
  });

  router
  .route("/:id")
  // Update by id a recipe in meal-planner 
  .put(async (req, res) => {
    try {
      const updateMealPlan = await MealPlanner.findByIdAndUpdate(
        req.params.id, // The ID of the recipe we wish to update
        req.body, // The data we want to update the recipe with
        {
          new: true, // Return the updated recipe and not the original
          runValidators: true, // Ensure the new data matches the schema
        }
      );

      // If meal plan recipe not found throw an error
      if (!updateMealPlan) {
        return res.status(404).json({ message: "Meal plan recipe not found" });
      }

      // If favorite recipe found and updated successfully return result to json format
      res.status(200).json(updateMealPlan);
    } catch (error) {
      // If try block doesn't work send error response
      res.status(500).json({ message: "Server error", error });
    }
  })
  // Delete by id a recipe in meal-planner 
  .delete(async (req, res) => {
    try {
      // Find and delete by id
      const deleteMealPlan = await MealPlanner.findByIdAndDelete(
        req.params.id
      );

      // If recipe not found throw an error
      if (!deleteMealPlan) {
        return res.status(404).json({ message: "Meal plan recipe not found" });
      }

      // If recipe found and deleted successfully return result in json format
      res.status(200).json(deleteMealPlan);
    } catch (error) {
      // If try block doesn't work send error response
      res.status(500).json({ message: "Server error", error });
    }
  });

export default router;
