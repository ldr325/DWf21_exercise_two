import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";

const API_KEY = `e8d9be46e6470dbc94fd8b7a4e9c90ef`;

// Abstract away URL Search params here to make it easier to use
// URL search Params...
// example: google.com/?horse=true&dog=false
// localhost:3000/?city=paris
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();

  let query = useQuery();

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

  useEffect(() => {
    const cityValue = query.get("city");
    setCity(cityValue);
  }, [query]);

  useEffect(() => {
    //  get weather data from openweather API
    if (city) {
      axios
        .get(URL)
        .then(function (response) {
          // successful request... set as weather data

          setWeatherData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.warn(error);
        });
    }
  }, [URL, city]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherDescription,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    // this is where we process data
    if (!weatherData) return {};
    return {
      cloudiness: weatherData.clouds.all,
      currentTemp: Math.round(weatherData.main.temp),
      highTemp: Math.round(weatherData.main.temp_max),
      humidity: weatherData.main.humidity,
      lowTemp: Math.round(weatherData.main.temp_min),
      weatherDescription: weatherData.weather[0].description,
      weatherType: weatherData.weather[0].main,
      windSpeed: Math.round(weatherData.wind.speed),
    };
  }, [weatherData]);

  return (
    <main className="App">
      <header>
        <nav className="Navigation">
          <a href="/?city=paris" className={city === "paris" && "Active"}>
            Paris
          </a>

          <a href="/?city=tokyo" className={city === "tokyo" && "Active"}>
            Tokyo
          </a>

          <a href="/?city=montauk" className={city === "montauk" && "Active"}>
            Montauk
          </a>

          <a href="/?city=seattle" className={city === "seattle" && "Active"}>
            Seattle
          </a>
        </nav>
      </header>
      <h1 className="CityName">{city}</h1>
      <WeatherCard
        cloudiness={cloudiness}
        currentTemp={currentTemp}
        highTemp={highTemp}
        humidity={humidity}
        lowTemp={lowTemp}
        weatherDescription={weatherDescription}
        weatherType={weatherType}
        windSpeed={windSpeed}
      />
    </main>
  );
}

export default Home;
