import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CoordinatesState, Geoposition } from "./coordinates.types";

const initialState: CoordinatesState = {
  coordinates: null,
  isLoadingCoordinates: false,
  coordinatesError: null,
};

export const getCoordinates = createAsyncThunk<
  Geoposition,
  void,
  { rejectValue: string }
>("coordinates/getCoordinates", async (_, { rejectWithValue }) => {
  const getPosition = () =>
    new Promise<GeolocationPosition>((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );

  try {
    const { coords } = await getPosition();

    return {
      lat: coords.latitude,
      lon: coords.longitude,
    };
  } catch (error) {
    if (error instanceof GeolocationPositionError) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue("Something went wrong");
  }
});

export const coordinatesSlice = createSlice({
  name: "coordinates",
  initialState,
  reducers: {
    setCoordinates(state, { payload }: PayloadAction<Geoposition | null>) {
      state.coordinates = payload;
    },
    setLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoadingCoordinates = payload;
    },
    setError(state, { payload }: PayloadAction<string | null>) {
      state.coordinatesError = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoordinates.pending, (state) => {
      state.isLoadingCoordinates = true;
      state.coordinatesError = null;
    }),
    builder.addCase(getCoordinates.fulfilled, (state, { payload }) => {
      state.coordinates = payload;
      state.isLoadingCoordinates = false;
    }),
    builder.addCase(getCoordinates.rejected, (state, { payload }) => {
      state.coordinates = null;
      if (payload) state.coordinatesError = payload;
      state.isLoadingCoordinates = false;
    });
  },
});

export const { setCoordinates, setLoading, setError } =
  coordinatesSlice.actions;

export default coordinatesSlice.reducer;
