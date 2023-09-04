import { useState } from "react"

const WeatherCard = ({ weather, temp }) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const handleChangeTemp = () => setIsCelsius(!isCelsius)

  return (

    <article className="contenedor_general">
      <div className="contenedor">
        <h1>Weather App</h1>
        <h2>{weather?.name}, {weather?.sys.country}</h2>
        <div className="contenedor1">
          <div className="contenedor2">
            <img className="nube" src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
          </div>
          <section className="contenedor2">
            <h3>"{weather?.weather[0].description}"</h3>
            <ul>
              <li><span>Wind Speed</span><span>{weather?.wind.speed} m/s</span></li>
              <li><span>Clouds</span><span>{weather?.clouds.all} %</span></li>
              <li><span>Pressure</span><span>{weather?.main.pressure} hPa</span></li>
            </ul>
          </section>
        </div>
        <h2>{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h2>
        <button className="boton" onClick={handleChangeTemp}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
      </div>

    </article>
  )
}

export default WeatherCard

// https://openweathermap.org/img/wn/10d@2x.png