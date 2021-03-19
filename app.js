var _0x2005=['1IoIJXo','917387EqZFvX','love-button-93c52','1uJZtcj','1:822615295998:web:9402c90b61ba389814a2af','love-button-93c52.appspot.com','1483875DZlRBh','1179738CmBQVf','love-button-93c52.firebaseapp.com','AIzaSyDNzIxtyBeRJ6sdkHGej5F6W0qdNBsKpKQ','348133ULabKV','822615295998','528462ApLLhE','1264802fGFjcR','98932NmJwgy'];var _0x46b7=function(_0x34703b,_0x2dabad){_0x34703b=_0x34703b-0xbc;var _0x2005cb=_0x2005[_0x34703b];return _0x2005cb;};var _0x567cb8=_0x46b7;(function(_0x179d12,_0xbe1064){var _0x1f2c67=_0x46b7;while(!![]){try{var _0x4067f7=parseInt(_0x1f2c67(0xc2))+parseInt(_0x1f2c67(0xc6))*parseInt(_0x1f2c67(0xca))+-parseInt(_0x1f2c67(0xc5))*parseInt(_0x1f2c67(0xc7))+parseInt(_0x1f2c67(0xc8))+-parseInt(_0x1f2c67(0xbf))+parseInt(_0x1f2c67(0xbe))+parseInt(_0x1f2c67(0xc4));if(_0x4067f7===_0xbe1064)break;else _0x179d12['push'](_0x179d12['shift']());}catch(_0x1e8c23){_0x179d12['push'](_0x179d12['shift']());}}}(_0x2005,0xe3999));var firebaseConfig={'apiKey':_0x567cb8(0xc1),'authDomain':_0x567cb8(0xc0),'projectId':_0x567cb8(0xc9),'storageBucket':_0x567cb8(0xbd),'messagingSenderId':_0x567cb8(0xc3),'appId':_0x567cb8(0xbc)};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const photos = document.querySelector('.photos');
window.onload = function() {
    var storageRef = storage.ref('images/');
    storageRef.listAll().then(function(result) {
        result.items.forEach(function(imageRef) {
            displayImages(imageRef);
        })
    })
}

function displayImages(imageReference) {
    imageReference.getDownloadURL()
        .then(imgUrl => {
            var img = document.createElement('img');
            img.className = "img";
            img.addEventListener("error", function() {
                img.style.display = "none";
                alert("Some images were not found");
            })
            img.src = imgUrl;
            photos.appendChild(img)
            console.log(imgUrl);
        });
}

function uploadImage() {
    const file = document.getElementById("file").files[0];

    storage
        .ref('images/' + file.name)
        .put(file);

    console.log(file);
    storage.ref('images/' + file.name)
        .getDownloadURL()
        .then(imgUrl => {
            var img = document.createElement('img');
            img.className = "img";
            img.src = imgUrl;
            photos.appendChild(img)
            console.log(imgUrl);
        });


}
