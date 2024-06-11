
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
  var messagesRef = firebase.database().ref('Votes Accounts');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
  e.preventDefault();
  
  // Get values
  var name = getInputVal('votername');
  var selectme = getInputVal('Votes');
  
  
  // Save message
  saveMessage(name,selectme);
  
  // Clear form
  document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
  return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, selectme){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({ 
    voterName:name,
    VoteFor:selectme
  });
  }
  
  
  
