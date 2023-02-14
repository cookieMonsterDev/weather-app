import weatherApi from "@/utils/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Geoposition } from "../coordinates/coordinates.types";
import { CurrentWeather } from "./weather.types";


export const fetchWeather = createAsyncThunk<
  CurrentWeather,
  Geoposition,
  { rejectValue: string }
>("weather/fetchWeather", async (position, { rejectWithValue }) => {
  try {
    const URL = `data/2.5/weather?lat=${position.lat}&lon=${position.lon}`;

    const { data } = await weatherApi.get(URL);

    return data as CurrentWeather;
  } catch (error) {
    return rejectWithValue(
      "Coordinates not possible... Maybe you are on the moon!"
    );
  }
});

export const fetchWeatherCity = createAsyncThunk<
  CurrentWeather,
  string,
  { rejectValue: string }
>("weather/fetchWeatherCity", async (city, { rejectWithValue }) => {
  try {
    const URL = `data/2.5/weather?q=${city}`;

    const { data } = await weatherApi.get(URL);

    return data as CurrentWeather;
  } catch (error) {
    return rejectWithValue("This city does not exist! Try another one.");
  }
});