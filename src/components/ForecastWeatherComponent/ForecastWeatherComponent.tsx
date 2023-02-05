import React from "react";
import { ForecastWeather } from "../../store/types/forecastWeather";
import Card from "./componets/Card";
import style from "./ForecastWeatherComponent.module.scss";

const ForecastWeatherComponent = (props: ForecastWeather) => {
  return (
    <section className={style.container}>
      <h1>Fake 5 days forcast for {props.city.name}</h1>
      <ul className={style.list}>
        {props.list.map(e => <Card key={e.dt} {...e}/>)}
      </ul>
    </section>
  );
};

const MemoizedForecastWeather = React.memo(ForecastWeatherComponent);

export default MemoizedForecastWeather;
