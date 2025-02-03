// Import modules
import mongoose from "mongoose"; //mongoose for database interactions

// Schema for each meal in a day
const mealSchema = new mongoose.Schema(
    {
      Breakfast: {
        type: String,
        default: "",
      },
      Lunch: {
        type: String,
        default: "",
      },
      Dinner: {
        type: String,
        default: "",
      },
    },
    { _id: false } // Prevents creating an _id for each meal 
  );
  
  // Schema for the week's meal plan
  const weekMealPlanSchema = new mongoose.Schema(
    {
      Monday: {
        type: mealSchema,
        default: {},
      },
      Tuesday: {
        type: mealSchema,
        default: {},
      },
      Wednesday: {
        type: mealSchema,
        default: {},
      },
      Thursday: {
        type: mealSchema,
        default: {},
      },
      Friday: {
        type: mealSchema,
        default: {},
      },
      Saturday: {
        type: mealSchema,
        default: {},
      },
      Sunday: {
        type: mealSchema,
        default: {},
      },
    },
    { _id: false }
  );
  
  // Main MealPlanner schema that stores the week's meal plan
  const MealPlannerSchema = new mongoose.Schema({
    weekMealPlan: {
      type: weekMealPlanSchema,
      required: true,
    },
  });
  

// MealPlanner model
const MealPlanner = mongoose.model('MealPlanner', MealPlannerSchema);   

// Export MealPlanner model
export default MealPlanner;