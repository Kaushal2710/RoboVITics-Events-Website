const firebase = require(["firebase/app"])
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrovIuoeQ7wf48Pxg3heaqS91jKZe21_Q",
  authDomain: "events-website-2947a.firebaseapp.com",
  projectId: "events-website-2947a",
  storageBucket: "events-website-2947a.appspot.com",
  messagingSenderId: "852237817020",
  appId: "1:852237817020:web:7a9f184633a9223fb32cb9",
  measurementId: "G-CVC3HZ5D7J"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

module.exports = [app]

