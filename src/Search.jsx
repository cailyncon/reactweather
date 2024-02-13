import React from "react";

export default function Search() {
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
