// Get Elements
var mainWrap = getElem('main');



// Create References to database
var dbRefPosts = firebase.database().ref().child('Posts');
 



firebase.auth().onAuthStateChanged(function(firebaseUser) {
	if (firebaseUser) {
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

				console.log('It Worked!');
			}
		});
	} else {

	}
})










function getElem(elemID) {
	return document.getElementById(elemID);
}

  // Made by Alexander Ristinmaa 2017