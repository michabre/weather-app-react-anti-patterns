import { Weather } from "./Weather";
import { CityWeather } from "../models/CityWeather";

const WeatherList = ({ cities, updateCities }: { cities: CityWeather[], updateCities:any }) => {
  return (
    <div data-testid="favorite-cities" className="favorite-cities mt-5">
      <div className="columns is-flex is-flex-wrap-wrap">
      {cities.map((city) => (
        <Weather key={city.name} cityWeather={city} updateCities={updateCities} />
      ))}
      </div>
    </div>
  );
};

export { WeatherList };
