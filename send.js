const socket = io();

function send() {
    let message = document.getElementById("message").value;
    if(message === "" || message === " "){
        document.getElementById("message").style.borderColor = "red";
    }
    else 
    {
        socket.emit("send", {
            "message": message
        });
        document.getElementById("message").value = "";
        document.getElementById("message").style.borderColor = "white";
    }
}

socket.on("new", function(data) {
    console.log("NEW MESSAGE : ", data);
    let chatMessage = document.createElement("li");
    chatMessage.innerHTML = data.message;
    document.getElementById("messages").appendChild(chatMessage)
});