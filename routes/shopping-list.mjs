// Import modules
import express from "express"; // express for routing
import ShoppingList from "../models/ShoppingList.mjs" // import ShoppingList model
const router = express.Router(); // create router

router
  .route("/")
  // View all items in shopping-list
  .get(async (req, res) => {
    try {
      const shoppingListItems = await ShoppingList.find(); // Get all shopping list
      console.log(shoppingListItems); // Log shopping list to verify data
      if (!shoppingListItems || shoppingListItems.length === 0) {
        return res.status(404).json({ message: "No shopping list item found" });
      }
      res.status(200).json(shoppingListItems); // Convert response to json format
    } catch (error) {
      res.status(500).json({ message: "Server error", error }); // Send error response
    }
  })
  // Create a new shopping list item
  .post(async (req, res) => {
    try {
      // Use destructuring to automatically extract all the properties from req.body and assign them to variables in a single line
      const { itemName, quantity, unit, purchased } =
        req.body;

      // This variable will be the new document we will save in the database
      const newShoppingListItem = new ShoppingList({
        itemName,
        quantity,
        unit,
        purchased
      });

      // The save method saves the shopping list item into database
      const savedShoppingListItem = await newShoppingListItem.save();

      // The saved item is then returned in json format
      res.status(201).json(savedShoppingListItem);
    } catch (error) {
      // If any errors occur send the error message
      res.status(500).json({ message: "Server error", error });
    }
  });



export default router;