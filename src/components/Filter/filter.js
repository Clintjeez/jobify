import React from "react";
import "./filter.css";
import searchIcon from "../../assets/icons/icon-search-primary.svg";
import locationIcon from "../../assets/icons/icon-location.svg";
import filterIcon from "../../assets/icons/icon-filter.svg";

export default function filter() {
  return (
    <div className="container filter-wrapper">
      <form>
        <span className="input-group">
          <input
            type="text"
            placeholder="Filter by title, companies, expertise..."
            aria-label="search job by title"
            className="input--title"
          />
          <img src={searchIcon} alt="search icon" className="search--icon" />
        </span>

        <span className="input-group">
          <input
            type="text"
            placeholder="Filter by location..."
            aria-label="search job by location"
            className="input--location"
          />
          <img
            src={locationIcon}
            alt="location pin icon"
            className="location--pin"
          />
        </span>

        <span className="input-group">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            className="checkbox"
          />
          <label for="checkbox" className="checkbox-label">
            Full time
          </label>
          <img src={filterIcon} alt="filter icon" className="filter" />
        </span>

        <button className="search">search</button>
      </form>
    </div>
  );
}
