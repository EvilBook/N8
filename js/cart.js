


$("#includedContent").load("/projectfolder/html/header.html");
console.log(location.href)


var searches=document.cookie;

console.log(read_cookie('id'));

var id=read_cookie('id');


var jsonInfo;
var jsonFile;


var items=read_cookie('items');

if(items.length>0){    
items=items.split(",");}

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
    var $select = $(".quantity");
    for (i=1;i<=100;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});
    
    
    createBasket();
    createCart();
    
    
    
});
})();


function createBasket(){
    if(items.length>0){
    
    
    
    for(var i=0; i<items.length; i++){
        console.log(items[i]+" "+i+" "+items.length);
        
        var jsonItem;
        
        for(var ii=0;ii<jsonFile.length;ii++){
    
            if(items[i]===jsonFile[ii].productid){
            jsonItem=jsonFile[ii];
            }
        }
        
        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketitem");
        cardDiv.setAttribute("id", items[i]);
        document.getElementById("itemsdropdown").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketimage");
        cardDiv.setAttribute("id", "basketimage"+items[i]);
        document.getElementById(items[i]).appendChild(cardDiv);
        
        cardDiv = document.createElement("img");                 
        cardDiv.setAttribute("class", "image");
        cardDiv.setAttribute("src","/projectfolder/img/"+jsonItem.url[0]);
        document.getElementById("basketimage"+items[i]).appendChild(cardDiv);
            
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketinfo");
        cardDiv.setAttribute("id", "basketinfo"+items[i]);
        document.getElementById(items[i]).appendChild(cardDiv);
            
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonItem.name;
        document.getElementById("basketinfo"+items[i]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML="quantity: "+jsonItem.quantity;
        document.getElementById("basketinfo"+items[i]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonItem.price;
        document.getElementById("basketinfo"+items[i]).appendChild(cardDiv);
    }
    }
    
    
}

function createCart(){
    if(items.length>0){
    
    
    
    for(var i=0; i<items.length; i++){
        console.log(items[i]+" "+i+" "+items.length);
        
        var jsonItem;
        
        for(var ii=0;ii<jsonFile.length;ii++){
    
            if(items[i]===jsonFile[ii].productid){
            jsonItem=jsonFile[ii];
            }
        }
        
        
        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "item");
        cardDiv.setAttribute("id", "item"+items[i]);
        document.getElementById("items").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "left");
        cardDiv.setAttribute("id", "left"+items[i]);
        document.getElementById("item"+items[i]).appendChild(cardDiv);
        
        cardDiv = document.createElement("img");                 
        cardDiv.setAttribute("class", "productimage");
        cardDiv.setAttribute("src","/projectfolder/img/"+jsonItem.url[0]);
        document.getElementById("left"+items[i]).appendChild(cardDiv);
            
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "right");
        cardDiv.setAttribute("id", "right"+items[i]);
        document.getElementById("item"+items[i]).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "right");
        cardDiv.setAttribute("id", "right"+items[i]);
        document.getElementById("item"+items[i]).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "leftinfo");
        cardDiv.setAttribute("id", "leftinfo"+items[i]);
        document.getElementById("right"+items[i]).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "rightinfo");
        cardDiv.setAttribute("id", "rightinfo"+items[i]);
        document.getElementById("right"+items[i]).appendChild(cardDiv);
        
        
        
        
        
        
            
        cardDiv = document.createElement("p"); 
        cardDiv.setAttribute("class", "title");
            cardDiv.innerHTML=jsonItem.name;
        document.getElementById("leftinfo"+items[i]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonItem.description;
        document.getElementById("leftinfo"+items[i]).appendChild(cardDiv);
        
        cardDiv = document.createElement("select");
        cardDiv.setAttribute("class", "quantity");
        document.getElementById("rightinfo"+items[i]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonItem.price;
        document.getElementById("rightinfo"+items[i]).appendChild(cardDiv);
        
        
    }
    }
    
    
}


function read_cookie(key){
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}

    