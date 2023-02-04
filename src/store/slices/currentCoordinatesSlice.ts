import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Coordinates {
  lat: number;
  lon: number;
}

export interface CurrentCoordinatesState {
  coordinates: Coordinates | null;
  error: string | null;
}

const initialState: CurrentCoordinatesState = {
  coordinates: null,
  error: null,
};

export const currentCoordinatesSlice = createSlice({
  name: "coordinates",
  initialState,
  reducers: {
    setCurrentCoordinatesSuccess(state, action: PayloadAction<Coordinates>) {
      state.error = null;
      state.coordinates = action.payload;
    },
    setCurrentCoordinatesError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setCurrentCoordinatesError, setCurrentCoordinatesSuccess } =
  currentCoordinatesSlice.actions;

export default currentCoordinatesSlice.reducer;
