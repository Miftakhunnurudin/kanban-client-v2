import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'
import kanbanReducer from './reducers/kanbanReducer'

const rootReducer = combineReducers({
    kanbans: kanbanReducer
})

const store = createStore(rootReducer, applyMiddleware(logger,thunk))
export default store