const axios = require('axios');
const temperatureConverter = require('../helpers/temperatureConverter');

const API_KEY = '733fdb98ec20532ed4525feb0a5caf1c';

let cache = null;
let count = 0;
let time = null;

const getTemperature = async (city) => {
  if (count === 0) time = new Date();
  if (count >= 1000) {
    if (time.getTime() - new Date().getTime() < 86400000) return cache;
    time = new Date();
    count = 0;
  }
  const API_LINK = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const { data: { main: { temp } } } = await axios.get(API_LINK);
  cache = temp;
  count += 1;
  const tempCelsius = temperatureConverter(temp);
  return tempCelsius;
};

module.exports = getTemperature;
