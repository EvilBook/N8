
var  stringArray=[];

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

stringArray=read_cookie('items');


var objectArray=[];

if(stringArray!=null){
        stringArray=stringArray.split(",");
    console.log(stringArray);
        for(var iii=0; iii<stringArray.length; iii++){
            var smallArray=stringArray[iii].split(':');
                console.log(smallArray);

            objectArray.push(smallArray);
                            console.log(objectArray);

        }
}else{
    stringArray=[];
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
    
    
    
    for(var i=0;i<objectArray.length;i++){                    
    $("#quantity"+objectArray[i][0]).val(objectArray[i][1]);}
    
    
    calculatePrice();
    

    
});
    
    
    
    
});
})();


function createBasket(){
        
    
    for(var i=0; i<objectArray.length; i++){
        
        
        
        for(var ii=0;ii<jsonFile.length;ii++){
    
            if(objectArray[i][0]===jsonFile[ii].productid){
            jsonItem=jsonFile[ii];
                break;
            }
        }
        
        
        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketitem");
        cardDiv.setAttribute("id", objectArray[i][0]);
        document.getElementById("itemsdropdown").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketimage");
        cardDiv.setAttribute("id", "basketimage"+objectArray[i][0]);
        document.getElementById(objectArray[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("img");                 
        cardDiv.setAttribute("class", "image");
        cardDiv.setAttribute("src","/projectfolder/img/"+jsonItem.url[0]);
        document.getElementById("basketimage"+objectArray[i][0]).appendChild(cardDiv);
            
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketinfo");
        cardDiv.setAttribute("id", "basketinfo"+objectArray[i][0]);
        document.getElementById(objectArray[i][0]).appendChild(cardDiv);
            
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonItem.name;
        document.getElementById("basketinfo"+objectArray[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML="quantity: "+objectArray[i][1];
        document.getElementById("basketinfo"+objectArray[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonItem.price;
        document.getElementById("basketinfo"+objectArray[i][0]).appendChild(cardDiv);
    }
    }
    
    


function createCart(){
    console.log(jsonItem)
    console.log(jsonFile)
    console.log(jsonInfo)
    for(var i=0; i<objectArray.length; i++){
        
        
        
        for(var ii=0;ii<jsonFile.length;ii++){
    
            if(objectArray[i][0]===jsonFile[ii].productid){
            jsonItem=jsonFile[ii];
                break;
            }
        }
        
        
        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "item");
        cardDiv.setAttribute("id", "item"+objectArray[i][0]);
        document.getElementById("items").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "left");
        cardDiv.setAttribute("id", "left"+objectArray[i][0]);
        document.getElementById("item"+objectArray[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("img");                 
        cardDiv.setAttribute("class", "productimage");
        cardDiv.setAttribute("src","/projectfolder/img/"+jsonItem.url[0]);
        document.getElementById("left"+objectArray[i][0]).appendChild(cardDiv);
            
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "right");
        cardDiv.setAttribute("id", "right"+objectArray[i][0]);
        document.getElementById("item"+objectArray[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "right");
        cardDiv.setAttribute("id", "right"+objectArray[i][0]);
        document.getElementById("item"+objectArray[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "leftinfo");
        cardDiv.setAttribute("id", "leftinfo"+objectArray[i][0]);
        document.getElementById("right"+objectArray[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "rightinfo");
        cardDiv.setAttribute("id", "rightinfo"+objectArray[i][0]);
        document.getElementById("right"+objectArray[i][0]).appendChild(cardDiv);
        
        
        
        
        
        
            
        cardDiv = document.createElement("p"); 
        cardDiv.setAttribute("class", "title");
            cardDiv.innerHTML=jsonItem.name;
        document.getElementById("leftinfo"+objectArray[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonItem.description;
        document.getElementById("leftinfo"+objectArray[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");
        cardDiv.setAttribute('class', 'removeItem');
            cardDiv.innerHTML='remove item';
        cardDiv.setAttribute('data-item-id', objectArray[i][0]);
        $(cardDiv).click(()=>{
            removeItem(event.target.dataset.itemId);
        })
        document.getElementById("leftinfo"+objectArray[i][0]).appendChild(cardDiv);
        
        
        
        cardDiv = document.createElement("select");
        cardDiv.setAttribute("class", "quantity");
        cardDiv.setAttribute("id", "quantity"+objectArray[i][0]);
        cardDiv.addEventListener('input', () =>{
            update(event.target.getAttribute('id'),event.target.value);
        });
        document.getElementById("rightinfo"+objectArray[i][0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p"); 
        cardDiv.setAttribute('id', 'price'+objectArray[i][0]);
            cardDiv.innerHTML=jsonItem.price;
        document.getElementById("rightinfo"+objectArray[i][0]).appendChild(cardDiv);
        
        
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

    for(var i=0; i<objectArray.length; i++){
        
        temmpsum=+$('#quantity'+objectArray[i][0]).val()*+$('#price'+objectArray[i][0]).text().replace('$','');
        sum+=temmpsum;

        }
    
    
    $('.subtotal').text('Subtotal: '+sum+'$');
    $('.shipping').text('Shipping: '+8+'$');
    $('.vat').text('VAT: '+20+'%');
    $('.total').text('Total: '+(sum+(sum*0.2)+shipping)+'$');
    
    
}


function removeItem(id){
    console.log('ååååååååååååååååååååååååååååååååååååååååååååååå'); 
    console.log(objectArray);
    
    for(var i=0; i<objectArray.length; i++){
        
    
            if(objectArray[i][0]===id){
                objectArray.splice(i, 1);
            }
        }
    
      $( "#item"+id ).fadeOut( "slow", function() {
          $(this).parentNode.removeChild(removeTarget);  });
    calculatePrice();
    fixArray();
    console.log(objectArray);
    console.log('ååååååååååååååååååååååååååååååååååååååååååååååå');
    
    
    
}



function fixArray(){
    var newStringArray=[];
        console.log('*------------------------------------------------------*');
    console.log(stringArray);
    console.log(objectArray);
    console.log('*------------------------------------------------------*');
    for(var i=0; i<objectArray.length; i++){
        newStringArray.push(objectArray[i][0]+':'+objectArray[i][1]);
    }
        console.log('*------------------------------------------------------*');
    console.log(stringArray);
    console.log('.............................................................');
    
    
    
    
    
    var now = new Date();
               now.setFullYear( now.getFullYear() + 2 );
            document.cookie="items="+newStringArray+"; expires=" + now.toUTCString() + "; " + "path=/";
}

    


function update(a,b){
      var quantity=b;
    var id=a.replace('quantity','');
    console.log(quantity+''+id);
    var found=false;
    for(var o=0; o<stringArray.length; o++){
        console.log(stringArray[o][0]+' '+a+' '+stringArray[o][1]);
        if(stringArray[o][0]===id){
            found=true;
            stringArray[o][1]=+b;
            console.log('fucking what?')
            }
        }
    
    calculatePrice();
    
    fixArray();
    
    
}





});

    