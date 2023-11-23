import { createStore } from 'redux'
import { combineReducers } from 'redux'
import todosmd from '../modules/todomodule.js'

const rootReducer = combineReducers({ todosmd })

const store = createStore(rootReducer)

export default store
