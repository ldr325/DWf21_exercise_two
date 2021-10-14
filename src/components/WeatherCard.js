import React from "react";
import WeatherImage from "./WeatherImage";

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  weatherDescription,
  weatherType,
  windSpeed,
}) {
  return (
    <section
      className="WeatherCard"
      style={{
        backgroundColor: `rgba(150,150,150, ${cloudiness / 100})`,
      }}
    >
      <div className="CurrentTempWrapper">
        <div className="WeatherImageWrapper">
          <WeatherImage weatherType={weatherType} />
        </div>
        <p className="WeatherDescriptionLine">
          <strong>{weatherDescription}</strong>
        </p>
        <p className="CurrentTemperature">
          <strong>{currentTemp}°</strong>
        </p>
        <div className="HLTemp">
          <p className="HTemp">H: {highTemp}°</p>
          <p className="LTemp">L: {lowTemp}°</p>
        </div>
      </div>
      <div className="WeatherDetailWrapper">
        <h3 className="WeatherDetails">Weather Details</h3>
        <p className="Cloudline">
          Cloudiness: <strong>{cloudiness}%</strong>
        </p>
        <p className="Humidityline">
          Humidity: <strong>{humidity}%</strong>
        </p>
        <p className="Weatherline">
          Weather: <strong>{weatherType}</strong>
        </p>
        <p className="Windline">
          Wind: <strong>{windSpeed}mph</strong>
        </p>
      </div>
    </section>
  );
}

export default WeatherCard;
