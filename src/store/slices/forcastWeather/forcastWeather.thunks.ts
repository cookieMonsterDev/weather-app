import weatherApi from "@/utils/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Geoposition } from "../coordinates/coordinates.types";
import { ForecastWeather } from "./forcastWeather.types";

export const fetchforcastWeather = createAsyncThunk<
  ForecastWeather,
  Geoposition,
  { rejectValue: string }
>(
  "forcastWeather/fetchforcastWeather",
  async (position, { rejectWithValue }) => {
    try {
      const URL = `data/2.5/forecast/daily?lat=${position.lat}&lon=${position.lon}&cnt=7`;

      const { data } = await weatherApi.get(URL);

      return data as ForecastWeather;
    } catch (error) {
      return rejectWithValue(
        "Coordinates not possible... Maybe you are on the moon!"
      );
    }
  }
);

export const fetchforcastWeatherCity = createAsyncThunk<
  ForecastWeather,
  string,
  { rejectValue: string }
>(
  "forcastWeather/fetchforcastWeatherCity",
  async (city, { rejectWithValue }) => {
    try {
      const URL = `data/2.5/forecast/daily?q=${city}&cnt=7`;

      const { data } = await weatherApi.get(URL);

      return data as ForecastWeather;
    } catch (error) {
      return rejectWithValue("This city does not exist! Try another one.");
    }
  }
);