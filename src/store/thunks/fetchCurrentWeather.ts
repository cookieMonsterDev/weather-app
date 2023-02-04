import weatherApi from "@/axios";
import { Coordinates } from "../slices/currentCoordinatesSlice";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather =
  (payload: Coordinates) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      const URL = `data/2.5/weather?lat=${payload.lat}&lon=${payload.lon}`;

      const { data } = await weatherApi.get(URL);

      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(data));
      dispatch(currentWeatherSlice.actions.resetError())
      return;
    } catch (error) {
      dispatch(
        currentWeatherSlice.actions.fetchCurrentWeatherError("Bad request!")
      );
    }
  };

