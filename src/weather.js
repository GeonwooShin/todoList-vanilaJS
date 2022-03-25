const city = document.querySelector('.weather__city')
const minTempSpan = document.querySelector('.minTemp')
const maxTempSpan = document.querySelector('.maxTemp')
const feelTempSpan = document.querySelector('.feelTemp')
const currentTempSpan = document.querySelector('.currentTemp')
const descriptionSpan = document.querySelector('.weather__description')

const WEATHER_API_KEY = '591d0ddd3cb032a6e7bef7869984f068'

function getGeoSuccess(loc) {
  const lat = loc.coords.latitude
  const lng = loc.coords.longitude
  console.log(loc)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    const pos = data.name
    const minTemp = Math.round(data.main.temp_min)
    const maxTemp = Math.round(data.main.temp_max)
    const feelTemp = Math.round(data.main.feels_like)
    const currentTemp = Math.round(data.main.temp)
    const description = data.weather[0].description
    console.log(pos, minTemp, maxTemp, feelTemp, currentTemp, description)
    city.innerText = `${pos}`
    minTempSpan.innerText = `${minTemp}°C`
    maxTempSpan.innerText = `${maxTemp}°C`
    feelTempSpan.innerText = `${feelTemp}°C`
    currentTempSpan.innerText = `${currentTemp}°C`
    descriptionSpan.innerText = `${description}`
  })
}

function getGeoError() {
  alert('Location information is not valid')
}

navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError)