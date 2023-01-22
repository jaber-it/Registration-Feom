var form = document.getElementById("register-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var gender = document.getElementById("gender").value;
    var data = { NAME: name, EMAIL: email, PASSWORD: password, PHONE: phone, USERNAME: username, GENDER: gender };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/ords/my_stock/MY_USER_DATA/insert", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send(JSON.stringify(data));
});


document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var message = document.getElementById("message").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "path/to/server/script", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Redirect the user back to the messages page
        window.location.href = "path/to/messages/page";
      }
    };
    xhr.send("message=" + message);
  });
  

  setInterval(function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "path/to/webservice", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Update the messages list with the latest messages
        var messages = JSON.parse(xhr.responseText);
        var messagesList = document.getElementById("messages");
        messagesList.innerHTML = "";
        messages.forEach(function(message) {
            var li = document.createElement("li");
            li.innerHTML = '<span class="sender">' + message.sender + '</span>' +
                           '<span class="message">' + message.message + '</span>' +
                           '<span class="time">' + message.time + '</span>';
            messagesList.appendChild(li);
        });
      }
    };
    xhr.send();
  }, 5000); // call the web service every 5 seconds
  