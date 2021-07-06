import { createStore, applyMiddleware, compose } from 'redux'
import combineReducer from './reducers/combineReducers'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import fbConfig from '../config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(
  combineReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase, fbConfig),
  ),
)

export default store
