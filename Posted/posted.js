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

  var dataStuff = getElem('dataHolder'); 
  var mainWrap = getElem('main');

  var dbRefPosts = firebase.database().ref().child('Posts');

firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      var data = sessionStorage.getItem('post');

      var parsedData = JSON.parse(data);
      console.log(JSON.stringify(parsedData));

      var key = dbRefPosts.push().key;

      var update[key] = parsedData;

      dbRefPosts.update(update);



      if (parsedData.Name && parsedData.Description && parsedData.Author) {
        showPost(parsedData);
      }
      sessionStorage.clear();
    } else {
        window.location = '/Login';
    }
});



function showPost(response) {
        var postWrapper = document.createElement('div');
        var postTitle = document.createElement('div');
        var postDesc = document.createElement('div');
        var postSeparator1 = document.createElement('div');
        var postSeparator2 = document.createElement('div');
        var postAuthor = document.createElement('div');

        postTitle.innerHTML = response.Name;
        postDesc.innerHTML = response.Description;
        postAuthor.innerHTML = response.Author;


        postTitle.classList.add('post-title');
        postDesc.classList.add('post-desc');
        postAuthor.classList.add('post-author');
        postSeparator1.classList.add('post-separator');
        postSeparator2.classList.add('post-separator1');


        postWrapper.appendChild(postSeparator1);
        postWrapper.appendChild(postSeparator2);
        postWrapper.appendChild(postTitle);
        postWrapper.appendChild(postDesc);
        postWrapper.appendChild(postAuthor);

        mainWrap.appendChild(postWrapper);
}

  function getElem(elemID) {
    return document.getElementById(elemID);
  }

  // All made by Alexander Ristinmaa 2017