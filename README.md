Meal Prep Pro - Backend

The backend for the Meal Prep Pro app, handling API routes and database interactions.


Tech Stack
Backend Framework: Express
Database: MongoDB
API: External API for recipes


Features
API Endpoints:
GET /api/recipes: Fetch recipes from an external API.
Favorites Routes:
GET /api/favorites: Fetch all favorite recipes.
POST /api/favorites: Add a new favorite recipe.
PUT /api/favorites/:id: Update a favorite recipe.
DELETE /api/favorites/:id: Delete a favorite recipe.

Meal Planner Routes:
GET /api/meal-planner: Fetch meal plan.
POST /api/meal-planner: Add a new meal to the planner.
PUT /api/meal-planner/:id: Update a meal in the planner.
DELETE /api/meal-planner/:id: Remove a meal from the planner.

Shopping List Routes:
GET /api/shopping-list: Fetch shopping list.
POST /api/shopping-list: Add items to shopping list.
PUT /api/shopping-list/:id: Update shopping list items.
DELETE /api/shopping-list/:id: Delete shopping list items.


Installation
Prerequisites
Node.js
MongoDB (local or cloud service like MongoDB Atlas)

Steps to Run Locally
1. Clone the repository:
git clone <https://github.com/vnelai/Meal_Prep_Pro_BE.git>

2. Navigate to the project directory:
cd Meal_Prep_Pro_BE

3. Install dependencies:
npm install

4. Set up your MongoDB database (local or MongoDB Atlas).
5. Create a .env file to store environment variables (e.g., MongoDB URI).
6. Start the server:
npm start (for production)
npm run dev (for development with auto-reloading nodemon)


Front End
For the frontend of this project, visit the [Meal Prep Pro Frontend Repository]
(https://github.com/vnelai/Meal_Prep_Pro_FE.git).


Contributing
Feel free to fork the repository and submit pull requests. If you have any issues or suggestions, open an issue.


License
This project is licensed under the MIT License.