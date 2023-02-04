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
import currentWeatherReducer from "./slices/currentWeatherSlice";
import currentCoordinatesReducer from "./slices/currentCoordinatesSlice";
import forecastWeatherSlice from "./slices/forecastWeatherSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  currentWeather: currentWeatherReducer,
  forecastWeather: forecastWeatherSlice,
  currentCoordinates: currentCoordinatesReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['currentWeather', 'forecastWeather']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
