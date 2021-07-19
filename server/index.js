import path from 'path'
import fs from 'fs'

import express from 'express'
import morgan from 'morgan'

import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'

import getWeatherForLocation from './api/weather'

const PORT = process.env.PORT || 3000

const app = express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {

    const indexFile = path.resolve('./build/index.html')
    fs.readFile(indexFile, 'utf8', async (err, data) => {
        if (err) {
            console.error('Something went wrong:', err)
            return res.status(500).send('Oops, better luck next time!')
        }
        let weatherData = await getWeatherForLocation()
        const app = ReactDOMServer.renderToString(
            <App weatherData={weatherData} />
        )

        let result = data
            // inject ssr'd app into index.html and setup the window.render object necessary for hydration in /src/index.js
            .replace(
                '<div id="root"></div>',
                `<div id="root">
                    <script>
                        window.weatherData = <!-- weatherData block -->;
                    </script>
                    ${app}
                </div>`
            )
            // replacing render block in the above replacement here because string interpolation with json
            // sometimes malformatted json
            .replace('<!-- weatherData block -->', JSON.stringify(weatherData))
        return res.send(result)
    })

})

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('./build'))

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})
