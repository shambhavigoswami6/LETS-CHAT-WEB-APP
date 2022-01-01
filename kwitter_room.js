user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME WELCOME "+user_name+ "!!!!!!!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding a room name"
      });
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();



function redirectToRoomName(name){
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";

}