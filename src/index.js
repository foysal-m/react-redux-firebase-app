import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useSelector } from 'react-redux'
import './index.css'
import App from './components/App/App'
import store from './state/store'
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase'
import { createFirestoreInstance } from 'redux-firestore'

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth)
  if (!isLoaded(auth)) return <div>splash screen...</div>
  return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
)
