// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD-1YeQbZ2mLgJanTYiyF1Yqqman504PrY",
    authDomain: "quecoy-2b9b8.firebaseapp.com",
    databaseURL: "https://quecoy-2b9b8.firebaseio.com",
    projectId: "quecoy-2b9b8",
    storageBucket: "quecoy-2b9b8.appspot.com",
    messagingSenderId: "614265008961",
    appId: "1:614265008961:web:71c29d2482750135b827c0",
    measurementId: "G-NV2SQGCGQ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //reference messages collection
  var messagesRef = firebase.database().ref('messages');
//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();
    
  //get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
//Save message
 saveMessage(name, company, email, phone, message);

 //show alert
 document,querySelector('.alert').style.display = 'block';

 //Hide alert after 3 sec
 setTimeout(function(){
    document,querySelector('.alert').style.display = 'none';
 },3000);
//clear form
 document.getElementById('contactForm').request();
}

//funtion to get form values
function getInputval(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message,
    });
}