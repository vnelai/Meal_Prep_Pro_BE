// Import modules
import mongoose from "mongoose"; //mongoose for database interactions

// Create shoppingListSchema
const shoppingListSchema = new mongoose.Schema({
    
});

// Set meal plan model in variable
const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

// Export MealPlanner model
export default ShoppingList;