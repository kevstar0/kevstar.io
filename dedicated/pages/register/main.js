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
var messagesRef = firebase.database().ref('messages')


//listen for form submit
document.getElementById('registrationform').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
    e.preventDefault();

    // get values
    var name = getInputVal('name');
    var surname = getInputVal('surname');
    var email = getInputVal('email');
    var dob = getInputVal('dob');
    var number = getInputVal('number');
    var country = getInputVal('country');
    var password = getInputVal('verpasswrd');
    var username = getInputVal('username');

    // save message
    saveMessage(name, surname, email, number, country, passwrd, username, dob);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3s
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },5000);

}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, surname, email, number, country, verpasswrd, username, dob) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        surname: surname,
        username: username,
        email: email,
        number: number,
        country: country,
        passwrd: passwrd,
        dob: dob,
    })
}