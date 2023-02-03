import {
  Coordinates,
  currentCoordinatesSlice,
} from "../slices/currentCoordinatesSlice";
import { AppDispatch } from "../store";

export const getCurrentCoordinates = () => (dispatch: AppDispatch) => {
  const position = localStorage.getItem("currentPosition");

  if (position) {
    const newPosition: Coordinates = JSON.parse(position);
    dispatch(
      currentCoordinatesSlice.actions.setCurrentCoordinatesSuccess(newPosition)
    );
    return;
  }

  const successCallback = (position: GeolocationPosition) => {
    const newPosition = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };

    dispatch(
      currentCoordinatesSlice.actions.setCurrentCoordinatesSuccess(newPosition)
    );

    localStorage.setItem("currentPosition", JSON.stringify(newPosition));
  };

  const errorCallback = (error: GeolocationPositionError) => {
    dispatch(
      currentCoordinatesSlice.actions.setCurrentCoordinatesError(error.message)
    );
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};
