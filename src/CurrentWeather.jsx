import React from "react";

export default function CurrentWeather() {
  return (
    <div>
      <h1 class="current-city" id="current-city">
        Paris
      </h1>
      <div class="date-time">
        <span id="current-date"></span>
      </div>
      <div class="current-weather">
        <div class="current-temperature">
          <div class="icon-img" id="icon">
            <img class="current-temperature-icon" src="" />
          </div>
          <span class="current-temperature-value" id="current-temp">
            24
          </span>
          <span class="current-temperature-unit">°F </span>
        </div>
        <div class="current-details">
          <span id="description">moderate rain </span>
          <div>
            Humidity: <span id="humidity">87</span>%
          </div>
          <div>
            Wind: <span id="wind-speed">7.2</span>mph
          </div>
        </div>
      </div>
    </div>
  );
}
