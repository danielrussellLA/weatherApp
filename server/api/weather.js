import axios from 'axios'

const openWeatherApiKey = '96b6c9d3512111deb64cb689de0908ee'

const lat = 30.186140
const lon = -97.893120

const getWeatherForLocation = async () => {
    try {
        let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${openWeatherApiKey}`)
        return weatherData.data
    } catch (e) {
        console.log('something went wrong fetching weather data:', e)
        return e
    }
}

export default getWeatherForLocation
