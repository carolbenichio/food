const getSuggestedRecipes = require('../services/getSuggestedRecipes');

const getCity = async (req, res) => {
  const { city } = req.params;
  const recipes = await getSuggestedRecipes(city);
  return res.status(200).json(recipes);
};

module.exports = getCity;
