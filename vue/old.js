var stringArray = [];
var addressArray=[];
var selectedAddress;
var selectedBilling;
var selectedNewShipping={delivery_postcode:"####",delivery_address1:"####",delivery_address2:"####",delivery_city:"####",names1:"####",names2:"####",phonenumber:"####"}
var selectedNewBilling={delivery_postcode:"####",delivery_address1:"####",delivery_address2:"####",delivery_city:"####",names1:"####",names2:"####",phonenumber:"####"}

var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount=4; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = false;
var rotateFn = 'rotateX';
var radius, theta;
var checkoutSequenceCounter=0;
var product_ids=[{Test1:'price_HLhvSREgp7XgDV'}, {Test2:'price_HM3NQJlxKNoMd4'}, {Test3:'price_HLhx2nQ0l8r0do'}, {Test4:'price_HM3OgGZyLcHtYS'}, {Test5:'price_HM3PiRwwN6OnU8'}];
var product_idss=[{Test1:'price_HLhvSREgp7XgDV'}, {Test2:'price_HM3NQJlxKNoMd4'}, {Test3:'price_HLhx2nQ0l8r0do'}, {Test4:'price_HM3OgGZyLcHtYS'}, {Test5:'price_HM3PiRwwN6OnU8'}];

 var searches = document.cookie;
  var id = read_cookie('id');
  var loggedin = read_cookie('loggedin');
  var customerid = read_cookie('customer');
var tempCookieArray=[];

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    rotateFn + '(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
    previousMenu();

});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
    
    if(checkoutSequenceCounter===0){
        if(cartCheck()){
                nextMenu();
        }
    } else if(checkoutSequenceCounter===1){
        
        if(addressCheck()){
                nextMenu();
        }
     }else if(checkoutSequenceCounter===2){
    if(cardCheck()){
    nextMenu();
            populateList();

        }
     }else if(checkoutSequenceCounter===3){
        
     }

});



function changeCarousel() {
  theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel();
}

function onOrientationChange() {
  changeCarousel();
}

// set initials
onOrientationChange();


var div1 = $('.partcart');
var div2 = $('.partaddress');
var div3 = $('.partcard');
var div4 = $('.partfinal');


$('#billing').change(function(){
    var c = this.checked;
    if(c===true){
        $('.billingaddressold').removeAttr('hidden');
        $('.billingaddressdefault').attr('hidden','hidden');
    }else{
        $('.billingaddressold').attr('hidden','hidden');
        $('.billingaddressdefault').removeAttr('hidden');
    }
});






$("#includedContent").load("/public/html/header.html", () => {


  $.getScript("/public/js/header.js", function() {
    start();
      setTitle('YOUR CART');
      

  });
    $("#includedFooter").load("/public/html/footer.html", () => {


  $.getScript("/public/js/footer.js", function() {
    startFooter();

  });
    });


 
    
    


















function price_manipulator() {
    


  var $select = $(".quantity");

  for (i = 1; i <= 100; i++) {
    $select.append($('<option></option>').val(i).html(i));
  }

  for (var i = 0; i < objectArray.length; i++) {
    $("#quantity" + objectArray[i][0]).val(objectArray[i][1]);
  }
  calculatePrice();
}
    

    
    


});


function initializeCheckoutSequence(){
    
    
    var line = $('#line1');
     div1.click(()=>{
        div1.attr('id','sequencepointactive');
        div1.children().text('cart');
        div2.attr('id','sequencepoint');
                 div2.children().text('2');

        div3.attr('id','sequencepoint');
                          div3.children().text('3');

        div4.attr('id','sequencepoint');
                          div4.children().text('4');
         selectedIndex=checkoutSequenceCounter=0;
           rotateCarousel();
         if(checkoutSequenceCounter>0 && checkoutSequenceCounter<3){
                                              nextButton.style.display='';
                                         prevButton.style.display='';


         }
         if(checkoutSequenceCounter<=0){
                    prevButton.style.display='none';
                                 nextButton.style.display='';


    }
    if(checkoutSequenceCounter>=3){
                    nextButton.style.display='none';
                            prevButton.style.display='';


    }


    })
    div2.click(()=>{
        div2.attr('id','sequencepointactive');
        div2.children().text('address and shipping');
        div1.attr('id','sequencepoint');
        div1.children().text('1');

        div3.attr('id','sequencepoint');
                div3.children().text('3');

        div4.attr('id','sequencepoint');
                div4.children().text('4');
         selectedIndex=checkoutSequenceCounter=1;
           rotateCarousel();
        if(checkoutSequenceCounter>0 && checkoutSequenceCounter<3){
                                              nextButton.style.display='';
                                         prevButton.style.display='';


         }
        if(checkoutSequenceCounter<=0){
                    prevButton.style.display='none';
                                 nextButton.style.display='';


    }
    if(checkoutSequenceCounter>=3){
                    nextButton.style.display='none';
                            prevButton.style.display='';


    }

    })
     div3.click(()=>{
        div3.attr('id','sequencepointactive');
                 div3.children().text('card details');

        div1.attr('id','sequencepoint');
                 div1.children().text('1');

        div2.attr('id','sequencepoint');
                 div2.children().text('2');

        div4.attr('id','sequencepoint');
                 div4.children().text('4');
         selectedIndex=checkoutSequenceCounter=2;
           rotateCarousel();
         if(checkoutSequenceCounter>0 && checkoutSequenceCounter<3){
                                              nextButton.style.display='';
                                         prevButton.style.display='';


         }
         if(checkoutSequenceCounter<=0){
                    prevButton.style.display='none';
                                 nextButton.style.display='';


    }
    if(checkoutSequenceCounter>=3){
                    nextButton.style.display='none';
                            prevButton.style.display='';


    }

    })
    div4.click(()=>{
        div4.attr('id','sequencepointactive');
                div4.children().text('finalize');

        div1.attr('id','sequencepoint');
                div1.children().text('1');

        div2.attr('id','sequencepoint');
                div2.children().text('2');

        div3.attr('id','sequencepoint');
                         div3.children().text('3');
         selectedIndex=checkoutSequenceCounter=3;
           rotateCarousel();
        if(checkoutSequenceCounter>0 && checkoutSequenceCounter<3){
                                              nextButton.style.display='';
                                         prevButton.style.display='';


         }
        if(checkoutSequenceCounter<=0){
                    prevButton.style.display='none';
                                 nextButton.style.display='';


    }
    if(checkoutSequenceCounter>=3){
                    nextButton.style.display='none';
                            prevButton.style.display='';


    }

    })

var x1 = div1.offset().left + (0);
var y1 = div1.offset().top + (div1.outerHeight()/2);
var x2 = div4.offset().left + (0);
var y2 = div4.offset().top + (div4.outerHeight()/2);

line.attr('x1',x1).attr('y1',y1).attr('x2',x2).attr('y2',y2);
};  


