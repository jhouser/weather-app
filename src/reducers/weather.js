import * as weather from '../actions/weather'

const initialState = {
    current: null,
    forecast: null,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case weather.CURRENT_REQUEST:
            return {
                ...state,
                current: null,
            };
        case weather.CURRENT_SUCCESS:
            return  {
                ...state,
                current: action.payload
            };
        default:
            return state
    }
};

export const showWeather = (state) => state.weather.current != null;

export const currentWeather = (state) => state.weather.current;

export default weatherReducer;