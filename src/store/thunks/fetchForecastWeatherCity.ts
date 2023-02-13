import weatherApi from "@/utils/axiosConfig";
import { forecastWeatherSlice } from "../slices/forecastWeatherSlice";
import { AppDispatch } from "../store";

export const fetchForecastWeatherCity =
  (payload: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(forecastWeatherSlice.actions.fetchForecastWeather());
      const URL = `data/2.5/forecast/daily?q=${payload}&cnt=7`;

      const { data } = await weatherApi.get(URL);

      dispatch(forecastWeatherSlice.actions.fetchForecastWeatherSuccess(data));
      return;
    } catch (error) {
      dispatch(
        forecastWeatherSlice.actions.fetchForecastWeatherError("Bad request!")
      );
    }
  };
