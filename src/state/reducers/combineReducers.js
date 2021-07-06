import { combineReducers } from 'redux'
import authReducer from './authReducer'
import projectReducer from './projectReducer'

const combineReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
})

export default combineReducer
