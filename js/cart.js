
$("#includedContent").load("/projectfolder/html/header.html", () =>{
    

$.getScript("/projectfolder/js/header.js", function() {
   console.log('loaded');
    start();

});


var searches=document.cookie;



var id=read_cookie('id');


var jsonInfo;
var jsonFile;
var jsonItem;



var items=read_cookie('items');

if(items!=null){
        items=items.split(",");
        for(var iii=0; iii<items.length; iii++){
            var smallArray=items[iii].split(':');
            items[iii]=smallArray;
        }

(function () {

fetch('/projectfolder/db/items1.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
    jsonFile=myJson;
    
    for(var i=0;i<myJson.length;i++){
    
            if(id===myJson[i].productid){
            jsonInfo=myJson[i];
            }
    }

$(function(){
    
    
    
    createBasket();
    createCart();
    
    
    var $select = $(".quantity");
    for (i=1;i<=100;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
    
    
    
    for(var i=0;i<items.length;i++){                    
    $("#quantity"+items[i][0]).val(items[i][1]);}
    
    
    calculatePrice();
    

    
});
    
    
    
    
});
})();


function createBasket(){
        
    
    
    for(var i=0; i<items.length; i++){
        
        
        
        for(var ii=0;ii<jsonFile.length;ii++){
    
            if(items[i][0]===jsonFile[ii].productid){
            jsonItem=jsonFile[ii];
            }
        }
        
        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketitem");
        cardDiv.setAttribute("id", items[i][0]);
        document.getElementById("itemsdropdown").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketimage");
        cardDiv.setAttribute("id", "basketimage"+items[i][0]);
        document.getElementById(items[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("img");                 
        cardDiv.setAttribute("class", "image");
        cardDiv.setAttribute("src","/projectfolder/img/"+jsonItem.url[0]);
        document.getElementById("basketimage"+items[i][0]).appendChild(cardDiv);
            
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketinfo");
        cardDiv.setAttribute("id", "basketinfo"+items[i][0]);
        document.getElementById(items[i][0]).appendChild(cardDiv);
            
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonItem.name;
        document.getElementById("basketinfo"+items[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML="quantity: "+items[i][1];
        document.getElementById("basketinfo"+items[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonItem.price;
        document.getElementById("basketinfo"+items[i][0]).appendChild(cardDiv);
    }
    }
    
    
}

function createCart(){
    console.log(jsonItem)
    console.log(jsonFile)
    console.log(jsonInfo)
    if(items.length>0){
    
    
    
    for(var i=0; i<items.length; i++){
        console.log(items[i]+" "+i+" "+items.length);
        
        for(var ii=0;ii<jsonFile.length;ii++){
    
            if(items[i][0]===jsonFile[ii].productid){
            jsonItem=jsonFile[ii];
            }
        }
        
        
        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "item");
        cardDiv.setAttribute("id", "item"+items[i][0]);
        document.getElementById("items").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "left");
        cardDiv.setAttribute("id", "left"+items[i][0]);
        document.getElementById("item"+items[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("img");                 
        cardDiv.setAttribute("class", "productimage");
        cardDiv.setAttribute("src","/projectfolder/img/"+jsonItem.url[0]);
        document.getElementById("left"+items[i][0]).appendChild(cardDiv);
            
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "right");
        cardDiv.setAttribute("id", "right"+items[i][0]);
        document.getElementById("item"+items[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "right");
        cardDiv.setAttribute("id", "right"+items[i][0]);
        document.getElementById("item"+items[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "leftinfo");
        cardDiv.setAttribute("id", "leftinfo"+items[i][0]);
        document.getElementById("right"+items[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "rightinfo");
        cardDiv.setAttribute("id", "rightinfo"+items[i][0]);
        document.getElementById("right"+items[i][0]).appendChild(cardDiv);
        
        
        
        
        
        
            
        cardDiv = document.createElement("p"); 
        cardDiv.setAttribute("class", "title");
            cardDiv.innerHTML=jsonItem.name;
        document.getElementById("leftinfo"+items[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonItem.description;
        document.getElementById("leftinfo"+items[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");
        cardDiv.setAttribute('class', 'removeItem');
            cardDiv.innerHTML='remove item';
        cardDiv.setAttribute('data-item-id', items[i][0]);
        $(cardDiv).click(()=>{
            removeItem(event.target.dataset.itemId);
        })
        document.getElementById("leftinfo"+items[i][0]).appendChild(cardDiv);
        
        
        
        cardDiv = document.createElement("select");
        cardDiv.setAttribute("class", "quantity");
        cardDiv.setAttribute("id", "quantity"+items[i][0]);
        cardDiv.addEventListener('input', () =>{
            update(event.target.getAttribute('id'),event.target.value);
        });
        document.getElementById("rightinfo"+items[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p"); 
        cardDiv.setAttribute('id', 'price'+items[i][0]);
            cardDiv.innerHTML=jsonItem.price;
        document.getElementById("rightinfo"+items[i][0]).appendChild(cardDiv);
        
        
    }
    }
    
    
}


function read_cookie(key){
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}



function  calculatePrice(){
    var vat=20;
    var shipping=Math.floor(Math.random() * (20 - 4) + 4);
    var sum=0;
    var temmpsum;

    for(var i=0; i<items.length; i++){
        
        temmpsum=+$('#quantity'+items[i][0]).val()*+$('#price'+items[i][0]).text().replace('$','');
        sum+=temmpsum;

        }
    
    
    $('.subtotal').text('Subtotal: '+sum+'$');
    $('.shipping').text('Shipping: '+8+'$');
    $('.vat').text('VAT: '+20+'%');
    $('.total').text('Total: '+(sum+(sum*0.2)+shipping)+'$');
    
    
}


function removeItem(id){
    
    
    
    for(var i=0; i<items.length; i++){
        console.log(items[i]+" "+i+" "+items.length);
        
        for(var ii=0;ii<items.length;ii++){
    
            if(items[ii][0]===id){
                items.splice(ii, 1);
            }
        }
    }
      $( "#item"+id ).fadeOut( "slow", function() {
          $(this).parentNode.removeChild(removeTarget);  });
    calculatePrice();
    fixArray();
    
    
     var now = new Date();
               now.setFullYear( now.getFullYear() + 2 );
            document.cookie="items="+items+"; expires=" + now.toUTCString() + "; " + "path=/";
    console.log(items);
    
    
    
}



function fixArray(){
    console.log(items);
    for(var i=0; i<items.length; i++){
        items[i]=items[i][0]+':'+items[i][1];
    }
}


function update(a,b){
      var quantity=b;
    var id=a.replace('quantity','');
    console.log(quantity+''+id);
    var found=false;
    for(var o=0; o<items.length; o++){
        console.log(items[o][0]+' '+a+' '+items[o][1]);
        if(items[o][0]===id){
            found=true;
            items[o][1]=+b;
            console.log('fucking what?')
            }
        }
    
    calculatePrice();
    
    fixArray();
    
    
    var now = new Date();
               now.setFullYear( now.getFullYear() + 2 );
            document.cookie="items="+items+"; expires=" + now.toUTCString() + "; " + "path=/";
    
    
}
});







    