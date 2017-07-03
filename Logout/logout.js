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

  var sureM = getElem('sure');
  var btnLogout = getElem('logoutlink');


  btnLogout.addEventListener('click', function() {
    var auth = firebase.auth();

    auth.signOut();
  });

  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      sureM.innerHTML = 'Are you sure you want to log out: ' + firebaseUser.email;
    } else {
      window.location = '/';
    }
  });

  function getElem(elemID) {
    return document.getElementById(elemID);
  }

