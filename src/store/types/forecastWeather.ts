import { Coord, Weather } from "./currentWeather";

export interface ForecastWeather {
  city: City;
  cod: number;
  message: number;
  cnt: number;
  list: List[];
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: number;
  population: number;
  timezone: number;
}

export interface List {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  weather: Weather[];
  speed: number;
  deg: number;
  gust: number;
  clouds: number;
  pop: number;
  rain: number;
}

interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