function moveSequence(){
    if(checkoutSequenceCounter>0){
                    prevButton.style.display='';

    }
    if(checkoutSequenceCounter<3){
                    nextButton.style.display='';

    }
    if(checkoutSequenceCounter===0){
        div1.attr('id','sequencepointactive');
        div1.children().text('cart');
        div2.attr('id','sequencepoint');
                 div2.children().text('2');

        div3.attr('id','sequencepoint');
                          div3.children().text('3');

        div4.attr('id','sequencepoint');
                          div4.children().text('4');
    }else if(checkoutSequenceCounter===1){
        div2.attr('id','sequencepointactive');
        div2.children().text('address and shipping');
        div1.attr('id','sequencepoint');
        div1.children().text('1');

        div3.attr('id','sequencepoint');
                div3.children().text('3');

        div4.attr('id','sequencepoint');
                div4.children().text('4');
    }else if(checkoutSequenceCounter===2){
        div3.attr('id','sequencepointactive');
                 div3.children().text('payment details');

        div1.attr('id','sequencepoint');
                 div1.children().text('1');

        div2.attr('id','sequencepoint');
                 div2.children().text('2');

        div4.attr('id','sequencepoint');
                 div4.children().text('4');
        
    }else if(checkoutSequenceCounter===3){
        div4.attr('id','sequencepointactive');
                div4.children().text('finalize');

        div1.attr('id','sequencepoint');
                div1.children().text('1');

        div2.attr('id','sequencepoint');
                div2.children().text('2');

        div3.attr('id','sequencepoint');
                         div3.children().text('3');
    }
}


function cartCheck(){
    var cartDoneIcon=$('#partCartDone');
    cartDoneIcon.removeAttr('hidden');
    return true;
}
function addressCheck(){
    var requiredFields=$('.required.shipping_address');
    var error=false;
    if(loggedin==1 && (selectedAddress!==undefined) && selectedAddress.dataset.age==='old'){
        if(selectedAddress!==undefined){
            return true;
        }else{
            return false;
        }
    }else{
    for(var i=0; i<requiredFields.length;i++){
        if(requiredFields[i].classList.contains('empty') || requiredFields[i].value.length <1){
            error=true;
                        requiredFields[i].classList.add('error');
                        $(requiredFields[i].dataset.errorId).removeAttr('hidden');
                        $(requiredFields[i].dataset.errorId).html('Field cannot be empty!');

        }
    }
           var addressErrorIcon=$('#partAddressError');
        var addressDoneIcon=$('#partAddressDone');


    if(error){
    addressErrorIcon.removeAttr('hidden');
            addressDoneIcon.attr('hidden', 'hidden');

    return false; 
    }else if(!error){
    addressDoneIcon.removeAttr('hidden');
    addressErrorIcon.attr('hidden', 'hidden');
        populateOld();
    return true;
        }
    else{
    addressErrorIcon.removeAttr('hidden');
                    addressDoneIcon.attr('hidden', 'hidden');

    return false; 
    }
    }
    
}
function cardCheck(){
    var card_details=$('.card_details');
    //var isBilling=document.getElementById('billing');
    var c = false;//isBilling.checked;
    var requiredFields=$('.required.billing_address');
    var error=false;
    
     var error=false;
    if(loggedin==1 && (selectedBilling!==undefined) && selectedBilling.dataset.age==='old'){
        if(selectedBilling!==undefined){
            return true;
        }else{
            return false;
        }
    }else{
    

   for(var i=0; i<requiredFields.length;i++){
        if(requiredFields[i].classList.contains('empty') || requiredFields[i].value.length <1){
            error=true;
                        requiredFields[i].classList.add('error');
                        $(requiredFields[i].dataset.errorId).removeAttr('hidden');
                        $(requiredFields[i].dataset.errorId).html('Field cannot be empty!');

        }
    }
    
        var cardDoneIcon=$('#partCardDone');
           var cardErrorIcon=$('#partCardError');

    if(error){
        cardDoneIcon.removeAttr('hidden');
    cardDoneIcon.attr('hidden', 'hidden');
    cardErrorIcon.removeAttr('hidden');
    return false;
    }else if(!error){
    cardDoneIcon.removeAttr('hidden');
        
        
    cardErrorIcon.attr('hidden', 'hidden');
    return true;
        }
    else{
            cardDoneIcon.removeAttr('hidden');
    cardDoneIcon.attr('hidden', 'hidden');

    cardErrorIcon.removeAttr('hidden');
    return false;
    }
    }
    
}
function nextMenu(){
     if(checkoutSequenceCounter<3){
                            nextButton.style.display='';

         selectedIndex++;
  rotateCarousel();
        prevButton.removeAttribute('hidden');

            checkoutSequenceCounter=(checkoutSequenceCounter+1)%4;


        moveSequence();
}else{
                nextButton.style.display='none';

}
    
    
}
function previousMenu(){
    if(checkoutSequenceCounter>0){
  selectedIndex--;
  rotateCarousel();

            checkoutSequenceCounter=(Math.abs(checkoutSequenceCounter-1))%4;
moveSequence();
        }else{
            prevButton.style.display='none';
        }
    
    
}
function populateOld(){
    //var isBilling=document.getElementById('billing');
    var c = false; //isBilling.checked;
    if(c===true){
        $('.billingaddressold').removeAttr('hidden');
        $('.billingaddressdefault').attr('hidden','hidden');
         var requiredFieldsBilling=$('.auto.billing_address');
for(var i=0; i<requiredFieldsBilling.length; i++){
    requiredFieldsBilling[i].innerHTML=requiredFields[i].value;
    
}
    }else{
        $('.billingaddressold').attr('hidden','hidden');
        $('.billingaddressdefault').removeAttr('hidden');
    }
}


var required=$('.required');
var errorScript=function(event){
        var e=event.target;
        if(e.value===''){
            e.classList.add('error');
        }else{
            e.classList.remove('error');
        }
    }
for(var i=0;i<required.length; i++){
    required[i].addEventListener('input',errorScript)
     required[i].addEventListener("focusout", errorScript); 
    
    
    
    
}


