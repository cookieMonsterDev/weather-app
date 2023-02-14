import React from "react";
import { Container, List } from "./ForecastWeatherComponent.styled";
import { ForecastWeather } from "../../store/slices/forcastWeather/forcastWeather.types";
import Card from "./Card/Card";

const ForecastWeatherComponent = (props: ForecastWeather) => {
  return (
    <Container>
      <h1>Fake 5 days forcast for {props.city.name}</h1>
      <List>
        {props.list.map(e => <Card key={e.dt} {...e}/>)}
      </List>
    </Container>
  );
};

const MemoizedForecastWeather = React.memo(ForecastWeatherComponent);

export default MemoizedForecastWeather;
