<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <title>Document</title>
<style>
#loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  z-index: 999;
  display: none;
}

#loading-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border: 5px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: loading-spin 1s linear infinite;
}

@keyframes loading-spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefebd;
  margin: 5% auto 15% auto;
  border: 1px solid #000;
  width: fit-content;
  border-radius: 11px;
}
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}

img {
  height: 60px;
  width: 60px;
  border-radius: 30px;
}
.bg-mynav {
  background-color: #2c3e50;
}
.swal2-popup {
  max-width: 500px;
}
.swal2-file,
.swal2-input,
.swal2-textarea {
  box-sizing: border-box;
  width: -webkit-fill-available;
  transition: border-color 0.1s, box-shadow 0.1s;
  border: 1px solid #ec6060;
  border-radius: 0.1875em;
  background: inherit;
  box-shadow: inset 0 1px 1px rgb(120 39 39 / 6%), 0 0 0 3px #0000002b;
  color: inherit;
  font-size: 19px;
}
.swal2-actions {
  display: flex;
  z-index: 1;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* margin: 1.25em auto 0; */
  padding: 0;
}
.full-reg-body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  //   background: linear-gradient(135deg, #375d46, #47288b);
}
.container-reg-from {
  max-width: 600px;
  width: 100%;
  // background-color: #fff;
  background: linear-gradient(135deg, #375d46, #47288b);
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}
.user-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
}
.user-details .input-box {
  margin-bottom: 10px;
  width: calc(100% / 2 - 15px);
}
form .input-box span.details {
  display: block;
  font-weight: 500;
  margin-bottom: 5px;
  color: aqua;
}
.user-details .input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.user-details .input-box input:focus,
.user-details .input-box input:valid {
  border-color: #9b59b6;
}
form .gender-details .gender-title {
  font-size: 20px;
  font-weight: 500;
}
form .category {
  display: inline-flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
}
form .category label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
form .category label .dot {
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-right: 10px;
  background: #d9d9d9;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}
#dot-1:checked ~ .category label .one,
#dot-2:checked ~ .category label .two,
#dot-3:checked ~ .category label .three {
  background: #9b59b6;
  border-color: #d9d9d9;
}
form input[type="radio"] {
  display: none;
}
form .button {
  height: 45px;
  /* margin: 35px 0  */
}
form .button input {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
form .button input:hover {
  /* transform: scale(0.99); */
  background: linear-gradient(-135deg, #71b7e6, #9b59b6);
}
@media (max-width: 584px) {
  .container-reg-from {
    max-width: 100%;
  }
  .user-details .input-box {
    margin-bottom: 10px;
    width: 100%;
  }
  form .category {
    width: 100%;
  }
  .user-details {
    max-height: 300px;
    overflow-y: scroll;
  }
  .user-details::-webkit-scrollbar {
    width: 5px;
  }
}
@media (max-width: 459px) {
  .container-reg-from .content .category {
    flex-direction: column;
  }
}
.custom-select {
  height: 45px;
  width: 100%;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 15px;
  border: 1px solid #ccc;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
}
.select-selected {
  background-color: DodgerBlue;
}

/*style the arrow inside the select element:*/
.select-selected:after {
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/*style the items (options), including the selected item:*/
.select-items div,
.select-selected {
  color: #ffffff;
  padding: 10px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}

.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}

</style>
</head>


<body onload="loadTable();">

    <div id="loading-overlay">
        <div id="loading-icon"></div>
      </div>
    
  <nav class="navbar navbar-dark bg-mynav">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My App</a>
    </div>
  </nav>

  <div class="container">
    <div class="d-flex bd-highlight mb-3">
      <div class="me-auto p-2 bd-highlight">
        <h2>Users
      </div>
      <div class="p-2 bd-highlight">
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('regmyModal').style.display='block'">Create</button>
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table" id="mytable">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">IMG</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Username</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
       <!-- <tbody id="users-table-body">   -->
          <tr>
            <th scope="row" colspan="5">Loading...</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>


<div id="myModal" class="modal">
  <div class="modal-content animate">
   <div class="full-reg-body">
        <div class="container-reg-from">
            <form id="register-form">
                <div class="user-details">
                    <div class="input-box">
                        <span class="details">User Id</span>  <input type="text" id="idInput" disabled>
                    </div>
                    <div class="input-box">
                        <span class="details">First Name:</span> <input type="text" id="fnameInput">
                    </div>
                    <div class="input-box">
                        <span class="details">Last Name:</span>  <input type="text" id="lnameInput">
                    </div>
                    <div class="input-box">
                        <span class="details">Username</span>  <input type="text" id="usernameInput">
                    </div>
                    <div class="input-box">
                        <span class="details">Img URL</span>   <input type="text" id="avatarInput">
                    </div>
                    <div class="input-box">
                        <span class="details">Password</span> <input type="password" id="passwordInput">
                    </div>
                </div>
                  <button type="button" onclick="document.getElementById('myModal').style.display='none'" class="cancelbtn1">Cancel</button>
          
                <div class="button">
                    <input type="button" onclick="updateUser();"  value="Update">
                </div>
            </form>
        </div>
    </div>
  </div>
</div>



<div id="regmyModal" class="modal">
  <div class="modal-content animate">
   <div class="full-reg-body">
        <div class="container-reg-from">
            <form id="register-form">
                <div class="user-details">
                    
                    <div class="input-box">
                        <span class="details">First Name:</span> <input type="text" id="fname">
                    </div>
                    <div class="input-box">
                        <span class="details">Last Name:</span>  <input type="text" id="lname">
                    </div>
                    <div class="input-box">
                        <span class="details">Username</span>  <input type="text" id="username">
                    </div>
                    <div class="input-box">
                        <span class="details">Img URL</span>   <input type="text" id="avatar">
                    </div>
                    <div class="input-box">
                        <span class="details">Password</span> <input type="password" id="password">
                    </div>
                </div>
                 
                <div class="button">
                    <button type="button" onclick="document.getElementById('regmyModal').style.display='none'" class="cancelbtn2">Cancel</button>
          
                </div>
                <div class="button">
                    <input type="button" onclick="insert_api_Data();"  value="Register">
                   

                </div>
            </form>
        </div>
    </div>
  </div>
</div>
<script src="script.js"></script>
<img src="https://cdms.police.gov.bd/cdms/r/cdmsbase/files/static/v7Y/police-logo.png" id="refresh-icon" style="display:none;">
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.all.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>

<script>

function loadTable() {
    showLoading();
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://apex.oracle.com/pls/apex/my_stock/API_USER/view");
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
     
      var trHTML = '<tr><th>ID</th><th>Avatar</th><th>First Name</th><th>Last Name</th><th>Username</th><th>Actions</th></tr>';
      try {
        const objects = JSON.parse(this.responseText);
        const items = objects.items; // access the "items" property
        const tableBody = document.getElementById("users-table-body");
        const table = document.getElementById("mytable");
        if (table) {
            for (let item of items) { // iterate through the "items" array
            trHTML += '<tr>'; 
            trHTML += '<td>'+item.id+'</td>';
            trHTML += '<td><img src="' + item.avatar + '" width="50px"></td>';
            trHTML += '<td>'+item.fname+'</td>';
            trHTML += '<td>'+item.lname+'</td>';
            trHTML += '<td>'+item.username+'</td>';
            trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('+item.id+')">Edit</button>';
            trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete('+item.id+')">Del</button></td>';
            trHTML += "</tr>";
          }
          table.innerHTML = trHTML;
          hideLoading();
        } else {
          console.log("Table with id 'mytable' not found in HTML.");
        }
      } catch (error) {
        console.log("Error parsing JSON: " + error);
      }
    } else if (this.readyState == 4 && this.status != 200) {
        console.log("Error: API request failed with status code " + this.status);
    }
  };
}


