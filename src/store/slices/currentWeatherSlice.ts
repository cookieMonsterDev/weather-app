import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CurrentWeather } from "@/store/types/currentWeather";

export interface CurrentWeatherState {
  weather: CurrentWeather | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: CurrentWeatherState = {
  weather: null,
  isLoading: false,
  error: null,
};

export const currentWeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    resetError(state) {
      state.error = null
    },
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<CurrentWeather>) {
      state.weather = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    fetchCurrentWeatherError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchCurrentWeather,
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherError,
} = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
