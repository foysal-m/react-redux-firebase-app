import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './components/App/App'
import store from './state/store'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase'
import { createFirestoreInstance } from 'redux-firestore'

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
)