function  populateList(){
    
    if(selectedAddress.dataset.age==='old'){
    
    
    var tempShipping=$(selectedAddress).clone();
    tempShipping.children('.shipping-cover').remove()
    $('.final-shipping').html('');
    tempShipping.appendTo($('.final-shipping'));
    }
    
     if(selectedBilling.dataset.age==='old'){
    
    
    var tempBilling=$(selectedBilling).clone();
    tempBilling.children('.billing-cover').remove()
    $('.final-billing').html('');
    tempBilling.appendTo($('.final-billing'));
    }
    
      if(selectedAddress.dataset.age==='new'){
    
    
    var tempShipping=$('<div class="shipping-new selected" data-age="new"  data-address="{&quot;delivery_postcode&quot;:&quot;'+selectedNewShipping.delivery_postcode+'&quot;,&quot;delivery_address1&quot;:&quot;'+selectedNewShipping.delivery_address1+'&quot;,&quot;delivery_address2&quot;:&quot;'+selectedNewShipping.delivery_address2+'&quot;,&quot;delivery_city&quot;:&quot;'+selectedNewShipping.delivery_city+'&quot;,&quot;names1&quot;:&quot;'+selectedNewShipping.names1+'&quot;,&quot;names2&quot;:&quot;'+selectedNewShipping.names2+'&quot;,&quot;phonenumber&quot;:&quot;'+selectedNewShipping.phonenumber+'&quot;}"><div class="shipping-button"> <input type="radio" class="shit custom-radio-standard address-radio shipping-radio" name="shipping-radio" id="shipping-'+('-1')+'" value="new" tabindex="20" checked="checked"></div><div class="shipping-info"><div class="shipping-name"> '+selectedNewShipping.names1+' '+selectedNewShipping.names2+'</div><div class="shipping-address">'+selectedNewShipping.delivery_address1+' '+selectedNewShipping.delivery_address2+'</div><div class="shipping-address">'+selectedNewShipping.delivery_city+', '+selectedNewShipping.delivery_postcode+'</div><div class="shipping-address">'+selectedNewShipping.phonenumber+'</div></div> </div>');
                       
    $('.final-shipping').html('');
    tempShipping.appendTo($('.final-shipping'));
    }
    
     if(selectedBilling.dataset.age==='new'){
    
    
    var tempBilling=$('<div class="billing-new selected" data-age="new"  data-address="{&quot;delivery_postcode&quot;:&quot;'+selectedNewBilling.delivery_postcode+'&quot;,&quot;delivery_address1&quot;:&quot;'+selectedNewBilling.delivery_address1+'&quot;,&quot;delivery_address2&quot;:&quot;'+selectedNewBilling.delivery_address2+'&quot;,&quot;delivery_city&quot;:&quot;'+selectedNewBilling.delivery_city+'&quot;,&quot;names1&quot;:&quot;'+selectedNewBilling.names1+'&quot;,&quot;names2&quot;:&quot;'+selectedNewBilling.names2+'&quot;,&quot;phonenumber&quot;:&quot;'+selectedNewBilling.phonenumber+'&quot;}"><div class="billing-button"> <input type="radio" class="shit custom-radio-standard address-radio billing-radio" name="billing-radio" id="billing-'+('-1')+'" value="new" tabindex="20" checked="checked"></div><div class="billing-info"><div class="billing-name"> '+selectedNewBilling.names1+' '+selectedNewBilling.names2+'</div><div class="billing-address">'+selectedNewBilling.delivery_address1+' '+selectedNewBilling.delivery_address2+'</div><div class="billing-address">'+selectedNewBilling.delivery_city+', '+selectedNewBilling.delivery_postcode+'</div><div class="billing-address">'+selectedNewBilling.phonenumber+'</div></div> </div>');
        
    $('.final-billing').html('');
    tempBilling.appendTo($('.final-billing'));
    }
    
    
    
  /*  var table=document.getElementById('simple_body');
    var itemsList=$('.cart_item');
    for(var i=0;i<itemsList.length;i++){
        
        var row=table.insertRow(0);
        var cell=row.insertCell(0);
        cell.innerHTML='<p>'+itemsList[i].dataset.itemName+'</p>';
        cell=row.insertCell(1);
        cell.innerHTML='<p>'+itemsList[i].dataset.itemPrice+'</p>';
        cell=row.insertCell(2);
        cell.innerHTML='<p>'+itemsList[i].dataset.itemQuantity+'</p>';
        cell=row.insertCell(3);
        cell.innerHTML='<p>20%</p>';
        
        
    }
    var row=table.insertRow(table.rows.length);
    var cell=row.insertCell(0);
    cell=row.insertCell(1);
    cell=row.insertCell(2);
    cell=row.insertCell(3);
    cell=row.insertCell(4);
    cell.innerHTML='<p>'+$('.total').text()+'</p>';
   
    
    var table=$('.shipping_address_checkout');
    var relevant=table.children('.auto')
    var old=$('.required.shipping_address');
    for(var i=0; i<relevant.length;i++){
        relevant[i].innerHTML=old[i].value;
    }
    
     
    var table=$('.billing_address_checkout');
    var relevant=table.children('.auto')
    
    var old;
var isBilling=document.getElementById('billing');
    var c = isBilling.checked;
    if(c===true){
           old=$('.auto.billing_address');
        for(var i=0; i<relevant.length;i++){
        relevant[i].innerHTML=old[i].innerHTML;
    }
 
    }
    else{
            old=$('.required.billing_address');
        for(var i=0; i<relevant.length;i++){
        relevant[i].innerHTML=old[i].value;
    }

    }
     */
    
 /*   
    var table=$('.card_checkout');
    var relevant=table.children('.auto')
    var old=$('.card_details');
    for(var i=0; i<relevant.length;i++){
        relevant[i].innerHTML=old[i].value;
    }*/
    
    
    
}
/*var month_slc = document.getElementById('expiration_month');
var year_slc = document.getElementById('expiration_year');


  var months = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  for (var i = 0; i < months.length; i++) {
    var opt = months[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    month_slc.appendChild(el);
  }


  for (var i = 20; i < 51; i++) {
    var opt = i;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    year_slc.appendChild(el);
  }*/


var cities_slc = document.querySelectorAll('#bulgarian_cities');

var array=[];
  fetch('/public/db/bg.json')
    .then(response => response.json())
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        array.push(data[i].city);
      }
      for (var j = 0; j < array.length; j++) {
        var opt = array[j];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        cities_slc[0].appendChild(el);
          var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        cities_slc[1].appendChild(el);
      }
    });








    
    var time= new Date();
    var randHex = function(len) {
  var maxlen = 8,
      min = Math.pow(16,Math.min(len,maxlen)-1) 
      max = Math.pow(16,Math.min(len,maxlen)) - 1,
      n   = Math.floor( Math.random() * (max-min+1) ) + min,
      r   = n.toString(16);
  while ( r.length < len ) {
     r = r + randHex( len - maxlen );
  }
        
  return r;
};
    


