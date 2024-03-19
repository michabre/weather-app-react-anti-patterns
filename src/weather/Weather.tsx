import { CityWeather } from "../models/CityWeather";
import React from "react";
import "./weather.css";



const Weather = ({ cityWeather }: { cityWeather: CityWeather | undefined }) => {
  const tileColor = (temperature: string) => {
    const temp = parseInt(temperature);
    if (temp > 30) {
      return "is-danger";
    } else if (temp > 20) {
      return "is-warning";
    } else {
      return "is-info";
    }
  }

  if (cityWeather) {
    return (
      <div className="column is-one-quarter">
        <div className={"is-block city weather-container tile notification " + tileColor(cityWeather.temperature) + " has-text-centered"}>
          <h3 className="subtitle mb-2">{cityWeather.name}</h3>
          <div className="details">
            <span className="temperature title">{cityWeather.temperature}</span>
            <div className="weather mt-2">
              <span className="weather-category">{cityWeather.main}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export { Weather };
