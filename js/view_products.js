"use strict";

//var button = document.getElementById('test');
var products_table = document.getElementById('product_table');
var letters = "*,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
letters = letters.split(",");
var container;
var clicked_letter = "";

for (var i = 0; i < letters.length; i++) {
  container = document.createElement("a");
  container.setAttribute("id", letters[i]);
  container.setAttribute("class", 'product_link');
  container.setAttribute("href", "");
  container.setAttribute("onclick", "return false;");
  container.innerHTML = letters[i];

  container.addEventListener("click", () => {
    var letter = event.target.innerHTML;
    clicked_letter = letter;
    console.log(letter, "clicked");
    getProducts(letter);
  });

  document.getElementById("letter_container").appendChild(container);
}



function getProducts(letter) {

  console.log(letter, "received letter");
  

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch('http://192.168.0.108:3000/products/first-letter/' + letter, requestOptions)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        var tempp = "";
        var product_id;

        data.forEach((u) => {
          tempp += "<td data-product-id= " + u.id + ">" + u.name + "</td>";
          tempp += "<td>" + u.price + "</td>";
          tempp += "<td>" + u.new_price + "</td>";
          tempp += "<td>" + u.ean + "</td>";
          tempp += "<td>" + u.availability + "</td>";
          tempp += "<td>" + u.quantity + "</td>";
          tempp += "<td>" + u.brand + "</td>";
          tempp += "<td>" + u.design + "</td>";
          tempp += "<td>" + u.description + "</td>";
          tempp += "<td>" + u.material + "</td>";
          tempp += "<td>" + u.diameter + "</td>";
          tempp += "<td>" + u.length + "</td>";
          tempp += "<td>" + u.width + "</td>";
          tempp += "<td>" + u.height + "</td>";
          tempp += "<td>" + u.volume + "</td>";
          tempp += "<td>" + u.weight + "</td>";
          tempp += "<td>" + u.size + "</td>";
          tempp += "<td>" + u.subcategory + "</td>";
          tempp += "<td>" + u.category + "</td>";
          tempp += "<td>" + u.section + "</td>";
          tempp += "<td>" + "<button type='button' class='product_table_button' data-product-id= " + u.id + "> Update </button>" + "</td>";
          tempp += "<td>" + "<button type='button' class='delete_product_button'data-stripe-id='" + u.stripe_id + "' data-product-id= '" + u.id + "'> Delete </button>" + "</td>";
          tempp += "<tr>";
        });

        products_table.innerHTML = tempp;
        var update_product_btn = document.getElementsByClassName('product_table_button');
        var delete_product_btn = document.getElementsByClassName('delete_product_button');

        for (var i = 0; i < update_product_btn.length; i++) {
          update_product_btn[i].addEventListener('click', () => {
            product_id = event.target.dataset.productId;
            document.location.href = "update_product.html?" + product_id;
          });
        }

        for (var j = 0; j < delete_product_btn.length; j++) {
          delete_product_btn[j].addEventListener("click", () => {
            var product_id = event.target.dataset.productId;
            var stripe_id = event.target.dataset.stripeId;
            fetchImages(product_id, stripe_id);
          });
        }

      }else{$('.product_table_body').html('NO PRODUCTS FOUND MATCHING THIS CRITERIA.');}

    }).catch(error => console.error(error));
}

function fetchImages(id, stripe_id) {
  var images = [];
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const data = {
    'id': id
  };
  var raw = JSON.stringify(data);
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch('http://192.168.0.108:3000/products/product-images-id', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.forEach((e) => {
        images.push(e.url);
      });
      deleteProduct(id, images, stripe_id);
    }).catch(error => console.error(error));

}

function deleteProduct(product_id, images_to_delete, stripe_id) {

  console.log(stripe_id, "before sending");
  
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var data = {
    'id': product_id,
    'path': images_to_delete,
    'stripe_id': stripe_id
  };
  var raw = JSON.stringify(data);

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://192.168.0.108:3000/products/delete-product", requestOptions)
    .then(response => response.text())
    .then((result) => {      
      console.log(result);
      $('#product_table').load(document.URL + ' #product_table', () => {
        console.log(clicked_letter, "afterload");
        getProducts(clicked_letter);
      });
    }).catch(error => console.log('error', error));

}


$('.search_products').change(function(event) {
            var query=$(".search_products").val();

            load_search(query);
 
          
      
    });

function   load_search(query){
    
      var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const data = {
    'criteria': query
  };

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://192.168.0.108:3000/products/search-product", requestOptions)
    .then(response => response.json())
    .then(result => {
     if(result.length<1){
         $('.product_table_body').html('NO PRODUCTS FOUND MATCHING THIS CRITERIA.');
      }else{
         $('.product_table_body').html('');
        for (var i = 0; i < result.length; i++) {
            
   /*  var low='';
     var no='';
            if(result[i].quantity<4 && result[i].quantity>0){
               low='low'
               }else if(result[i].quantity<1){
                   no='no'
               }*/
var table = $('.product_table_body')[0];
var row = table.insertRow(0);
  for (const [key, value] of Object.entries(result[i])) {
     
      
      var cell1 = row.insertCell(row.cells.length-1);
      console.log(cell1)
cell1.innerHTML = value;
      
  console.log(`${key}: ${value}`);
}

         
         sortTableByNumbers(5);
         
         
         }
      }
          

      
    
    }).catch(error => console.log('error', error));
    
    
}


function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table =$('.product_table_body')[0];
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
 
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}



function sortTableByNumbers() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table =$('.product_table_body')[0];
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

