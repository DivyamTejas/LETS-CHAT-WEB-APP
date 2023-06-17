var firebaseConfig = {
      apiKey: "AIzaSyBxjh7lzUpQKYDeihOXDhCMgjT3opqpciU",
      authDomain: "kwitter-ab0bf.firebaseapp.com",
      databaseURL: "https://kwitter-ab0bf-default-rtdb.firebaseio.com",
      projectId: "kwitter-ab0bf",
      storageBucket: "kwitter-ab0bf.appspot.com",
      messagingSenderId: "303136567598",
      appId: "1:303136567598:web:6bb6088ed8f6aa79e1cabf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="WELCOME " + user_name + "😎";

function addRoom () {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update
      ({ purpose: "ADDING ROOM NAME...."
});
localStorage.setItem("room_name", room_name);

window.location= "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();


function redirectToRoomName(name) {
localStorage.setItem("room_name", room_name);

window.location= "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
