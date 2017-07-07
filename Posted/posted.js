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

firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
    var data = getParams();
    var newData = decodeParams(data);
    showPost(newData);
    } else {
        window.location = '/Login';
    }
});

function getParams() {
            var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    return data;
}

function decodeParams(data) {
  if (data.header && data.desc && data.author) {
          var dataText = [];
          for (i in data) {
            var dataArr = data[i].split('%20');
            var dataTemp = '';
            for (j in dataArr) {
              dataTemp += dataArr[j] + ' ';
            }
            data[i] = dataTemp;
            dataText.push(data[i]);
          }
          return dataText;
      } else {
        window.location = '/';
      }
}


function showPost(response) {
        var postWrapper = document.createElement('div');
        var postTitle = document.createElement('div');
        var postDesc = document.createElement('div');
        var postSeparator1 = document.createElement('div');
        var postSeparator2 = document.createElement('div');
        var postAuthor = document.createElement('div');

        postTitle.innerHTML = response[0];
        postDesc.innerHTML = response[1];
        postAuthor.innerHTML = response[2];


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