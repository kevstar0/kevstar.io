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

//listen for form login
document.getElementById('loginform').addEventListener('submit', submitForm);

// submit form
function submitForm(e){
    e.preventDefault();

    // get values
    var Email = getInputVal('Email');
    var Name = getInputVal('Name');
    var Surname = getInputVal('Surname');
    var Country = getInputVal('Country');
    var Gender = getInputVal('Gender');
    var Number = getInputVal('Number');
    var Birthday = getInputVal('Birthday');
    var Passwrd = getInputVal('Verpasswrd');
    var Username = getInputVal('Username');
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    // save message
    saveMessage(Email, Name, Number, Surname, Country, Gender, Verpasswrd, Passwrd, Username, Birthday, date);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 5s
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },5000);

    // clear form
    document.getElementById('registrationform').reset();

}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(Email, Name, Number, Surname, Country, Gender, Verpasswrd, Passwrd, Username, Birthday, date) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        
        Email: Email,
        Name: Name,
        Number: Number,        
        Surname: Surname,
        Country: Country,
        Gender: Gender,
        Verpasswrd: Verpasswrd,
        Passwrd: Passwrd,
        Username: Username,
        Birthday: Birthday,
        Date: date,
    })
}