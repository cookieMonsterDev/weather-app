import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ForcastWeatherState, ForecastWeather } from "./forcastWeather.types";
import weatherApi from "@/utils/axiosConfig";
import { Geoposition } from "../coordinates/coordinates.types";

const initialState: ForcastWeatherState = {
  forcastWeather: null,
  isLoadingForcastWeather: false,
  forcastWeatherError: null,
};

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
