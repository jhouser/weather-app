import weatherReducer from './reducers/weather'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();


const store = createStore(
    combineReducers({
        weather: weatherReducer,
        routing: routerReducer
    }),
    {},
    applyMiddleware(
        apiMiddleware,
        routerMiddleware(history)
    )
);

export default store;
