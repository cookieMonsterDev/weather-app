export interface CoordinatesState {
  coordinates: Geoposition | null;
  isLoadingCoordinates: boolean;
  coordinatesError: string | null;
}

export interface Geoposition {
  lat: number;
  lon: number;
}
