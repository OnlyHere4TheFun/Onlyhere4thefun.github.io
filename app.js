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
      getElem('logout').style.visibility = 'visible';
    } else {
      getElem('login').style.visibility = 'visible';
      getElem('signup').style.visibility = 'visible';
      getElem('logout').style.visibility = 'hidden';
    }
  });




    function getElem(elemID) {
    return document.getElementById(elemID);
  }

  // All made by Alexander Ristinmaa 2017