function setPage(result){
    
    var shit=window.open('about:blank', '','_blank');
    
    shit.document.write(result);
    
    
}




function read_cookie(key) {
  var result;
  return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}



function createCart(products) {
    $('#items').html('');

    var cardDiv;
    var product_id;

    for (var i = 0; i < products.length; i++) {
      product_id = products[i].id + products[i].color;
        tempCookieArray.push({id:products[i].id, quantity:products[i].quantity, color:products[i].color})

      cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "item");
        cardDiv.classList.add('cart_item');
        cardDiv.setAttribute('data-item-name',products[i].name);
        cardDiv.setAttribute('data-item-quantity',objectArray[i][1]);
        cardDiv.setAttribute('data-item-price',products[i].price);
      cardDiv.setAttribute("id", "item" + product_id);
      document.getElementById("items").appendChild(cardDiv);

      cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "left");
      cardDiv.setAttribute("id", "left" + product_id);
      document.getElementById("item" + product_id).appendChild(cardDiv);

      cardDiv = document.createElement("img");
      cardDiv.setAttribute("class", "productimage");
      cardDiv.setAttribute("data-redirect", products[i].id);
      if(products[i].image_name!==null){
    cardDiv.setAttribute("src", 'http://192.168.0.107:3000'+products[i].image_url);
        }else{

        }

    $(cardDiv).on("error", function(){
        $(this).attr('src', 'http://192.168.0.107:3000/public/product_images/default.png');
    });
        cardDiv.addEventListener('click',function(e){window.location.replace('/public/path/item.html?'+e.target.dataset.redirect)})
      document.getElementById("left" + product_id).appendChild(cardDiv);

      cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "right");
      cardDiv.setAttribute("id", "right" + product_id);
      document.getElementById("item" + product_id).appendChild(cardDiv);

      cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "right");
      cardDiv.setAttribute("id", "right" + product_id);
      document.getElementById("item" + product_id).appendChild(cardDiv);

      cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "leftinfo");
      cardDiv.setAttribute("id", "leftinfo" + product_id);
      document.getElementById("right" + product_id).appendChild(cardDiv);

      cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "rightinfo");
      cardDiv.setAttribute("id", "rightinfo" + product_id);
      document.getElementById("right" + product_id).appendChild(cardDiv);

      cardDiv = document.createElement("p");
      cardDiv.setAttribute("class", "title");
      cardDiv.innerHTML = products[i].name;
      document.getElementById("leftinfo" + product_id).appendChild(cardDiv);

      cardDiv = document.createElement("p");
      cardDiv.innerHTML = 'Color/Material: ' + products[i].color;
      document.getElementById("leftinfo" + product_id).appendChild(cardDiv);

      cardDiv = document.createElement("p");
      cardDiv.setAttribute('class', 'removeItem');
      cardDiv.innerHTML = 'remove item';
      cardDiv.setAttribute('data-item-id', products[i].id);
      cardDiv.setAttribute('data-item-color', products[i].color);
      cardDiv.setAttribute('data-item-quantity', products[i].quantity);
      $(cardDiv).click(() => {
        removeItem(event.target.dataset.itemId, event.target.dataset.itemQuantity, event.target.dataset.itemColor);
      });
      document.getElementById("leftinfo" + product_id).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");
      cardDiv.setAttribute('id', 'price' + product_id);
      cardDiv.innerHTML ='Price: <span id="price' + product_id+'span" >'+products[i].price+'</span>$';
      document.getElementById("rightinfo" + product_id).appendChild(cardDiv);
        

      cardDiv = document.createElement("select");
      cardDiv.setAttribute("class", "quantity");
      cardDiv.setAttribute("id", "quantity" + product_id);
      cardDiv.setAttribute("data-product",product_id);
         cardDiv.setAttribute('data-item-id', products[i].id);
      cardDiv.setAttribute('data-item-color', products[i].color);
      cardDiv.addEventListener('input', () => {
        //update(event.target.getAttribute('id'), event.target.value);
      });
      document.getElementById("rightinfo" + product_id).appendChild(cardDiv);
var $dropdown = $('#quantity' + product_id);
for(var q=1; q<30; q++) {
    $dropdown.append($("<option />").val(q).text('QTY: '+q));
}
        $dropdown.val(products[i].quantity);
        $dropdown.change(function(e){
        
            $("#total" + e.target.dataset.product).html('Total: <span class="totalspan">'+((+$("#price" + e.currentTarget.dataset.product+'span').html())*(+e.currentTarget.value))+'</span>$');
                            console.log(tempCookieArray)

            for(var iii=0; iii<tempCookieArray.length; iii++){
                if(tempCookieArray[iii].id==e.currentTarget.dataset.itemId && tempCookieArray[iii].color===e.currentTarget.dataset.itemColor){
                
                tempCookieArray[iii].quantity=e.currentTarget.value;
                    console.log(tempCookieArray[iii])
                
            }
                
                
                }
fixArray();            
            
        })
        
        
             cardDiv = document.createElement("p");
      cardDiv.setAttribute('id', 'total' + product_id);
      cardDiv.setAttribute('style', 'border-top: 1px solid #00000044; font-size: 18px; padding-top: 4px;');
      cardDiv.innerHTML ='Total: <span class="totalspan">'+((+products[i].price)*(+products[i].quantity))+'</span>$';
      document.getElementById("rightinfo" + product_id).appendChild(cardDiv);
        
        
      
    }
    
    
    calculatePrice();
    
    


}



function removeItem(id, quantity, color) {



  for (var i = 0; i < tempCookieArray.length; i++) {


    if (tempCookieArray[i].id == id && tempCookieArray[i].color === color) {
      tempCookieArray.splice(i, 1);

    }
  }

  $("#item" + id + color).fadeOut("slow", function() {
    $(this).parentNode.removeChild(removeTarget);
  });
  fixArray();




}


function fixArray() {
  var newStringArray = [];

  for (var i = 0; i < tempCookieArray.length; i++) {
    newStringArray.push(tempCookieArray[i].id + ':' + tempCookieArray[i].quantity + ':' + tempCookieArray[i].color);
  }



  var now = new Date();
    now.setFullYear(now.getFullYear() + 2);
    document.cookie = "items=" + newStringArray + "; expires=" + now.toUTCString() + "; " + "path=/";
    
    tempCookieArray=[];
    Reload();
    calculatePrice();
    
}


