import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/',
});

weatherApi.interceptors.request.use(config => {
  config.url =
    config.url + '&units=metric' + '&appid=c2f692e14be30aa804eea62f3bdfd329';
  return config;
});

export default weatherApi;