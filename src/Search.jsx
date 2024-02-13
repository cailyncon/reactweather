import React from "react";

export default function Search() {
  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value;
    let city = searchInputElement.value;

    let apiKey = "b84b065do096ab8b5a39fb9t38e99a64";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayTemperature);
  }
  return (
    <form id="search-form">
      <input
        type="search"
        placeholder="Enter a city.."
        required
        class="search-input"
        id="search-input"
      />
      <input type="submit" value="Search" class="search-button" />
    </form>
  );
}
