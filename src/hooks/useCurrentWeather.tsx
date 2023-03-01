import axios from 'axios';
import { SuggestedCitiesType } from '@/types';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.openweathermap.org';
const API_KEY = import.meta.env.VITE_WEATHER_API;

const useCurrentWeather = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestedCities, setSuggestedCities] = useState<SuggestedCitiesType[]>(
    []
  );
  const [selectedCity, setSelectedCity] = useState<SuggestedCitiesType | null>({
    lat: 36.63,
    lon: 52.27,
    name: 'Amol',
    country: 'IR',
  });
  const [currentWeather, setCurrentWeather] = useState<null>(null);

  const getSuggestedCities = async (value: string) => {
    const suggestedCitiesList = await axios
      .get(
        `${BASE_URL}/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${API_KEY}`
      )
      .then(res => res.data);
    setSuggestedCities(suggestedCitiesList);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value);
    if (value.length > 2) getSuggestedCities(value);
  };

  const onSuggestionSelect = (suggestedCity: SuggestedCitiesType) => {
    setSelectedCity(suggestedCity);
  };

  const getCurrentWeather = async (city: SuggestedCitiesType) => {
    const currentWeather = await axios
      .get(
        `${BASE_URL}/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}`
      )
      .then(res => res.data);

    setCurrentWeather(currentWeather);
  };

  const onSubmit = () => {
    if (!selectedCity) return;
    getCurrentWeather(selectedCity);
  };

  useEffect(() => {
    if (selectedCity) {
      setSearchTerm(`${selectedCity.name}, ${selectedCity.country}`);
      setSuggestedCities([]);
    }
  }, [selectedCity]);

  return {
    searchTerm,
    suggestedCities,
    currentWeather,
    onSubmit,
    onInputChange,
    onSuggestionSelect,
  };
};

export default useCurrentWeather;
