import { Weather } from "./Weather";
import { CityWeather } from "../models/CityWeather";

const WeatherList = ({ cities }: { cities: CityWeather[] }) => {
  return (
    <div data-testid="favorite-cities" className="favorite-cities mt-5">
      <div className="columns is-flex is-flex-wrap-wrap">
      {cities.map((city) => (
        <Weather key={city.name} cityWeather={city} />
      ))}
      </div>
    </div>
  );
};

export { WeatherList };
