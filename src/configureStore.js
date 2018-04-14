import reducers from './reducers/core'
import { applyMiddleware, createStore, combineReducers } from 'redux'
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
        routerMiddleware(history)
    )
);

export default store;
