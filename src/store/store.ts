import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import weatherReducer from "./slices/weather";
import coordinatesReducer from "./slices/coordinates";
import forecastWeatherReducer from "./slices/forcastWeather";
import userReducer from "./slices/user";
import { listenerMiddleware } from "./middleware";

const rootReducer = combineReducers({
  weather: weatherReducer,
  forcastWeather: forecastWeatherReducer,
  coordinates: coordinatesReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["currentWeather", "forecastWeather"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(listenerMiddleware.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
