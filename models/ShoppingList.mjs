// Import modules
import mongoose from "mongoose"; //mongoose for database interactions

// Create shoppingListSchema
const shoppingListSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    unit: {
        type: String,
        required: false
    },
    purchased: {
        type: Boolean,
        default: false
    }
});

// Set meal plan model in variable
const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

// Export MealPlanner model
export default ShoppingList;