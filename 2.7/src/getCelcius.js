//getCelcius() converts farenhiet unit to celcius
exports.getCelcius = function (farenheit) {
  return farenheit.map((value) => ((value - 32) * 5) / 9);
};
