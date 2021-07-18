import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.hydrate(
    <React.StrictMode>
        <App
            weatherData={window && window.weatherData}
        />
    </React.StrictMode>,
    document.getElementById('root')
)
