document.getElementById('handleSignup').addEventListener("click",handleSignupfunc,false);

function handleSignupfunc()
{
	// var email = document.getElementById('inputEmail').value;
	// var password= document.getElementById('inputPassword').value;
	
	// if (email.length < 4) {
	// alert('Please enter an email address.');
	// return;
	// }
	// if (password.length < 4) {
	// alert('Please enter a password.');
	// return;
	// }
	// // Create user with email and pass.
	// // [START createwithemail]
	// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	// // Handle Errors here.
	// var errorCode = error.code;
	// var errorMessage = error.message;
	// // [START_EXCLUDE]
	// if (errorCode == 'auth/weak-password') {
	// alert('The password is too weak.');
	// } else {
	// alert(errorMessage);
	// }
	// console.log(error);
	// // [END_EXCLUDE]
	// });
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  initapp();
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}

function initapp(){
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = "/";
  }
  });
}