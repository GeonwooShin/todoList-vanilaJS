import { WEATHER_API_KEY } from "./api.js"

const city = document.querySelector('.weather__city')
const minTempSpan = document.querySelector('.minTemp')
const maxTempSpan = document.querySelector('.maxTemp')
const feelTempSpan = document.querySelector('.feelTemp')
const currentTempSpan = document.querySelector('.currentTemp')
const imgSpan = document.querySelector('.weather__img')

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
    const currentTemp = Math.round(data.main.temp)
    const description = data.weather[0].description
    console.log(pos, minTemp, maxTemp, currentTemp, description)
    city.innerText = `${pos}`
    minTempSpan.innerText = `${minTemp}°C`
    maxTempSpan.innerText = `${maxTemp}°C`
    currentTempSpan.innerText = `${currentTemp}°C`
    
    switch(description) {
      case 'clear sky':
        imgSpan.innerHTML = `<i class="fa-solid fa-sun"></i>`
        break
      case 'few clouds':
        imgSpan.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`
        break
      case 'scattered clouds':
        imgSpan.innerHTML = `<i class="fa-solid fa-cloud"></i>`
        break
      case 'broken clouds':
        imgSpan.innerHTML = `<i class="fa-solid fa-clouds"></i>`
        break
      case 'shower rain':
        imgSpan.innerHTML = `<i class="fa-solid fa-cloud-showers"></i>`
        break
      case 'rain':
        imgSpan.innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`
        break
      case 'thunderstorm':
        imgSpan.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i>`
        break
      case 'snow':
        imgSpan.innerHTML = `<i class="fa-solid fa-snowflake"></i>`
        break
      case 'mist':
        imgSpan.innerHTML = `<i class="fa-solid fa-cloud-fog"></i>`
        break
      default:
        alert('Cannot load weather!')
        break
    }
  })
}

function getGeoError() {
  alert('Location information is not valid')
}

navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError)