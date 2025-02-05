// Function that fetches recipe data from external api
    const fetchRecipesFromExternalApi = async (req, res) => {
    const { query } = req.query; // Extract and save search query string from the request into variable
    const API_KEY = process.env.API_KEY; // Import API_KEY from .env file
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${encodeURIComponent(query)}&diet=vegetarian&intolerances=gluten&includeIngredients=cheese,nuts&excludeIngredients=eggs&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeInstructions=true&addRecipeNutrition=false&maxReadyTime=45&ignorePantry=true&sort=max-used-ingredients&offset=0&number=10`;

    try {
      // Fetch data from external API
      const apiRes = await fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,  // Using RapidAPI key
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      });
      const data = await apiRes.json();  // Convert response data to json format

      // If response is successful, send the data back in array results
      if (apiRes.ok) {
        res.status(200).json(data);
      } else {
        res.status(apiRes.status).json({ message: "Error fetching recipes from external API" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };

export default fetchRecipesFromExternalApi;  