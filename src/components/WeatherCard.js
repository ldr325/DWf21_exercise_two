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
        <p className="CurrentTemperature">
          <strong>{currentTemp}</strong>
        </p>
        <div className="HLTemp">
          <p className="HTemp">H:{highTemp}</p>

          <p className="LTemp">L:{lowTemp}</p>
        </div>
        <p>
          <strong>{weatherDescription}</strong>
        </p>
      </div>
      <div className="RightSide">
        <h3 className="WeatherDetails">Weather Details</h3>
        <p>
          Cloudiness: <strong>{cloudiness}</strong>
        </p>
        <p>
          Humidity: <strong>{humidity}</strong>
        </p>
        <p>
          WeatherType: <strong>{weatherType}</strong>
        </p>
        <p>
          WindSpeed: <strong>{windSpeed}</strong>
        </p>
      </div>
    </section>
  );
}

export default WeatherCard;
