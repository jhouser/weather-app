import {RSAA} from 'redux-api-middleware';

export const CURRENT_REQUEST = '@@weather/CURRENT_REQUEST';
export const CURRENT_SUCCESS = '@@weather/CURRENT_SUCCESS';
export const CURRENT_FAILURE = '@@weather/CURRENT_FAILURE';

const weather_api_endpoint = 'http://api.openweathermap.org/data/2.5/';
const api_key = 'f7172877468a211c11a3b5c33f5338c8';

export const current = (location) => ({
    [RSAA]: {
        endpoint: weather_api_endpoint + 'weather?q=' + location + '&units=metric&appid=' + api_key,
        method: 'GET',
        types: [
            CURRENT_REQUEST, CURRENT_SUCCESS, CURRENT_FAILURE
        ]
    }
});