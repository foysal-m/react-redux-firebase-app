import firebase from 'firebase/app' //only core functionalities
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyBbLzIs_TR1JfccHomWI3xWdQVEJYOKm7I',
  authDomain: 'marioplan-4c7f1.firebaseapp.com',
  projectId: 'marioplan-4c7f1',
  storageBucket: 'marioplan-4c7f1.appspot.com',
  messagingSenderId: '918416433058',
  appId: '1:918416433058:web:6c0116692df86adb64dcfb',
  measurementId: 'G-6X98BT79SJ',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
