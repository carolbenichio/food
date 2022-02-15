const foodByTemperature = async (temp) => {
  if (temp >= 30) {
    return ['salad'];
  } if (temp >= 20) {
    return ['cereals', 'meat'];
  }
  return ['soups', 'broth'];
};

module.exports = foodByTemperature;
