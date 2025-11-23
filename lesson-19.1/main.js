const cities = {
  kiev: { lat: 50.450001, lon: 30.523333 },
  telaviv: { lat: 32.109333, lon: 34.855499 },
  warsaw: { lat: 52.237049, lon: 21.017532 },
};

const select = document.getElementById("city");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const time = document.querySelector(".time");
function loadWeather() {
  const city = select.value;
  const lat = cities[city].lat;
  const lon = cities[city].lon;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1ced9d6ed1b5b7cbaa80ec54e981c0f`
  )
    .then((result) => result.json())
    .then((data) => {
      const celsius = (data.main.temp - 273.15).toFixed(1);
      temp.textContent = `${celsius}°C`;
      wind.textContent = data.wind.speed
      const actualTime = new Date (data.dt*1000)
      time.textContent = actualTime
    })
    .catch((err) => console.error(err));
}

select.addEventListener("change", loadWeather);

loadWeather();
const refresh = document.querySelector("button");
refresh.addEventListener("click", loadWeather);