function showLoading() {
    document.getElementById("loading-overlay").style.display = "block";
    setTimeout(function () {
        refreshIcon.style.display = "none";
    }, 10000);
}

function hideLoading() {
    document.getElementById("loading-overlay").style.display = "none";
}



var modal = document.getElementById('myModal');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function insert_api_Data() {
    var inputElements = document.querySelectorAll("input");
    var fnameInput = document.getElementById("fname");
    var lnameInput = document.getElementById("lname");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var avatarInput = document.getElementById("avatar");
    var data = { FNAME: fnameInput.value, LNAME: lnameInput.value, USERNAME: usernameInput.value, PASSWORD: passwordInput.value, AVATAR: avatarInput.value };
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://apex.oracle.com/pls/apex/my_stock/API_USER/post", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = xhr.responseText;
                console.log(response);
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                    icon: 'success',
                    title: 'Registration Successfully'
                })
            }


            else {
                Toast.fire({
                    icon: 'error',
                    title: 'There was an error with your request. Please try again.'
                })
            }
        }
    };
    xhr.send(JSON.stringify(data));
    inputElements.forEach(function (input) {
        input.value = "";
        var modal = document.getElementById('regmyModal');
        modal.style.display = "none";
        loadTable();
        refreshTable();
    });
};





function userDelete(id) {
    // Create new XMLHttpRequest object
    let xhttp = new XMLHttpRequest();
    // Prepare the DELETE request to the API endpoint
    xhttp.open("DELETE", "https://apex.oracle.com/pls/apex/my_stock/API_USER/user/delete/" + id);
    // Send the DELETE request
    xhttp.send();
    // Handle response
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Refresh the report
            loadTable();
        }
    };
}
// Get the table element
let table = document.getElementById("myTable");

