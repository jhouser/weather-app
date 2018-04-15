import reducers from './reducers/weather'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory();


const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    {},
    applyMiddleware(
        apiMiddleware,
        routerMiddleware(history)
    )
);

export default store;
