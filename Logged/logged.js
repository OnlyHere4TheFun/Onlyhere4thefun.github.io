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

  var successMessage = document.getElementById('Success');

  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      successMessage.innerHTML = 'Succesfully logged in as ' + firebaseUser.email;

    } else {
      window.location = '/Login';
    }
  })



    function getElem(elemID) {
    return document.getElementById(elemID);
  }

  // All made by Alexander Ristinmaa 2017