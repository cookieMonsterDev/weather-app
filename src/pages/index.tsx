import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { getCurrentCoordinates } from "@/store/thunks/getCurrentCoordinates";
import { useCustomDispatch } from "@/hooks/store";
import { fetchCurrentWeather } from "@/store/thunks/fetchCurrentWeather";

export default function Home() {
  const { error: cordsError, coordinates } = useSelector(
    (state: RootState) => state.currentCoordinates
  );
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
  }, []);


  if (cordsError || weatherError) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Link href="/test">test</Link>
          {cordsError || weatherError}
        </main>
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
        <Link href="/test">test</Link>
        {isLoading && <div>Loading</div>}
        {JSON.stringify(weather)}
      </main>
    </>
  );
}

// export const getServerSideProps = async () => {
//   const res = await

//   return {
//     props: {},
//   }
// }
