// Import modules
import mongoose from "mongoose"; //mongoose for database interactions

// Create favoriteRecipesSchema
const favoriteRecipesSchema = new mongoose.Schema({
    recipeId: {
        type: String,
        required: true,
    },
    recipeName: {
        type: String,
        required: true,
    },
    recipeImg: {
        // since mongoose doesn't have 
        // //data type image, we will use string url
        type: String, 
        required: true,
    },
    ingredients: [
        {
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: String,
                required: false, // optional
            },
            unit: {
                type: String,
                required: false, // optional
            },
        },
    ],
    instructions: {
        type: String, 
        required: true,
    },
});

// Set favorite recipes model in variable
const FavoriteRecipes = mongoose.model('favorite_recipes', favoriteRecipesSchema);

// Export FavoriteRecipes model
export default FavoriteRecipes;