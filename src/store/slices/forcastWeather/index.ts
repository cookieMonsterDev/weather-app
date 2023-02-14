import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ForcastWeatherState, ForecastWeather } from "./forcastWeather.types";
import {
  fetchforcastWeather,
  fetchforcastWeatherCity,
} from "./forcastWeather.thunks";

const initialState: ForcastWeatherState = {
  forcastWeather: null,
  isLoadingForcastWeather: false,
  forcastWeatherError: null,
};

export const forcastWeatherSlice = createSlice({
  name: "forcastWeather",
  initialState,
  reducers: {
    setforcastWeather(
      state,
      { payload }: PayloadAction<ForecastWeather | null>
    ) {
      state.forcastWeather = payload;
    },
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoadingForcastWeather = payload;
    },
    setError(state, { payload }: PayloadAction<string | null>) {
      state.forcastWeatherError = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchforcastWeather.pending, (state) => {
      state.isLoadingForcastWeather = true;
      state.forcastWeatherError = null;
    });
    builder.addCase(fetchforcastWeather.fulfilled, (state, { payload }) => {
      state.forcastWeather = payload;
      state.isLoadingForcastWeather = false;
    });
    builder.addCase(fetchforcastWeather.rejected, (state, { payload }) => {
      state.forcastWeather = null;
      if (payload) state.forcastWeatherError = payload;
      state.isLoadingForcastWeather = false;
    });
    builder.addCase(fetchforcastWeatherCity.pending, (state) => {
      state.isLoadingForcastWeather = true;
      state.forcastWeatherError = null;
    });
    builder.addCase(fetchforcastWeatherCity.fulfilled, (state, { payload }) => {
      state.forcastWeather = payload;
      state.isLoadingForcastWeather = false;
    });
    builder.addCase(fetchforcastWeatherCity.rejected, (state, { payload }) => {
      state.forcastWeather = null;
      if (payload) state.forcastWeatherError = payload;
      state.isLoadingForcastWeather = false;
    });
  },
});

export const { setforcastWeather, setLoading, setError } =
  forcastWeatherSlice.actions;

export default forcastWeatherSlice.reducer;
