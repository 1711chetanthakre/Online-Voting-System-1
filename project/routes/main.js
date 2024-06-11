
const firebaseConfig = {
  apiKey: "AIzaSyDNGJxNhR3NOnVqgmNYLdNdFRcmUa1Xi80",
  authDomain: "radhe-f1377.firebaseapp.com",
  databaseURL: "https://radhe-f1377-default-rtdb.firebaseio.com",
  projectId: "radhe-f1377",
  storageBucket: "radhe-f1377.appspot.com",
  messagingSenderId: "699429845510",
  appId: "1:699429845510:web:205cff83f20df94e9e2187",
};


firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('Users Accounts');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
e.preventDefault();

// Get values
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email');
var phone = getInputVal('phone');
var message = getInputVal('message');

// Save message
saveMessage(name, company, email, phone, message);

// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

// Clear form
document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
 
  Address:message,
  phone:company,
  email:email,
  password:phone,
  username: name
});
}


