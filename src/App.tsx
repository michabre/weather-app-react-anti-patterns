import { useEffect } from 'react';
import { SearchResultItemType } from './models/SearchResultItemType';
import { SearchCityInput } from './search/SearchCityInput';
import { WeatherList } from './weather/WeatherList';
import { fetchCityWeatherData, useFetchCityWeather } from './weather/useFetchCityWeather';

import 'bulma/css/bulma.min.css';

function App() {
  const { cities, setCities, fetchCityWeather } = useFetchCityWeather();

  const onItemClick = (item: SearchResultItemType) => {
    setTimeout(() => {
      const items = JSON.parse(localStorage.getItem("favoriteItems") || "[]");

      const newItem = {
        name: item.name,
        lon: item.lon,
        lat: item.lat,
      };

      localStorage.setItem(
        "favoriteItems",
        JSON.stringify([newItem, ...items], null, 2)
      );
    }, 0);

    return fetchCityWeather(item);
  };

  useEffect(() => {
    const hydrate = async () => {
      const items = JSON.parse(localStorage.getItem("favoriteItems") || "[]");

      const promises = items.map((item: any) => {
        const searchResultItem = new SearchResultItemType(item);
        return fetchCityWeatherData(searchResultItem);
      });

      const cities = await Promise.all(promises);
      setCities(cities);
    };

    hydrate();
  }, []);

  return (
    <div className="app">
      <h1>Weather Application</h1>

      <SearchCityInput onItemClick={onItemClick} />

      <WeatherList cities={cities} />
    </div>
  );
}

export default App;
