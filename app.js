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

  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      getElem('login').style.visibility = 'hidden';
      getElem('signup').style.visibility = 'hidden';
    } else {
      getElem('login').style.visibility = '';
      getElem('signup').style.visibility = '';
    }
  })




    function getElem(elemID) {
    return document.getElementById(elemID);
  }