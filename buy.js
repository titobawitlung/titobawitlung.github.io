 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDYuJdSiFGJatXMFh5esqt919FUVJbWaJA",
    authDomain: "advise-form.firebaseapp.com",
    databaseURL: "https://advise-form.firebaseio.com",
    projectId: "advise-form",
    storageBucket: "",
    messagingSenderId: "1053468612828"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('order');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var pin = getInputVal('pin');
  var landmark = getInputVal('landmark');
  var phone = getInputVal('phone');
  var quantity = getInputVal('quantity');
  var message = getInputVal('message');
  
  
  // Save message
  saveMessage(name, company, email, pin, landmark, phone, quantity, message);

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
function saveMessage(name, company, email, pin, landmark, phone, quantity, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    pin:pin,
    landmark:landmark,
    phone:phone,
    quantity:quantity,
    message:message
  });
}