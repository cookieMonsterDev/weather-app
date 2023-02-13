import weatherApi from "@/utils/axiosConfig";
import { currentWeatherSlice } from "../slices/currentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeatherCity =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
      const URL = `data/2.5/weather?q=${payload}`;

      const { data } = await weatherApi.get(URL);

      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(data));
      return;
    } catch (error) {
      dispatch(
        currentWeatherSlice.actions.fetchCurrentWeatherError("Bad request!")
      );
    }
  };
