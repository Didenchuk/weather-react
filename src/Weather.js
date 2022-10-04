import React from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
    
    let weatherData = {
      city: "Tokyo",
      date: "Tuesday, 10:40",
      description: "Cloudy",
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_heavy.png",
      humidity: "80",
      wind: "4",
      temperature: "19"
    };
    return (
      <div className="weather-app-wraper">
        <div className="Weather">
          <form className="mb-3">
            <div className="row">
              <div className="col-9">

                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  autocomplete="off"
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
          <div className=" overview">
            <h1>{weatherData.city}</h1>
            <ul>
              <li> Last updated: {weatherData.date}</li>
              <li> {weatherData.description}</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  className="float-start"
                />
                <div className="float-start">
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">
                    <a href="#">°C</a> | <a href="#">°F</a>
                  </span>
                </div>
              </div>
            </div>
            <div className=" col-6">
              <ul>
                <li>Humidity: {weatherData.humidity} %</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </div>
      </div>
    );
  }