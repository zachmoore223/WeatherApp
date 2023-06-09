import React from "react";
import sunny from "../icons/sunny.png";
import partlyCloudy from "../icons/partlyCloudy.png";
import cloudy from "../icons/cloudy.png";
export default function WeatherIcon({ cloudCoverage }) {
  //SUNNY
  if (cloudCoverage <= 20) {
    return <img src={sunny} alt="Sunny" width="50" height="50" />;
  }
  //PARTLY CLOUDY
  if (cloudCoverage > 20 && cloudCoverage < 50) {
    return (
      <img src={partlyCloudy} alt="Partly Cloudy" width="50" height="50" />
    );
  }
  //CLOUDY
  if (cloudCoverage >= 50) {
    return <img src={cloudy} alt="Cloudy" width="50" height="50" />;
  }
}