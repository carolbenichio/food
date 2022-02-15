const foodByTemperature = require('../helpers/foodByTemperature');
const getTemperature = require('../schemas/getTemperature');
const getRecipes = require('../schemas/getRecipes');

const getSuggestedRecipes = async (city) => {
  const temp = await getTemperature(city);
  const suggestedFood = await foodByTemperature(temp);
  const suggestedRecipes = await getRecipes(suggestedFood);
  return { temp, suggestedFood, suggestedRecipes };
};

module.exports = getSuggestedRecipes;
