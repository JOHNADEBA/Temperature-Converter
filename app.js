const celsius = document.querySelector(".celsius input");
const fahrenheit = document.querySelector(".fahrenheit input");
const kelvin = document.querySelector(".kelvin input");

const convertFromCelsius = () => {
  celTemp = parseFloat(celsius.value);
  fahTemp = (celTemp * 9) / 5 + 32;
  kelTemp = celTemp + 273.15;
  fahrenheit.value = roundTemp(fahTemp);
  kelvin.value = roundTemp(kelTemp);
};

const convertFromFahrenheit = () => {
  fahTemp = parseFloat(fahrenheit.value);
  celTemp = ((fahTemp - 32) * 5) / 9;
  kelTemp = ((fahTemp - 32) * 5) / 9 + 273.15;
  celsius.value = roundTemp(celTemp);
  kelvin.value = roundTemp(kelTemp);
};

const convertFromKelvin = () => {
  kelTemp = parseFloat(kelvin.value);
  celTemp = kelTemp - 273.15;
  fahTemp = ((kelTemp - 273.15) * 9) / 5 + 32;
  celsius.value = roundTemp(celTemp);
  fahrenheit.value = roundTemp(fahTemp);
};

const roundTemp = (num) => {
  return Math.round(num * 100) / 10;
};

celsius.addEventListener("input", convertFromCelsius);
fahrenheit.addEventListener("input", convertFromFahrenheit);
kelvin.addEventListener("input", convertFromKelvin);
