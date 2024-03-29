import { useEffect, useContext, useState } from 'react'
import { ThemeContext } from './theme-provider/ThemeContext'
import Header from './layout/header/header'
import { SearchResultItemType } from './models/SearchResultItemType'
import { SearchCityInput } from './search/SearchCityInput'
import { WeatherList } from './weather/WeatherList'
import { fetchCityWeatherData, useFetchCityWeather } from './weather/useFetchCityWeather'

import 'bulma/css/bulma.min.css'
import './theme/theme.scss'

function App() {
  const { theme } = useContext(ThemeContext);
  const { cities, setCities, fetchCityWeather } = useFetchCityWeather();
  const [cityRemoved, setCityRemoved] = useState<boolean>(false);

  
  function hydration() {
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
  }

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

  // Hydrate the list of cities from local storage
  useEffect(() => {
    hydration()
  }, [])

  // Update the list of cities when a city is removed
  useEffect(() => {
    hydration()
    setCityRemoved(false)
  }, [cityRemoved])

  return (
    <div className={"app theme " + theme} data-theme={theme}>
      <div className="container px-5">
        <Header />
        <SearchCityInput onItemClick={onItemClick} />
        <WeatherList cities={cities} updateCities={setCityRemoved} />
      </div>
    </div>
  );
}

export default App;
