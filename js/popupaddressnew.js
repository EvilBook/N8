var modal = document.getElementById("myModalAddress");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var fields=[];

// When the user clicks the button, open the modal 
 function openAddressNew(a) {
     fields=a;
     for(var i=0;i<a.length;i++){
         console.log(a[i].innerHTML);
     }
     var cities;
  modal.style.display = "block";
     fetch('/public/db/bg.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
    cities=myJson;
    
    
     var dropdown=$('#cities1');
     for(var i=0; i<cities.length; i++){
         $('<option value='+cities[i]['city'].toLowerCase()+'>'+cities[i]['city']+'</option>').appendTo(dropdown);
     }
          });
     $('#address1').val(a[0].innerHTML);
     $('#address2').val(a[1].innerHTML);
$('#cities1 option[value='+(a[2].innerHTML).toLowerCase()+']').prop('selected', true);     console.log($('#cities1').val(),(a[2].innerHTML).toLowerCase())
     $('#postcode').val(a[3].innerHTML);
     $('#phonenumber').val(a[4].innerHTML);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