// Add a "Delete" button to each row
for (let i = 1; i < table.rows.length; i++) {
    // Create "Delete" button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";

    // Add event listener to "Delete" button
    deleteButton.addEventListener("click", function () {
        // Get the user ID from the first cell of the row
        let id = table.rows[i].cells[0].innerHTML;

        // Call the deleteUser function and pass the user ID as the argument
        userDelete(id);
    });

    // Add "Delete" button to the last cell of the row
    table.rows[i].cells[table.rows[i].cells.length - 1].appendChild(deleteButton);
};



// Get the user details from the input elements
function updateUser() {

    let idInput = document.getElementById("idInput");
    let fnameInput = document.getElementById("fnameInput");
    let lnameInput = document.getElementById("lnameInput");
    let usernameInput = document.getElementById("usernameInput");
    let passwordInput = document.getElementById("passwordInput");
    let avatarInput = document.getElementById("avatarInput");

    let user = {
        id: idInput.value,
        fname: fnameInput.value,
        lname: lnameInput.value,
        username: usernameInput.value,
        password: passwordInput.value,
        avatar: avatarInput.value
    };
    console.log(user);

    let xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "https://apex.oracle.com/pls/apex/my_stock/API_USER/user/update/" + idInput.value);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(user));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let modal = document.getElementById("myModal");
            modal.style.display = "none";
            console.log("User updated successfully");
        }
         loadTable();
    };
};

// Function to open the modal and retrieve user details by ID
function showUserEditBox(id) {
    // Create new XMLHttpRequest object
    let xhttp = new XMLHttpRequest();

    // Prepare the GET request to the API endpoint
    xhttp.open("GET", "https://apex.oracle.com/pls/apex/my_stock/API_USER/user/detels/" + id);

    // Send the GET request
    xhttp.send();

    // Handle response
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Parse the JSON response
            let response = JSON.parse(this.responseText);
            // Get the user details
            let user = response.items[0];
            console.log(user);

            // Get the modal element
            let modal = document.getElementById("myModal");
            // Show the modal
            modal.style.display = "block";

            // Get the input elements
            let idInput = document.getElementById("idInput");
            let fnameInput = document.getElementById("fnameInput");
            let lnameInput = document.getElementById("lnameInput");
            let usernameInput = document.getElementById("usernameInput");
            let passwordInput = document.getElementById("passwordInput");
            let avatarInput = document.getElementById("avatarInput");

            // Pre-populate the input elements with the retrieved data
            idInput.value = user.id;
            fnameInput.value = user.fname;
            lnameInput.value = user.lname;
            usernameInput.value = user.username;
            passwordInput.value = user.password;
            avatarInput.value = user.avatar;

            // Show the modal
            modal.style.display = "block";
        }
    };
};
</script>
</body>

</html>