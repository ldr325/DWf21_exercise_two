import React from "react";

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
    <section className="WeatherCard">
      <div className="CurrentTempWrapper">
        <h2 className="Subheader">Current Temperature</h2>
        <p>
          <strong>{currentTemp}</strong>
        </p>
      </div>
      <p>
        Cloudiness: <strong>{cloudiness}</strong>
      </p>
      <p>
        HighTemp: <strong>{highTemp}</strong>
      </p>
      <p>
        Humidity: <strong>{humidity}</strong>
      </p>
      <p>
        LowTemp: <strong>{lowTemp}</strong>
      </p>
      <p>
        Description: <strong>{weatherDescription}</strong>
      </p>
      <p>
        WeatherType: <strong>{weatherType}</strong>
      </p>
      <p>
        WindSpeed: <strong>{windSpeed}</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
