import { CityWeather } from "../models/CityWeather";
import { tileTemperatureColor } from "./tileTemperatureColor";
import "./weather.css";



const Weather = ({ cityWeather, updateCities }: { cityWeather: CityWeather | undefined, updateCities:any }) => {

  const removeWeather = (cityWeather:CityWeather) => {
    const items = JSON.parse(localStorage.getItem("favoriteItems") || "[]");
    const filteredItems = items.filter((item: any) => item.name !== cityWeather?.name);
    localStorage.setItem(
      "favoriteItems",
      JSON.stringify(filteredItems, null, 2)
    );
    updateCities(true)
  }

  if (cityWeather) {
    return (
      <div className="column is-one-quarter">
        <div className={"is-block city weather-container tile notification " + tileTemperatureColor(cityWeather.temperature) + " has-text-centered"}>
          <button className="remove" onClick={() => removeWeather(cityWeather)}>Remove</button>
          <h3 className="name subtitle mb-2">{cityWeather.name}</h3>
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
