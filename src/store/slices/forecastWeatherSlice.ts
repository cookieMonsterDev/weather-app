import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CurrentWeather } from "@/store/types/currentWeather";

export interface forecastWeatherState {
  forcast: CurrentWeather | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: forecastWeatherState = {
  forcast: null,
  isLoading: false,
  error: null,
};

export const forecastWeatherSlice = createSlice({
  name: "forecastweather",
  initialState,
  reducers: {
    fetchForecastWeather(state) {
      state.isLoading = true;
    },
    fetchForecastWeatherSuccess(state, action: PayloadAction<CurrentWeather>) {
      state.forcast = action.payload;
      state.isLoading = false;
    },
    fetchForecastWeatherError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchForecastWeather,
  fetchForecastWeatherSuccess,
  fetchForecastWeatherError,
} = forecastWeatherSlice.actions;

export default forecastWeatherSlice.reducer;
