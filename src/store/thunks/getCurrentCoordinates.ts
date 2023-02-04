import {
  Coordinates,
  currentCoordinatesSlice,
} from "../slices/currentCoordinatesSlice";
import { AppDispatch } from "../store";

export const getCurrentCoordinates = () => (dispatch: AppDispatch) => {
  const successCallback = (position: GeolocationPosition) => {
    const newPosition = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };

    dispatch(
      currentCoordinatesSlice.actions.setCurrentCoordinatesSuccess(newPosition)
    );
  };

  const errorCallback = (error: GeolocationPositionError) => {
    dispatch(
      currentCoordinatesSlice.actions.setCurrentCoordinatesError(error.message)
    );
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};
