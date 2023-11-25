import {
  ENDPOINTS,
  WEATHER_API_KEY,
  WEATHER_BASE_URL,
} from "../constants/Urls.js";
const axios = require("axios").default;

const WEATHER_HTTP_REQUEST = axios.create({
  baseURL: WEATHER_BASE_URL,
  params: {
    appid: WEATHER_API_KEY,
    lat: 26.8206,
    lon: 30.8025,
  },
});

const getCurrentWeather = () =>
  WEATHER_HTTP_REQUEST.get(ENDPOINTS.CURRENT_WEATHER);

export { getCurrentWeather };
