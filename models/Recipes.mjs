// Import modules
import mongoose from "mongoose"; //mongoose for database interactions

// Create RecipesSchema
const recipeSchema = new mongoose.Schema({
    recipeId: {
        type: String,
        required: true,
        unique: true // We want to ensure there's no duplicates
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String, // Img url string
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    extendedIngredients: [
        {
            name: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            unit: {
                type: String,
                required: true
            }
        }
    ]
});


// Set Recipes model in variable Recipe
const Recipes = mongoose.model("Recipes", recipeSchema);

// Export Recipe model
export default Recipes;