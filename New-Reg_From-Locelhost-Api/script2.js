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