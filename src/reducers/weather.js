import * as weather from '../actions/weather'

const initialState = {

};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case weather.CURRENT_SUCCESS:
            const name = action.payload.name;
            let newState = {...state};
            newState[name] = action.payload;
            console.log(newState);
            return newState;
        default:
            return state
    }
};

export default weatherReducer;