function calculatePrice() {

  var vat = 20;
  var shipping = Math.floor(Math.random() * (20 - 4) + 4);
  var sum = 0;
  var temmpsum;
  var quantity;
  var price;
    var totals=$('.totalspan');
    
    for(var i=0; i<totals.length; i++){
        
        sum+=(+totals[i].innerHTML);
        
    }





  $('.subtotal').text('Subtotal: ' + sum + '$');
  $('.shipping').text('Shipping: ' + 8 + '$');
  $('.vat').text('VAT: ' + 20 + '%');
  $('.total').html('Total: <span class="totaltotal">' + (sum + (sum * 0.2) + shipping) + '</span>$');

}
if(loggedin==='1'){
fetchCustomer();
}else if(loggedin==='0'){
fetchCustomerNew();
}
function fetchCustomer(){
    
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const data = {
    'id': customerid
  };

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://192.168.0.107:3000/users/get-customer-by-id", requestOptions)
    .then(response => response.json())
    .then((result) => {
      fetchAddress(result);
    })
    .catch(error => console.log('error', error));
    
    
}


function fetchAddress(customer){
          var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const data = {
    'id': customerid
  };

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://192.168.0.107:3000/addresses/customer-address-id", requestOptions)
    .then(response => response.json())
    .then((result) => {
      console.log(result, customer);
      addAddresses(result, customer);
    })
    .catch(error => console.log('error', error));
}


