var firebaseConfig = {
    apiKey: "AIzaSyA6XmqP76EBAG1XHZhtbJn6lDDagYH14xI",
    authDomain: "aqueous-encoder-301807.firebaseapp.com",
    databaseURL: "https://aqueous-encoder-301807-default-rtdb.firebaseio.com",
    projectId: "aqueous-encoder-301807",
    storageBucket: "aqueous-encoder-301807.appspot.com",
    messagingSenderId: "1012545270359",
    appId: "1:1012545270359:web:2f1eaf15ac45e14312e912",
    measurementId: "G-HKQ1DCN73M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth.Auth.Persistence.LOCAL


  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
    window.alert("Message: " errorMessage);
  });