import * as weather from '../actions/weather'

const initialState = {
    fetching: false,
    current: null,
    forecast: null,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case weather.CURRENT_REQUEST:
            return {
                ...state,
                fetching: true,
                current: null,
            };
        case weather.CURRENT_SUCCESS:
            return  {
                ...state,
                fetching: false,
                current: action.payload
            };
        default:
            return state
    }
};

export const isFetching = (state) => state.weather.fetching;

export const showWeather = (state) => state.weather.current != null;

export const currentWeather = (state) => state.weather.current;

export const weatherForecast = (state) => state.weather.forecast;

export default weatherReducer;