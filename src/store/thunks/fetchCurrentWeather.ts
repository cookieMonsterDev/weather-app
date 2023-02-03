import weatherApi from "@/axios";
import { Coordinates } from "../slices/currentCoordinatesSlice";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather =
  (payload: Coordinates) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      const URL = `data/2.5/weather?lat=${payload.latitude}&lon=${payload.longitude}`;

      const { data } = await weatherApi.get(URL);

      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(data));
      return;
    } catch (error) {
      dispatch(
        currentWeatherSlice.actions.fetchCurrentWeatherError("Bad request!")
      );
    }
  };

