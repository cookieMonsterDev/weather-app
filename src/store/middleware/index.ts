import {
  addListener,
  createListenerMiddleware,
  ListenerEffectAPI,
  TypedAddListener,
  TypedStartListening,
} from "@reduxjs/toolkit";
import { fetchWeather } from "../slices/weather/weather.thunks";
import { getCoordinates } from "../slices/coordinates";
import { AppDispatch, RootState } from "../store";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: getCoordinates.fulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.dispatch(fetchWeather(action.payload));
    // optionaly can be added dispatch for forcast
  },
});

export type AppListenerEffectAPI = ListenerEffectAPI<RootState, AppDispatch>;

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export type AppAddListener = TypedAddListener<RootState, AppDispatch>;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;
export const addAppListener = addListener as AppAddListener;
