import weatherApi from "@/utils/axiosConfig";
import axios from "axios";
import { Coordinates } from "../slices/currentCoordinatesSlice";
import { forecastWeatherSlice } from "../slices/forecastWeatherSlice";
import { AppDispatch } from "../store";

export const fetchForecastWeather =
  (payload: Coordinates) => async (dispatch: AppDispatch) => {
    try {
      dispatch(forecastWeatherSlice.actions.fetchForecastWeather());
      const URL = `data/2.5/forecast/daily?lat=${payload.lat}&lon=${payload.lon}&cnt=7`;

      const { data } = await weatherApi.get(URL);

      dispatch(forecastWeatherSlice.actions.fetchForecastWeatherSuccess(data));
      return;
    } catch (error) {
      dispatch(
        forecastWeatherSlice.actions.fetchForecastWeatherError("Bad request!")
      );
    }
  };
