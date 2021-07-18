import { css, Global } from '@emotion/react'

function App({ weatherData }) {
    const {
        name,
        main,
        weather,
    } = weatherData
    const {
        feels_like,
        humidity,
        pressure,
        temp,
        temp_max,
        temp_min,
    } = main
    return (
        <div className="App" css={css`
            font-family: Inter, sans-serif;
            background: #577da3;
            color: #fff;
        `}>
            <Global styles={css`
                html, body {
                    margin: 0;
                    padding: 0;
                }
            `} />
            <div className="main" css={css`
                height: 100vh;
                max-width: 900px;
                margin: auto;
                padding: 1rem;
                h2 {
                    margin: 0;
                }
            `}>
                <section className="hero" css={css`
                    padding: 1rem 0;
                    text-align: center;
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
                        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
                        <h1>{Math.ceil(temp)} F</h1>
                    </div>
                    <p>{Math.ceil(temp_max)} H {Math.ceil(temp_min)} L</p>
                </section>
                <section className="body">
                    <p>conditions: {weather[0].main}</p>
                    <p>feels like: {Math.ceil(feels_like)} F</p>
                    <p>humidity: {humidity}%</p>
                </section>
            </div>
        </div>
    )
}

export default App
