import React, { useState } from "react";
import Search from "./Search";

export default function CurrentWeather() {
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function displayWeather(event) {
    setTemperature(Math.round(response.data.temperature.current));
    setDescription(response.data.condition.description);
    setHumidity(response.data.temperature.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      <img
        class="current-temperature-icon"
        src="${response.data.condition.icon_url}"
      />
    );
  }

  return (
    <div class="current-weather">
      <div class="current-temperature">
        <div class="icon-img" id="icon">
          {icon}
        </div>
        <span class="current-temperature-value">{temperature}</span>
        <span class="current-temperature-unit">°F </span>
      </div>
      <div class="current-details">
        {description}
        <div>Humidity: {humidity}%</div>
        <div>Wind: {wind}mph</div>
      </div>
    </div>
  );
}
