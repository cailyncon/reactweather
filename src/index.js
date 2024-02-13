import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import FormatDate from "./FormatDate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div class="weather-app">
      <header>
        <Search />
      </header>
      <main>
        <h1 class="current-city" id="current-city">
          Paris
        </h1>
        <FormatDate />
        <CurrentWeather />
        <Forecast />
      </main>
      <footer>
        <p>
          This project was coded by
          <a href="https://github.com/cailyncon" target="_blank">
            Cailyn Connelly
          </a>
          and is
          <a
            href="https://github.com/cailyncon/connelly-weather"
            target="_blank"
          >
            on GitHub
          </a>
          and
          <a href="https://connelly-weather.netlify.app" target="_blank">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
