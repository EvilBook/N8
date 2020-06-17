"use strict"

var customers_table = document.getElementById('customers_table');

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://192.168.0.107:3000/users/get-customers", requestOptions)
  .then(response => response.json())
  .then(data => {
    if(data.length > 0) {
        var tempp = "";

        data.forEach((u) => {
            tempp += "<tr class = 'customer_row'>"
            tempp += "<td>" + u.first_name + "</td>";
            tempp += "<td>" + u.last_name + "</td>";
            tempp += "<td>" + u.email + "</td>";
            tempp += "<td>" + u.phone_number + "</td>";
            tempp += "<td>" + u.name + "</td>";
            tempp += "<td>" + u.city + "</td>";
            tempp += "<td>" + u.postcode + "</td>";
            tempp += "<td>" + u.country + "</td>";
            tempp += "<tr>"
        });
        customers_table.innerHTML = tempp;
        var row = document.getElementsByClassName('customer_row');
        for (var i = 0; i < row.length; i++) {
          row[i].addEventListener("click", () => {
            var email = event.target.parentNode.childNodes[2].innerHTML;
            deleteCustomer(email);
            location.reload();
          });
        }
    }
  }).catch(error => console.log('error', error));


function deleteCustomer(email) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const data = {
    'email': email
  };

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://192.168.0.107:3000/users/delete-user", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
