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
  const db = app.firestore()
  const auth = app.auth()
  var provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res)
    })
    .catch((err) =>{
      alert(err.message)
      console.log(err.code)
      console.log(err.message)
    })
  }

  const signupBtn = document.getElementById('signUp')
  signupBtn.addEventListener('click', register)

const login = () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  auth.signInWithEmailAndPassword(email, password)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    alert(err.message)
    console.log(err.code)
    console.log(err.message)
  })
}

const loginBtn = document.getElementById('logIn')
loginBtn.addEventListener('click', login)

//login or signup with google
const googleBtn = document.getElementById("googleAuth")
googleBtn.addEventListener("click",function(){
    console.log("Firebase working")
    firebase.auth()
    .signInWithPopup(provider)
      .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  })

const saveData = () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  db.collection('users')
  .add({
    email: email,
    password: password
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id)
  })
  .catch((error) => {
    console.error("Error adding document: ", error)
  })
}

const saveDataBtn = document.getElementById('saveData')
saveDataBtn.addEventListener('click', saveData)
