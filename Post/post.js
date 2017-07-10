

  // Get Elements From The DOM
  var txtTitle = getElem('titleBox');
  var txtDesc = getElem('descBox');
  var txtAuthor = getElem('authorBox');
  var btnPost = getElem('post');

  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      
      btnPost.addEventListener('click', function(e) {
      var toPost = {
        Name: txtTitle.value,
        Description: txtDesc.value,
        Author: txtAuthor.value
      }

      
      var thePost = JSON.stringify(toPost);

      sessionStorage.setItem('post', thePost);

      window.location = '/Posted';
  });
    } else {
     window.location = '/Login';
    }
  });
  function getElem(elemID) {
    return document.getElementById(elemID);
  }

  // All made by Alexander Ristinmaa 2017
