// Get Elements
var mainWrap = getElem('main');



// Create References to database




firebase.auth().onAuthStateChanged(function(firebaseUser) {
  if (firebaseUser) {
    getElem('login').style.display = 'none';
    getElem('signup').style.display = 'none';
    getElem('logout').style.display = 'inline-block';
    getElem('post').style.display = 'inline-block';
    dbRefPosts.on('value', function(snap) {
      mainWrap.innerHTML = '';
      var response = JSON.parse(JSON.stringify(snap.val()));
      for (i in response) {
        var postWrapper = document.createElement('div');
        var postTitle = document.createElement('div');
        var postDesc = document.createElement('div');
        var postSeparator1 = document.createElement('div');
        var postSeparator2 = document.createElement('div');
        var postAuthor = document.createElement('div');

        postTitle.innerHTML = response[i].Name;
        postDesc.innerHTML = response[i].Description;
        postAuthor.innerHTML = response[i].Author;


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
    });
  } else {
    getElem('login').style.display = 'inline-block';
    getElem('signup').style.display = 'inline-block';
    getElem('post').style.display = 'none';
    getElem('logout').style.display = 'none';
    mainWrap.innerHTML = 'Log in to see this text.'
  }
})









function getElem(elemID) {
  return document.getElementById(elemID);
}

// Made by Alexander Ristinmaa 2017
