  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBPvpAQt28MDmavbc31JUdurX1OIWM3wZQ",
    authDomain: "onlyhere4thefun-7c384.firebaseapp.com",
    databaseURL: "https://onlyhere4thefun-7c384.firebaseio.com",
    projectId: "onlyhere4thefun-7c384",
    storageBucket: "onlyhere4thefun-7c384.appspot.com",
    messagingSenderId: "872492202975"
  };
  firebase.initializeApp(config);

  var txtEmail = getElem('email-input');
  var txtPass = getElem('pass-input');
  var btnLogin = getElem('login');
  var btnSignUp = getElem('signup');




  btnLogin.addEventListener('click', function(e) {
    var email = txtEmail.value;
    var password = txtPass.value;
    var auth = firebase.auth();

    var promise = auth.signInWithEmailAndPassword(email, password);

    promise.catch(function(e) {alert(e.message)});
  });

  btnSignUp.addEventListener('click', function(e) {
    var email = txtEmail.value;
    var password = txtPass.value;
    var auth = firebase.auth();

    var promise = auth.createUserWithEmailAndPassword(email, password);

    promise.catch(function(e) {bootbox.alert(e.message)});
  });

  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      window.location = '/Logged';
    } else {

    }
  })




  function getElem(elemID) {
    return document.getElementById(elemID);
  }

