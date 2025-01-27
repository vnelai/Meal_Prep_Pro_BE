// Import modules
import mongoose from "mongoose"; //mongoose for database interactions

// Create mealPlannerSchema
const mealPlannerSchema = new mongoose.Schema({
    mealDay: {
        type: String,
        required: true
    },
    recipeId: {
        type: String,
        required: true
    },
    recipeName: {
        type: String,
        required: true
    },
});

// Set meal plan model in variable
const MealPlanner = mongoose.model('MealPlanner', mealPlannerSchema);

// Export MealPlanner model
export default MealPlanner;