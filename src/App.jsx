import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
  
    navigator.geolocation.getCurrentPosition(success)
  }, [])


  useEffect(() => {
    if (coords) {
      const ApiKey = `b108550c948f567eb8f443cef6e00dea`
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${ApiKey}`

      axios.get(url)
        .then(res => { setWeather(res.data)
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(1),
            farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
          }
          setTemp(obj)
        })
        .catch(err => console.log(err))
        
    }
  }, [coords])
  // console.log(weather)

  const bgStyle = {
    backgroundImage: `url(/public/imagen.jpg)` 
  }



  return (
    <div className='imagen' style={bgStyle}>
      <WeatherCard 
        weather={weather}
        temp={temp}
      />
    </div>
  )
}

export default App













// import { useEffect, useState } from 'react';
// import './App.css'
// import axios from "axios"
// import WeatherCard from './components/WeatherCard';

// function App() {
//   const [coords, setCoords] = useState()
//   const [weather, setWeather] = useState()

//   useEffect(()=>{
//     const success = (pos) => {
//       const obj = {
//         lat: pos.coords.latitude,
//         lon: pos.coords.longitude
//       }
//       setCoords(obj)
//     }
//     navigator.geolocation.getCurrentPosition(success);

//   },[])
//   useEffect(() => {
//     if(coords){
//       const apiKey = `b108550c948f567eb8f443cef6e00dea`
//       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
//       axios.get(url)
//         .then(res => setWeather(res.data))
//         .catch(err => console.log(err))

//     }

//   }, [coords])
  


//   return (
//     <div>
//       <h1>{weather?.name} , {weather?.sys.country}</h1>
//       <WeatherCard weather = {weather}></WeatherCard>
//     </div>
//   )
// }

// export default App
