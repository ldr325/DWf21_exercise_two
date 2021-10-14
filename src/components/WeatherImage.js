import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudRain,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

function WeatherImage({ weatherType }) {
  switch (weatherType) {
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} color="#C4BEC4" />;
    case "Clear":
      return <FontAwesomeIcon icon={faSun} color="#FDD168" />;
    case "Rain" || "Thunderstorms":
      return <FontAwesomeIcon icon={faCloudRain} color="#B3ADB3" />;
    case "Snow":
      return <FontAwesomeIcon icon={faSnowflake} color="#6DBFC9" />;
    default:
      return <FontAwesomeIcon icon={faCloud} />;
  }
}

export default WeatherImage;
