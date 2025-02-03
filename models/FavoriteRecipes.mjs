// Import modules
import mongoose from "mongoose"; //mongoose for database interactions

// Create favoriteRecipesSchema
const favoriteRecipesSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true,
    },
    recipeImg: {
        // since mongoose doesn't have 
        // data type image, we will use string url
        type: String, 
        required: false,
    },
    ingredients: [
        {
            name: {
                type: String,
                required: false,
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
        required: false,
    },
});

// Set favorite recipes model in variable
const FavoriteRecipes = mongoose.model('favorite_recipes', favoriteRecipesSchema);

// Export FavoriteRecipes model
export default FavoriteRecipes;