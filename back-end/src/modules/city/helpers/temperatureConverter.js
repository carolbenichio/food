const temperatureConverter = (temp) => {
  const celsius = Math.round(temp - 273.15);
  return celsius;
};

module.exports = temperatureConverter;
