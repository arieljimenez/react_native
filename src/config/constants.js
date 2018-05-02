import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDuEsjnFsbek8WJ3k3OYcQez38OafNrUz4",
  authDomain: "ariel-pomodoro.firebaseapp.com",
  databaseURL: "https://ariel-pomodoro.firebaseio.com",
  projectId: "ariel-pomodoro",
  storageBucket: "ariel-pomodoro.appspot.com",
  messagingSenderId: "271743982976"
})

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider

export {
  ref,
  firebaseAuth,
  facebookProvider
}
