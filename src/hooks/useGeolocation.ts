import { useState, useEffect } from 'react'

const useGeolocation = () => {
  const [position, setPosition] = useState<GeolocationPosition>();
  const [error, setError] = useState<GeolocationPositionError>();

  const successCallback = (position: GeolocationPosition) => {
    console.log(position)
    setPosition(position)
  }

  const errorCallback = (error: GeolocationPositionError) => {
    console.log(error)
    setError(error)
  }

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }, [])


  return { position, error }
}

export default useGeolocation