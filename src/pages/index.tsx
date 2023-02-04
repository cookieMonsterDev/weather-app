import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { getCurrentCoordinates } from "../store/thunks/getCurrentCoordinates";
import { useCustomDispatch } from "../hooks/store";
import { fetchCurrentWeather } from "../store/thunks/fetchCurrentWeather";
import CurentWeatherCard from "../components/CurentWeatherCard/CurentWeatherCard";
import ForecastWeatherComponent from "../components/ForecastWeatherComponent/ForecastWeatherComponent";
// import { fetchForecastWeather } from "../store/thunks/fetchForecastWeather";
import forcast from "../fakeDate.json";
import { ForecastWeather } from "@/store/types/forecastWeather";

export default function Home() {
  console.log(process.env.MONGO_URL)

  const { error: cordsError, coordinates } = useSelector(
    (state: RootState) => state.currentCoordinates
  );
  // const {
  //   error: forecastError,
  //   forcast,
  //   isLoading: forecastIsLoading,
  // } = useSelector((state: RootState) => state.forecastWeather);

  const {
    error: weatherError,
    weather,
    isLoading,
  } = useSelector((state: RootState) => state.currentWeather);
  const dispatch = useCustomDispatch();

  useEffect(() => {
    dispatch(getCurrentCoordinates());
    dispatch(
      fetchCurrentWeather(
        coordinates || JSON.parse(localStorage.getItem("currentPosition")!)
      )
    );
    // dispatch(
    //   fetchForecastWeather(
    //     coordinates || JSON.parse(localStorage.getItem("currentPosition")!)
    //   )
    // );
  }, [coordinates?.latitude]);

  if (cordsError || weatherError) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{cordsError || weatherError}</main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <>
            <CurentWeatherCard {...weather!} />
            <ForecastWeatherComponent {...forcast! as unknown as ForecastWeather}/>
          </>
        )}
      </main>
    </>
  );
}
