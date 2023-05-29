const search_box = document.getElementById("search");
const button_search = document.getElementById("button-search");
const showCity = document.querySelector("#city");
const city_Status = document.querySelector("#status");

async function weather(city) {
  const api_key = "b6013d13ce82d1552d49e87178a1f2f2";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=matrics`;
  const weather_data = await fetch(url).then((response) => response.json());
  console.log(weather_data);
}

button_search.addEventListener('click', (e) => {
  e.preventDefault();
  let city = search_box.value;
  weather(city);
});