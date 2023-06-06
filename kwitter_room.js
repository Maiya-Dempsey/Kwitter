
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
Room_names = childKey;
                  console.log("Room Name - " + Room_name);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
});});}
getData();

function addRoom() {
    var room_name = document.getElementById("room_name").value;
  
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });

    window.location = "kwitter_page.html";
    
}