function addAddresses(addresses, customer){
    
    var $shippingAddress=$('.shippingaddress');
    var $billingAddress=$('.billingaddressdefault');
    $shippingAddress.html('<h4>Select shipping address below</h4>');
    $billingAddress.html('<h4>Select billing address below</h4>');
var isShipping=false;
    
    for(var i=0; i<addresses.length; i++){
        isShipping=addresses[i].shipping ? true : false
        
        var $tempdiv=$('<div class="shipping-old" data-age="old"  data-address="{&quot;delivery_postcode&quot;:&quot;'+addresses[i].postcode+'&quot;,&quot;delivery_address1&quot;:&quot;'+addresses[i].name+'&quot;,&quot;delivery_address2&quot;:&quot;'+addresses[i].second_name+'&quot;,&quot;delivery_city&quot;:&quot;'+addresses[i].city+'&quot;,&quot;names1&quot;:&quot;'+customer[0].first_name+'&quot;,&quot;names2&quot;:&quot;'+customer[0].last_name+'&quot;,&quot;phonenumber&quot;:&quot;'+addresses[i].phone_number+'&quot;}"><div class="shipping-cover"></div><div class="shipping-button"> <input type="radio" class="shit custom-radio-standard address-radio shipping-radio" name="shipping-radio" id="shipping-'+i+'" value="'+addresses[i].id+'" tabindex="20" '+(isShipping ? ' checked="checked"' : '')+'></div><div class="shipping-info"><div class="shipping-name"> '+customer[0].first_name+' '+customer[0].last_name+'</div><div class="shipping-address">'+addresses[i].name+addresses[i].second_name+'</div><div class="shipping-address">'+addresses[i].city+', '+addresses[i].postcode+'</div><div class="shipping-address">'+addresses[i].phone_number+'</div></div> </div>').appendTo($shippingAddress);

   if(isShipping){
     $tempdiv.addClass('selected');
       selectedAddress=$tempdiv[0];
       isShipping=false;
   }
        
        
        
        
        
             
        $('<div class="billing-old" data-age="old"  data-address="{&quot;delivery_postcode&quot;:&quot;'+addresses[i].postcode+'&quot;,&quot;delivery_address1&quot;:&quot;'+addresses[i].name+'&quot;,&quot;delivery_address2&quot;:&quot;'+addresses[i].second_name+'&quot;,&quot;delivery_city&quot;:&quot;'+addresses[i].city+'&quot;,&quot;names1&quot;:&quot;'+customer[0].first_name+'&quot;,&quot;names2&quot;:&quot;'+customer[0].last_name+'&quot;,&quot;phonenumber&quot;:&quot;'+addresses[i].phone_number+'&quot;}"><div class="billing-cover"></div><div class="shipping-button"> <input type="radio" class="shit custom-radio-standard address-radio shipping-radio" name="billing-radio" id="shipping-'+i+'" value="'+addresses[i].id+'" tabindex="20"></div><div class="shipping-info"><div class="shipping-name"> '+customer[0].first_name+' '+customer[0].last_name+'</div><div class="shipping-address">'+addresses[i].name+addresses[i].second_name+'</div><div class="shipping-address">'+addresses[i].city+', '+addresses[i].postcode+'</div><div class="shipping-address">'+addresses[i].phone_number+'</div></div> </div>').appendTo($billingAddress);
       

        
    }
    
    
    $('<div class="shipping-new" data-age="new"  data-address="{&quot;delivery_postcode&quot;:&quot;"####"&quot;,&quot;delivery_address1&quot;:&quot;"####"&quot;,&quot;delivery_address2&quot;:&quot;"####"&quot;,&quot;delivery_city&quot;:&quot;"####"&quot;,&quot;names1&quot;:&quot;"####"&quot;,&quot;names2&quot;:&quot;"####"&quot;,&quot;phonenumber&quot;:&quot;"####"&quot;}"><div class="shipping-cover"></div><div class="shipping-button"> <input type="radio" class="shit custom-radio-standard address-radio shipping-radio" name="shipping-radio" id="shipping-'+'-1'+'" value="" tabindex="20"></div><div class="shipping-info"><div class="shipping-name">Use a different shipping address</div><div class="shipping-address"></div><div class="shipping-address"></div><div class="shipping-address"></div></div> </div>').appendTo($shippingAddress);
    
            
   $('<div class="billing-new" data-age="new"  data-address="{&quot;delivery_postcode&quot;:&quot;"####"&quot;,&quot;delivery_address1&quot;:&quot;"####"&quot;,&quot;delivery_address2&quot;:&quot;"####"&quot;,&quot;delivery_city&quot;:&quot;"####"&quot;,&quot;names1&quot;:&quot;"####"&quot;,&quot;names2&quot;:&quot;"####"&quot;,&quot;phonenumber&quot;:&quot;"####"&quot;}"><div class="billing-cover"></div><div class="shipping-button"> <input type="radio" class="shit custom-radio-standard address-radio shipping-radio" name="billing-radio" id="shipping-'+'-1'+'" value="" tabindex="20"></div><div class="shipping-info"><div class="shipping-name">Use a different billing address</div><div class="shipping-address"></div><div class="shipping-address"></div><div class="shipping-address"></div></div> </div>').appendTo($billingAddress);
      

    
    
    $('<div hidden class="shipping_new"><h3>New shipping address</h3><div class="shippingaddress"><div class="input"><p class="new_address_title">First name</p><p hidden class="error_address first_name" id="error_shipping_address_first_name">Error</p> <input type="text" data-relevance="names1"  placeholder="First name" class="required shipping_address first_name" data-error-id="#error_shipping_address_first_name" /></div><div class="input"><p class="new_address_title">Last Name</p><p hidden class="error_address last_name" id="error_shipping_address_last_name">Error</p> <input type="text" data-relevance="names2"  placeholder="Last name" class="required shipping_address last_name" data-error-id="#error_shipping_address_last_name" /></div><div class="input"><p class="new_address_title">City</p><p hidden class="error_address city" id="error_shipping_address_city">Error</p> <select  data-relevance="delivery_city" id="bulgarian_cities" class="required shipping_address city" style="width: 90px;" data-error-id="#error_shipping_address_city"><option id="default_city"></option><option value="Sofia">Sofia</option><option value="Plovdiv">Plovdiv</option><option value="Varna">Varna</option><option value="Burgas">Burgas</option><option value="Ruse">Ruse</option><option value="Stara Zagora">Stara Zagora</option><option value="Pleven">Pleven</option><option value="Sliven">Sliven</option><option value="Dobrich">Dobrich</option><option value="Shumen">Shumen</option><option value="Pernik">Pernik</option><option value="Haskovo">Haskovo</option><option value="Vratsa">Vratsa</option><option value="Kyustendil">Kyustendil</option><option value="Montana">Montana</option><option value="Lovech">Lovech</option><option value="Razgrad">Razgrad</option><option value="Borino">Borino</option><option value="Madan">Madan</option><option value="Zlatograd">Zlatograd</option><option value="Pazardzhik">Pazardzhik</option><option value="Smolyan">Smolyan</option><option value="Blagoevgrad">Blagoevgrad</option><option value="Nedelino">Nedelino</option><option value="Rudozem">Rudozem</option><option value="Devin">Devin</option><option value="Veliko Tarnovo">Veliko Tarnovo</option><option value="Vidin">Vidin</option><option value="Kirkovo">Kirkovo</option><option value="Krumovgrad">Krumovgrad</option><option value="Dzhebel">Dzhebel</option><option value="Silistra">Silistra</option><option value="Sarnitsa">Sarnitsa</option><option value="Shiroka Laka">Shiroka Laka</option><option value="Yambol">Yambol</option><option value="Dospat">Dospat</option><option value="Kardzhali">Kardzhali</option><option value="Gabrovo">Gabrovo</option><option value="Targovishte">Targovishte</option> </select></div><p class="new_address_title">Phone number</p><p hidden class="error_address phone_number" id="error_shipping_address_phone_number">Error</p> <input type="text" data-relevance="phonenumber"  placeholder="+359 XXX XX XXX" class="required shipping_address phone_number" data-error-id="#error_shipping_address_phone_number" /></div><div class="input"><p class="new_address_title">Address line 1</p><p hidden class="error_address address1" id="error_shipping_address_address1">Error</p> <input type="text" data-relevance="delivery_address1"  placeholder="bul. Kliment Ohrisdski 65e" class="required shipping_address address1" data-error-id="#error_shipping_address_address1" /></div><div class="input"><p class="new_address_title">Address line 2</p><p hidden class="error_address address2" id="error_shipping_address_address2">Error</p> <input type="text" data-relevance="delivery_address2"  placeholder="floor 2, ap. 3, brown door" class="required shipping_address address2" data-error-id="#error_shipping_address_address2" /></div><div class="input"><p class="new_address_title">Postcode</p><p hidden class="error_address postcode" id="error_shipping_address_postcode">Error</p> <input type="text" data-relevance="delivery_postcode"  placeholder="1762" class="required shipping_address postcode" data-error-id="#error_shipping_address_postcode" /></div></div>').appendTo($shippingAddress);
    
    $('<div hidden class="billing_new"><h3>New billing address</h3><div class="billingaddress"><div class="input"><p class="new_address_title">First name</p><p hidden class="error_address first_name" id="error_billing_address_first_name">Error</p> <input type="text" data-relevance="names1"  placeholder="First name" class="required billing_address first_name" data-error-id="#error_billing_address_first_name" /></div><div class="input"><p class="new_address_title">Last Name</p><p hidden class="error_address last_name" id="error_billing_address_last_name">Error</p> <input type="text" data-relevance="names2"  placeholder="Last name" class="required billing_address last_name" data-error-id="#error_billing_address_last_name" /></div><div class="input"><p class="new_address_title">City</p><p hidden class="error_address city" id="error_billing_address_city">Error</p> <select data-relevance="delivery_city" id="bulgarian_cities" class="required billing_address city" style="width: 90px;" data-error-id="#error_billing_address_city"><option id="default_city"></option><option value="Sofia">Sofia</option><option value="Plovdiv">Plovdiv</option><option value="Varna">Varna</option><option value="Burgas">Burgas</option><option value="Ruse">Ruse</option><option value="Stara Zagora">Stara Zagora</option><option value="Pleven">Pleven</option><option value="Sliven">Sliven</option><option value="Dobrich">Dobrich</option><option value="Shumen">Shumen</option><option value="Pernik">Pernik</option><option value="Haskovo">Haskovo</option><option value="Vratsa">Vratsa</option><option value="Kyustendil">Kyustendil</option><option value="Montana">Montana</option><option value="Lovech">Lovech</option><option value="Razgrad">Razgrad</option><option value="Borino">Borino</option><option value="Madan">Madan</option><option value="Zlatograd">Zlatograd</option><option value="Pazardzhik">Pazardzhik</option><option value="Smolyan">Smolyan</option><option value="Blagoevgrad">Blagoevgrad</option><option value="Nedelino">Nedelino</option><option value="Rudozem">Rudozem</option><option value="Devin">Devin</option><option value="Veliko Tarnovo">Veliko Tarnovo</option><option value="Vidin">Vidin</option><option value="Kirkovo">Kirkovo</option><option value="Krumovgrad">Krumovgrad</option><option value="Dzhebel">Dzhebel</option><option value="Silistra">Silistra</option><option value="Sarnitsa">Sarnitsa</option><option value="Shiroka Laka">Shiroka Laka</option><option value="Yambol">Yambol</option><option value="Dospat">Dospat</option><option value="Kardzhali">Kardzhali</option><option value="Gabrovo">Gabrovo</option><option value="Targovishte">Targovishte</option> </select></div><p class="new_address_title">Phone number</p><p hidden class="error_address phone_number" id="error_billing_address_phone_number">Error</p> <input type="text" data-relevance="phonenumber"  placeholder="+359 XXX XX XXX" class="required billing_address phone_number" data-error-id="#error_billing_address_phone_number" /></div><div class="input"><p class="new_address_title">Address line 1</p><p hidden class="error_address address1" id="error_billing_address_address1">Error</p> <input type="text" data-relevance="delivery_address1"  placeholder="bul. Kliment Ohrisdski 65e" class="required billing_address address1" data-error-id="#error_billing_address_address1" /></div><div class="input"><p class="new_address_title">Address line 2</p><p hidden class="error_address address2" id="error_billing_address_address2">Error</p> <input type="text" data-relevance="delivery_address2"  placeholder="floor 2, ap. 3, brown door" class="required billing_address address2" data-error-id="#error_billing_address_address2" /></div><div class="input"><p class="new_address_title">Postcode</p><p hidden class="error_address postcode" id="error_billing_address_postcode">Error</p> <input type="text" data-relevance="delivery_postcode"  placeholder="1762" class="required billing_address postcode" data-error-id="#error_billing_address_postcode" /></div></div>').appendTo($billingAddress);
    
    

    
          addressArray=$('.shipping-cover');
    for(var i=0; i<addressArray.length; i++){
  
        addressArray[i].addEventListener('click', function(){event.target.parentNode.classList.add('selected');
    event.target.parentNode.childNodes[1].childNodes[1].setAttribute('checked', 'checked');
    if(selectedAddress!==undefined){
      
     selectedAddress.classList.remove('selected');
     selectedAddress.childNodes[1].childNodes[1].removeAttribute('checked');
   }
    selectedAddress=event.target.parentNode;
                                                             if(event.target.parentNode.dataset.age==='new'){
                                                                 $('.shipping_new').removeAttr('hidden');
                                                             }
                                                            });
    
    }
    
    
    
             addressArray=$('.billing-cover');
    for(var i=0; i<addressArray.length; i++){
  
        addressArray[i].addEventListener('click', function(){event.target.parentNode.classList.add('selected');
    event.target.parentNode.childNodes[1].childNodes[1].setAttribute('checked', 'checked');
    if(selectedBilling!==undefined){
      
     selectedBilling.classList.remove('selected');
     selectedBilling.childNodes[1].childNodes[1].removeAttribute('checked');
   }
    selectedBilling=event.target.parentNode;
                                                             console.log(event.target.parentNode.dataset.age)
                                                             if(event.target.parentNode.dataset.age==='new'){
                                                                 $('.billing_new').removeAttr('hidden');
                                                             }
                                                            });
    
    }
    
    
        $('.required.shipping_address').change(function (e){
            selectedNewShipping[e.target.dataset.relevance]=e.target.value;
            
        });
           $('.required.billing_address').change(function (e){
            selectedNewBilling[e.target.dataset.relevance]=e.target.value;
            
        });

    
    
 

    
    
}



