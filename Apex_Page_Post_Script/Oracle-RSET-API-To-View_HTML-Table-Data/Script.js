function loadTable() {
  // Create a new XMLHttpRequest
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://apex.oracle.com/pls/apex/my_stock/API_USER/view");
  xhttp.send();
  xhttp.onreadystatechange = function() {
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
      }
    }
  };
}

  loadTable();
