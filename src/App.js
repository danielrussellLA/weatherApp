import { css, Global } from '@emotion/react'

function App({ weatherData = {} }) {
    const {
        name,
        main = {
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0,
        },
        weather = [{}],
        wind = {},
        sys = {},
        rain = null
    } = weatherData
    const {
        feels_like,
        humidity,
        pressure,
        temp,
        temp_max,
        temp_min,
    } = main

    const [weatherMetaData] = weather

    const getRain = () => {
        let keys = Object.keys(rain)
        if (keys.length) {
            return keys.map(key => {
                return (
                    <li>{key}: {rain[key]}in</li>
                )
            })
        }
        return []
    }

    return (
        <div className="App" css={css`
            font-family: Inter, sans-serif;
            color: #fff;
            background: #242323;
        `}>
            <Global styles={css`
                html, body {
                    margin: 0;
                    padding: 0;
                }
            `} />
            <div className="main" css={css`
                height: 100vh;
                padding: 1rem;
            `}>
                <div className="inner" css={css`
                    background: #577da3;
                    max-width: 900px;
                    margin: auto;
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: 4px;
                    border: 1px solid #fff;
                    @media (max-width: 650px) {
                        flex-direction: column;
                    }
                `}>
                    <section className="hero" css={css`
                        padding: 1rem 0;
                        h2 {
                            margin: 0;
                        }
                        flex: 1;
                        border-right: 1px solid #fff;
                        margin-right: 2rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: center;
                        @media (max-width: 650px) {
                            border-right: none;
                            border-bottom: 1px solid #fff;
                            margin-right: 0;
                            margin-bottom: 2rem;
                            width: 100%;
                        }
                    `}>
                        <h2>{name}</h2>
                        <div css={css`
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img {
                                height: 100px;
                                width: 100px;
                            }
                        `}>
                            <img src={`http://openweathermap.org/img/wn/${weatherMetaData.icon}@2x.png`} />
                            <h1>{Math.ceil(temp)} F</h1>
                        </div>
                        <p>{Math.ceil(temp_max)} H {Math.ceil(temp_min)} L</p>
                    </section>
                    <section className="body" css={css`
                        flex: 1;
                    `}>
                        <p>conditions: {weatherMetaData.main} - {weatherMetaData.description}</p>
                        {
                            rain &&
                            <div>
                                <p>rain:</p>
                                <ul>{getRain()}</ul>
                            </div>
                        }
                        <p>feels like: {Math.ceil(feels_like)} F</p>
                        <p>humidity: {humidity}%</p>
                        <p>pressure: {pressure} hPa</p>
                        <div>
                            <p>wind:</p>
                            <ul>
                                <li>deg: {wind.deg}</li>
                                <li>gust: {wind.gust} mph</li>
                                <li>speed: {wind.speed} mph</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default App
