import { combineReducers } from 'redux'
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { firestoreReducer } from 'redux-firestore'

const combineReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
})

export default combineReducer
