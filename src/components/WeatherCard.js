import React from "react";

function WeatherCard({
  cloudiness,
  currentTemp,
  highTemp,
  humidity,
  lowTemp,
  weatherType,
  windSpeed,
}) {
  return (
    <section className="WeatherCard">
      <p>
        cloudiness: <strong>{cloudiness}</strong>
      </p>
      <p>
        currentTemp: <strong>{currentTemp}</strong>
      </p>
      <p>
        highTemp: <strong>{highTemp}</strong>
      </p>
      <p>
        humidity: <strong>{humidity}</strong>
      </p>
      <p>
        lowTemp: <strong>{lowTemp}</strong>
      </p>
      <p>
        WeatherType: <strong>{weatherType}</strong>
      </p>
      <p>
        windSpeed: <strong>{windSpeed}</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
