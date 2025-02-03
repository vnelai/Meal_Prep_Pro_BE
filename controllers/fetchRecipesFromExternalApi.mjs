// Function that fetches recipe data from external api
const fetchRecipesFromExternalApi = async (req, res) => {
    const { query } = req.query; // Extract and save search query string from the request into variable
    const API_KEY = process.env.API_KEY; // Import API_KEY from .env file

    try {
      // Fetch data from external API
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`);
      const data = await apiRes.json();  // Convert response data to json format
  
      // If response is successful, send the data back in array results
      if (res.ok) {
        res.status(200).json(data.results);
      } else {
        res.status(res.status).json({ message: "Error fetching recipes from external API" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };

export default fetchRecipesFromExternalApi;  