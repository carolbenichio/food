const axios = require('axios');

const API_KEY = 'ed0fa4bb7682d3f51811403cb3546b25';
const API_ID = 'ce792e11';

let cache = null;
let count = 0;
let time = null;

const getRecipes = async (food) => {
  if (count === 0) time = new Date();
  if (count >= 10) {
    if (time.getTime() - new Date().getTime() < 600000) return cache;
    time = new Date();
    count = 0;
  }
  const recipes = Promise.all(food.map(async (item) => {
    const API_LINK = `https://api.edamam.com/api/recipes/v2?type=public&q=${item}&app_id=${API_ID}&app_key=${API_KEY}`;
    const { data: { hits } } = await axios.get(API_LINK);
    cache = hits;
    count += 1;
    return hits;
  }));
  return recipes;
};

module.exports = getRecipes;
