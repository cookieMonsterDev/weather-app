import { configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from "./slices/currentWeatherSlice";
import currentCoordinatesReducer from "./slices/currentCoordinatesSlice";
import forecastWeatherSlice  from "./slices/forecastWeatherSlice";
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    forecastWeather: forecastWeatherSlice,
    currentCoordinates: currentCoordinatesReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
