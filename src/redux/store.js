import {createStore,applyMiddleware} from 'redux'
import {rootReducer} from './rootReducer'
import logger from 'redux-logger'
import {thunk} from 'redux-thunk'

// applyMiddleware  enhances the store by applying middleware.
// logger  logs every action and the state before and after the action is processed, which helps with debugging.
const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store