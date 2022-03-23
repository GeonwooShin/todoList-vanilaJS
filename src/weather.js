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
    const minTemp = data.main[0].temp_min
    const maxTemp = data.main[0].temp_max
    const feelTemp = data.main[0].feels_like
    const currentTemp = data.main[0].temp
    const description = data.weather[0].description
    
  })
}

function getGeoError() {
  alert('Location information is not valid')
}

navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError)