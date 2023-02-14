import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WeatherState, CurrentWeather } from "./weather.types";
import { Geoposition } from "../coordinates/coordinates.types";
import weatherApi from "@/utils/axiosConfig";

const initialState: WeatherState = {
  weather: null,
  isLoadingWeather: false,
  weatherError: null,
};

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

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather(state, { payload }: PayloadAction<CurrentWeather | null>) {
      state.weather = payload;
    },
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoadingWeather = payload;
    },
    setError(state, { payload }: PayloadAction<string | null>) {
      state.weatherError = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoadingWeather = true;
      state.weatherError = null;
    });
    builder.addCase(fetchWeather.fulfilled, (state, { payload }) => {
      state.weather = payload;
      state.isLoadingWeather = false;
    });
    builder.addCase(fetchWeather.rejected, (state, { payload }) => {
      state.weather = null;
      if (payload) state.weatherError = payload;
      state.isLoadingWeather = false;
    });
    builder.addCase(fetchWeatherCity.pending, (state) => {
      state.isLoadingWeather = true;
      state.weatherError = null;
    });
    builder.addCase(fetchWeatherCity.fulfilled, (state, { payload }) => {
      state.weather = payload;
      state.isLoadingWeather = false;
    });
    builder.addCase(fetchWeatherCity.rejected, (state, { payload }) => {
      state.weather = null;
      if (payload) state.weatherError = payload;
      state.isLoadingWeather = false;
    });
  },
});

export const { setWeather, setLoading, setError } = weatherSlice.actions;

export default weatherSlice.reducer;
