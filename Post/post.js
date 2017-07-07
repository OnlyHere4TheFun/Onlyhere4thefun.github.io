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

  // Get Elements From The DOM
  var txtTitle = getElem('titleBox').value;
  var txtDesc = getElem('descBox').value;
  var txtAuthor = getElem('authorBox').value;
  var btnPost = getElem('post');

  // Createe Database Reference

  var dbRefPosts = firebase.database().ref().child('Posts');

  btnPost.addEventListener('click', function(e) {
    console.log('Hello');
      var toPost = {
        "Name": txtTitle,
        "Description": txtDesc,
        "Author": txtAuthor
      }
      dbRefPosts.push(toPost);
  });

  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {

    } else {
     window.location = '/Login';
    }
  });
  function getElem(elemID) {
    return document.getElementById(elemID);
  }

  // All made by Alexander Ristinmaa 2017