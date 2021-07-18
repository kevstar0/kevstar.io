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


  $("#login-btn").click(function()
  {
      var email = $("#email").val();
      var passwrd = $("#passwrd").val();

      if (email ! = "" && passwrd ! = "");
      {
          var result = firebase.auth().signInWithEmailAndPassword()
      }
      else {
          window.alert("Form is incomplete, please fill out all fields")
      }
  });