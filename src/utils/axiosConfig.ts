import axios from 'axios';

const weatherApi = axios.create({
  baseURL: process.env.WEATHER_BASE_URL!,
});

weatherApi.interceptors.request.use(config => {
  config.url =
    config.url + '&units=metric' + '&appid=' + process.env.WEATHER_API_KEY!;
  return config;
});

export default weatherApi;