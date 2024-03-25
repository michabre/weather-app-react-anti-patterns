import { useState } from "react";
import { CityWeather } from "../models/CityWeather";
import { SearchResultItemType } from "../models/SearchResultItemType";

const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_KEY;

export const fetchCityWeatherData = async (item: SearchResultItemType) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${item.lat}&lon=${item.lon}&appid=${API_KEY}&units=metric`
  );
  const json = await response.json();
  json.name = item.name;
  return new CityWeather(json);
};

const useFetchCityWeather = () => {
  const [cities, setCities] = useState<CityWeather[]>([]);

  const fetchCityWeather = async (item: SearchResultItemType) => {
    const cityWeather = await fetchCityWeatherData(item);
    setCities([cityWeather, ...cities]);
  };

  return {
    cities,
    setCities,
    fetchCityWeather,
  };
};

export { useFetchCityWeather };
