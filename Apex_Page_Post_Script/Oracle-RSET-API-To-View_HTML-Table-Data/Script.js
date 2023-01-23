function loadTable() {
  // Create a new XMLHttpRequest
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://apex.oracle.com/pls/apex/my_stock/API_USER/view");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Parse the JSON data
      const data = JSON.parse(this.responseText);
      // Get the table body element
      const tableBody = document.getElementById("users-table-body");
      // Iterate through the data
      for (let item of data.items) {
        // Create a new row
        const row = tableBody.insertRow();
        // Create cells for each column
        const idCell = row.insertCell();
        idCell.innerHTML = item.id;
        const avatarCell = row.insertCell();
        avatarCell.innerHTML = '<img src="' + item.avatar + '" width="50px">';
        const fnameCell = row.insertCell();
        fnameCell.innerHTML = item.fname;
        const lnameCell = row.insertCell();
        lnameCell.innerHTML = item.lname;
        const usernameCell = row.insertCell();
        usernameCell.innerHTML = item.username;
        const actionCell = row.insertCell();
        actionCell.innerHTML = '<button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(item.id)">Edit</button> <button type="button" class="btn btn-outline-danger" onclick="userDelete(item.id)">Del</button>';
      }
    }
  };
}
loadTable();

function showUserCreateBox() {
 // window.open('Reg_from.html', '_blank', 'toolbar=0,location=0,menubar=0');
  //window.open('./Reg_from.html','_blank');
  window.open("./Reg_from.html","_blank","toolbar=yes,scrollbars=yes, resizable=yes, top=500, left=500, width=600, height=600");
 //window.location.href = './Reg_from.html', target='_blank';
  /*
  Swal.fire({
    title: 'Create user',
    html: 
      '<input id="id" class="swal2-input" placeholder="ID">' +
      '<input id="fname" class="swal2-input" placeholder="First">' +
      '<input id="lname" class="swal2-input" placeholder="Last">' +
      '<input id="username" class="swal2-input" placeholder="Username">' +
      '<input id="email" class="swal2-input" placeholder="Email">' +
      '<input id="avatar" class="swal2-input" placeholder="Avatar">', 
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
    }
  })*/
}

function userCreate() {
  const id = document.getElementById("id").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const avatar = document.getElementById("avatar").value;
    
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/users/create");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({ 
    "id": id, "fname": fname, "lname": lname, "username": username, "email": email, 
    "avatar": avatar
  }));
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(objects['message']);
      loadTable();
    }
  };
}

function userDelete(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "http://localhost:3000/users/delete");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({ 
    "id": id
  }));
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(objects['message']);
      loadTable();
    } 
  };
}

function showUserEditBox(id) {
  console.log(id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/users/"+id);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      const user = objects['user'];
      console.log(user);
      Swal.fire({
        title: 'Edit User',
        html:
          '<input id="id" class="swal2-input" placeholder="First" value="'+user['id']+'" disabled>' +
          '<input id="fname" class="swal2-input" placeholder="First" value="'+user['fname']+'">' +
          '<input id="lname" class="swal2-input" placeholder="Last" value="'+user['lname']+'">' +
          '<input id="username" class="swal2-input" placeholder="Username" value="'+user['username']+'">' +
          '<input id="email" class="swal2-input" placeholder="Email" value="'+user['email']+'">' +
          '<input id="avatar" class="swal2-input" placeholder="Avatar" value="'+user['avatar']+'">',
        focusConfirm: false,
        preConfirm: () => {
          userEdit();
        }
      })
    }
  };
}

function userEdit() {
  const id = document.getElementById("id").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const avatar = document.getElementById("avatar").value;
    
  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", "http://localhost:3000/users/update");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({ 
    "id": id, "fname": fname, "lname": lname, "username": username, "email": email, 
    "avatar": avatar
  }));
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(objects['message']);
      loadTable();
    }
  };
}
