// Get Elements
var mainWrap = getElem('main');



// Create References to database
var dbRefPosts = firebase.database().ref().child('Posts');
 



firebase.auth().onAuthStateChanged(function(firebaseUser) {
	if (firebaseUser) {
		getElem('login').style.visibility = 'hidden';
      getElem('signup').style.visibility = 'hidden';
      getElem('logout').style.visibility = 'visible';
		dbRefPosts.on('value', function(snap) {
			mainWrap.innerHTML = '';
			var response = JSON.parse(JSON.stringify(snap.val()));
			for (i in response) {
				var postWrapper = document.createElement('div');
				var postTitle = document.createElement('div');
				var postDesc = document.createElement('div');
				var postAuthor = document.createElement('div');

				postTitle.innerHTML = response[i].Name;
				postDesc.innerHTML = response[i].Description;
				postAuthor.innerHTML = response[i].Author;

				postTitle.classList.add('post-title');
				postDesc.classList.add('post-desc');
				postAuthor.classList.add('post-author');

				postWrapper.appendChild(postTitle);
				postWrapper.appendChild(postDesc);
				postWrapper.appendChild(postAuthor);

				mainWrap.appendChild(postWrapper);
			}
		});
	} else {
      getElem('login').style.visibility = 'visible';
      getElem('signup').style.visibility = 'visible';
      getElem('logout').style.visibility = 'hidden';
		mainWrap.innerHTML = 'Log in to see this text.'
	}
})










function getElem(elemID) {
	return document.getElementById(elemID);
}

  // Made by Alexander Ristinmaa 2017