function fetchCustomerNew(){
        var $shippingAddress=$('.shippingaddress');
    var $billingAddress=$('.billingaddressdefault');
    $shippingAddress.html('<h4>Select shipping address below</h4>');
    $billingAddress.html('<h4>Select billing address below</h4>');
        
    
    var tempShipping=$('<div class="shipping-new selected" data-age="new"  data-address="{&quot;delivery_postcode&quot;:&quot;"####"&quot;,&quot;delivery_address1&quot;:&quot;"####"&quot;,&quot;delivery_address2&quot;:&quot;"####"&quot;,&quot;delivery_city&quot;:&quot;"####"&quot;,&quot;names1&quot;:&quot;"####"&quot;,&quot;names2&quot;:&quot;"####"&quot;,&quot;phonenumber&quot;:&quot;"####"&quot;}"><div class="shipping-cover"></div><div class="shipping-button"> <input type="radio" class="shit custom-radio-standard address-radio shipping-radio" name="shipping-radio" id="shipping-'+'-1'+'" value="" tabindex="20" checked="checked"></div><div class="shipping-info"><div class="shipping-name">Use a different shipping address</div><div class="shipping-address"></div><div class="shipping-address"></div><div class="shipping-address"></div></div> </div>');
    tempShipping.appendTo($shippingAddress);
    
    selectedAddress=tempShipping[0];
    
    
    
            
   var tempBilling=$('<div class="billing-new selected" data-age="new"  data-address="{&quot;delivery_postcode&quot;:&quot;"####"&quot;,&quot;delivery_address1&quot;:&quot;"####"&quot;,&quot;delivery_address2&quot;:&quot;"####"&quot;,&quot;delivery_city&quot;:&quot;"####"&quot;,&quot;names1&quot;:&quot;"####"&quot;,&quot;names2&quot;:&quot;"####"&quot;,&quot;phonenumber&quot;:&quot;"####"&quot;}"><div class="billing-cover"></div><div class="shipping-button"> <input type="radio" class="shit custom-radio-standard address-radio shipping-radio" name="billing-radio" id="shipping-'+'-1'+'" value="" tabindex="20" checked="checked"></div><div class="shipping-info"><div class="shipping-name">Use a different billing address</div><div class="shipping-address"></div><div class="shipping-address"></div><div class="shipping-address"></div></div> </div>');
    tempBilling.appendTo($billingAddress);
    
        selectedBilling=tempBilling[0];

      

    
    
    $('<div class="shipping_new"><h3>New shipping address</h3><div class="shippingaddress"><div class="input"><p class="new_address_title">First name</p><p hidden class="error_address first_name" id="error_shipping_address_first_name">Error</p> <input type="text" data-relevance="names1"  placeholder="First name" class="required shipping_address first_name" data-error-id="#error_shipping_address_first_name" /></div><div class="input"><p class="new_address_title">Last Name</p><p hidden class="error_address last_name" id="error_shipping_address_last_name">Error</p> <input type="text" data-relevance="names2"  placeholder="Last name" class="required shipping_address last_name" data-error-id="#error_shipping_address_last_name" /></div><div class="input"><p class="new_address_title">City</p><p hidden class="error_address city" id="error_shipping_address_city">Error</p> <select  data-relevance="delivery_city" id="bulgarian_cities" class="required shipping_address city" style="width: 90px;" data-error-id="#error_shipping_address_city"><option id="default_city"></option><option value="Sofia">Sofia</option><option value="Plovdiv">Plovdiv</option><option value="Varna">Varna</option><option value="Burgas">Burgas</option><option value="Ruse">Ruse</option><option value="Stara Zagora">Stara Zagora</option><option value="Pleven">Pleven</option><option value="Sliven">Sliven</option><option value="Dobrich">Dobrich</option><option value="Shumen">Shumen</option><option value="Pernik">Pernik</option><option value="Haskovo">Haskovo</option><option value="Vratsa">Vratsa</option><option value="Kyustendil">Kyustendil</option><option value="Montana">Montana</option><option value="Lovech">Lovech</option><option value="Razgrad">Razgrad</option><option value="Borino">Borino</option><option value="Madan">Madan</option><option value="Zlatograd">Zlatograd</option><option value="Pazardzhik">Pazardzhik</option><option value="Smolyan">Smolyan</option><option value="Blagoevgrad">Blagoevgrad</option><option value="Nedelino">Nedelino</option><option value="Rudozem">Rudozem</option><option value="Devin">Devin</option><option value="Veliko Tarnovo">Veliko Tarnovo</option><option value="Vidin">Vidin</option><option value="Kirkovo">Kirkovo</option><option value="Krumovgrad">Krumovgrad</option><option value="Dzhebel">Dzhebel</option><option value="Silistra">Silistra</option><option value="Sarnitsa">Sarnitsa</option><option value="Shiroka Laka">Shiroka Laka</option><option value="Yambol">Yambol</option><option value="Dospat">Dospat</option><option value="Kardzhali">Kardzhali</option><option value="Gabrovo">Gabrovo</option><option value="Targovishte">Targovishte</option> </select></div><p class="new_address_title">Phone number</p><p hidden class="error_address phone_number" id="error_shipping_address_phone_number">Error</p> <input type="text" data-relevance="phonenumber"  placeholder="+359 XXX XX XXX" class="required shipping_address phone_number" data-error-id="#error_shipping_address_phone_number" /></div><div class="input"><p class="new_address_title">Address line 1</p><p hidden class="error_address address1" id="error_shipping_address_address1">Error</p> <input type="text" data-relevance="delivery_address1"  placeholder="bul. Kliment Ohrisdski 65e" class="required shipping_address address1" data-error-id="#error_shipping_address_address1" /></div><div class="input"><p class="new_address_title">Address line 2</p><p hidden class="error_address address2" id="error_shipping_address_address2">Error</p> <input type="text" data-relevance="delivery_address2"  placeholder="floor 2, ap. 3, brown door" class="required shipping_address address2" data-error-id="#error_shipping_address_address2" /></div><div class="input"><p class="new_address_title">Postcode</p><p hidden class="error_address postcode" id="error_shipping_address_postcode">Error</p> <input type="text" data-relevance="delivery_postcode"  placeholder="1762" class="required shipping_address postcode" data-error-id="#error_shipping_address_postcode" /></div></div>').appendTo($shippingAddress);
    
    $('<div class="billing_new"><h3>New billing address</h3><div class="billingaddress"><div class="input"><p class="new_address_title">First name</p><p hidden class="error_address first_name" id="error_billing_address_first_name">Error</p> <input type="text" data-relevance="names1"  placeholder="First name" class="required billing_address first_name" data-error-id="#error_billing_address_first_name" /></div><div class="input"><p class="new_address_title">Last Name</p><p hidden class="error_address last_name" id="error_billing_address_last_name">Error</p> <input type="text" data-relevance="names2"  placeholder="Last name" class="required billing_address last_name" data-error-id="#error_billing_address_last_name" /></div><div class="input"><p class="new_address_title">City</p><p hidden class="error_address city" id="error_billing_address_city">Error</p> <select data-relevance="delivery_city" id="bulgarian_cities" class="required billing_address city" style="width: 90px;" data-error-id="#error_billing_address_city"><option id="default_city"></option><option value="Sofia">Sofia</option><option value="Plovdiv">Plovdiv</option><option value="Varna">Varna</option><option value="Burgas">Burgas</option><option value="Ruse">Ruse</option><option value="Stara Zagora">Stara Zagora</option><option value="Pleven">Pleven</option><option value="Sliven">Sliven</option><option value="Dobrich">Dobrich</option><option value="Shumen">Shumen</option><option value="Pernik">Pernik</option><option value="Haskovo">Haskovo</option><option value="Vratsa">Vratsa</option><option value="Kyustendil">Kyustendil</option><option value="Montana">Montana</option><option value="Lovech">Lovech</option><option value="Razgrad">Razgrad</option><option value="Borino">Borino</option><option value="Madan">Madan</option><option value="Zlatograd">Zlatograd</option><option value="Pazardzhik">Pazardzhik</option><option value="Smolyan">Smolyan</option><option value="Blagoevgrad">Blagoevgrad</option><option value="Nedelino">Nedelino</option><option value="Rudozem">Rudozem</option><option value="Devin">Devin</option><option value="Veliko Tarnovo">Veliko Tarnovo</option><option value="Vidin">Vidin</option><option value="Kirkovo">Kirkovo</option><option value="Krumovgrad">Krumovgrad</option><option value="Dzhebel">Dzhebel</option><option value="Silistra">Silistra</option><option value="Sarnitsa">Sarnitsa</option><option value="Shiroka Laka">Shiroka Laka</option><option value="Yambol">Yambol</option><option value="Dospat">Dospat</option><option value="Kardzhali">Kardzhali</option><option value="Gabrovo">Gabrovo</option><option value="Targovishte">Targovishte</option> </select></div><p class="new_address_title">Phone number</p><p hidden class="error_address phone_number" id="error_billing_address_phone_number">Error</p> <input type="text" data-relevance="phonenumber"  placeholder="+359 XXX XX XXX" class="required billing_address phone_number" data-error-id="#error_billing_address_phone_number" /></div><div class="input"><p class="new_address_title">Address line 1</p><p hidden class="error_address address1" id="error_billing_address_address1">Error</p> <input type="text" data-relevance="delivery_address1"  placeholder="bul. Kliment Ohrisdski 65e" class="required billing_address address1" data-error-id="#error_billing_address_address1" /></div><div class="input"><p class="new_address_title">Address line 2</p><p hidden class="error_address address2" id="error_billing_address_address2">Error</p> <input type="text" data-relevance="delivery_address2"  placeholder="floor 2, ap. 3, brown door" class="required billing_address address2" data-error-id="#error_billing_address_address2" /></div><div class="input"><p class="new_address_title">Postcode</p><p hidden class="error_address postcode" id="error_billing_address_postcode">Error</p> <input type="text" data-relevance="delivery_postcode"  placeholder="1762" class="required billing_address postcode" data-error-id="#error_billing_address_postcode" /></div></div>').appendTo($billingAddress);
    
    
    
        $('.required.shipping_address').change(function (e){
            selectedNewShipping[e.target.dataset.relevance]=e.target.value;
            
        });
           $('.required.billing_address').change(function (e){
            selectedNewBilling[e.target.dataset.relevance]=e.target.value;
            
        });
    
    
    
    
}
