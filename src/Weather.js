import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
 let [city, setCity] = useState("");
 let [weather, setWeather] = useState("");
 let [loaded, setLoaded] = useState ("false");

 function showWeather(responce){
    setWeather({
        temperature: Math.round(responce.data.main.temp),
        wind: responce.data.wind.speed,
        humidity: responce.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${responce.data.weather[0].icon}@2x.png`,
        description: responce.data.weather[0].description,
        // time: new DateUtil(new Date(response.data.dt * 1000)).dayTime
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
    <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoComplete="off"
                onChange={changeCity}

              />
            </div>
            <div className=" col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

  )


if (loaded) {

  return (
    <div className="weather-app-wraper">
      <div className="Weather">
        <div>
            {form}
        </div>
        
        <div className=" overview">
          <h1>{city}</h1>
          <ul>
            {/* <li> Last updated: {weather.time}</li> */}
            <li> {weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weather.icon}
                alt={weather.description}
                className="float-start"
              />
              <div className="float-start">
                <strong>{weather.temperature}</strong>
                <span className="units">
                  <a href="#">°C</a> 
                </span>
              </div>
            </div>
          </div>
          <div className=" col-6">
            <ul>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )}  else {
    return form;
  };
}
