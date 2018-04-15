import * as weather from '../actions/weather'

const initialState = {
    current: null,
    forecast: null,
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case weather.CURRENT_SUCCESS:
            const name = action.payload.name;
            let newState = {
                ...state,
                current: action.payload
            };
            newState[name] = action.payload;
            return newState;
        default:
            return state
    }
};

export const currentWeather = (state) => state.weather.current;

export default weatherReducer;