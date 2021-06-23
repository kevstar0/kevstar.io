// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6XmqP76EBAG1XHZhtbJn6lDDagYH14xI",
    authDomain: "aqueous-encoder-301807.firebaseapp.com",
    databaseURL: "https://aqueous-encoder-301807-default-rtdb.firebaseio.com",
    projectId: "aqueous-encoder-301807",
    storageBucket: "aqueous-encoder-301807.appspot.com",
    messagingSenderId: "1012545270359",
    appId: "1:1012545270359:web:2f1eaf15ac45e14312e912",
    measurementId: "G-HKQ1DCN73M"
  };
  firebase.initializeApp(config);

  //Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtEmail = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');