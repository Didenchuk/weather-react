import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";



    
    export default function Weather() {
        let [city, setCity] = useState("");
        let [loaded, setLoaded] = useState(false);
        let [weather, setWeather] = useState("");
      
        function showWeather(responce) {
          setLoaded(true);
          setWeather({
            temperature: responce.data.main.temp,
            wind: responce.data.wind.speed,
            humidity: responce.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`,
            description: responce.data.weather[0].description
          });
        }
      
        function handleSubmit(event) {
          event.preventDefault();
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d50daaabbd98c5b47ef6ff59824a0d1e&units=metric`;
          axios.get(url).then(showWeather);
        }
      
        function changeCity(event) {
          setCity(event.target.value);
        }
        let form = (
          <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Type a city" onChange={changeCity} />
            <button type="submit"> Search </button>
          </form>
        );
      
        if (loaded) {
          return (
            <div>
              {form}
              <ul>
                <li>Temperature: {Math.round(weather.temperature)}°C</li>
                <li>Descrition: {weather.description}</li>
                <li>Humidity: {weather.humidity} %</li>
                <li>Wind: {weather.wind} km/h</li>
                <li>
                  {" "}
                  <img src={weather.icon} alt={weather.description} />
                </li>
              </ul>
            </div>
          );
        } else {
          return form;
        }
      }
      