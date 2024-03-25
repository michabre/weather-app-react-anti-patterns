const tileTemperatureColor = (temperature: string) => {
  const temp = parseInt(temperature);

  if (temp > 30) {
    return "is-danger";
  } else if (temp > 20) {
    return "is-warning";
  } else {
    return "is-info";
  }
  
};

export { tileTemperatureColor };