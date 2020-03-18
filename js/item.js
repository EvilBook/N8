

$("#includedContent").load("/projectfolder/html/header.html");
console.log(location.href)


var searches=document.cookie;

console.log(read_cookie('id'));

var id=read_cookie('id');


var jsonInfo;
var jsonFile;


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




var x=$(document).width();
var y=screen.height;

var navbar=document.getElementById("navbar");
navbar.setAttribute("style", "width:100%; height:"+32+"px;");

var height=navbar.offsetHeight;
console.log(x+" start");


$(window).resize(function() {
    x=$(window).width();
    y=screen.height;
    navbar.setAttribute("style", "width:100%; height:"+32+"px;");
var height=navbar.offsetHeight;
var wrapper=document.getElementById("categorySpace");
//wrapper.setAttribute("style", "margin-top:"+height+"px;");
});
    createSlides(jsonInfo.url);


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


var leftarrow=document.getElementById("leftarrow");
var rightarrow=document.getElementById("rightarrow");
var quantitynumber=document.getElementById("quantitynumber");

leftarrow.addEventListener("click", () => {
    quantitynumber.innerHTML=quantitynumber.innerHTML-1;
})
rightarrow.addEventListener("click", () => {
    quantitynumber.innerHTML=quantitynumber.innerHTML-1+2;
})
    
    
    
    $(".producttitle").text(jsonInfo.name);
    $(".productcategory").text(jsonInfo.section+"/"+jsonInfo.category+"/"+jsonInfo.subcategory);
    $(".productdescription").text(jsonInfo.description);
    $(".productprice").text("Price: "+jsonInfo.price);
    $(".productextrainfo").text("EAN: "+jsonInfo.ean+" Height: "+jsonInfo.height);
    
    console.log(jsonInfo.height);
    $(".prev").click(function(){plusSlides(-1)});
    $(".next").click(function(){plusSlides(1)});
    
    
    createBasket();
    
    
    
    
    
    
    
    
});
})();



function createSlides(images){
    /*<div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="../img/img11.jpg" class="productimg">
  </div>*/
    for(var i=0; i<images.length; i++){
    var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "mySlides fade");
        cardDiv.setAttribute("id", "container"+i);
        document.getElementById("slideshow-container").appendChild(cardDiv);
        
      var numberDiv = document.createElement("div");                 
        numberDiv.setAttribute("class", "numbertext");
        numberDiv.innerHTML=(i+1)+"/"+images.length;
        document.getElementById("container"+i).appendChild(numberDiv);  
    
    var cardImg = document.createElement("img");                 
        cardImg.setAttribute("class", "productimg");
        cardImg.setAttribute("src", "../img/"+images[i]);
        document.getElementById("container"+i).appendChild(cardImg);
    }
}

$(".buttontext").click(()=>{
    var quantity=$('#quantitynumber').text();
    console.log(quantity);
    var found=false;
    for(var o=0; o<items.length; o++){
        if(items[o][0]===jsonInfo.productid){
            found=true;
            items[o][1]=+items[o][1]+ +quantity;
            }
        }

    if(found===false){
    var newArray=items;
    
    newArray.push([jsonInfo.productid,quantity]);
    
    addToBasket([jsonInfo.productid,quantity]);
    }
    
    fixArray();
    
    
     var now = new Date();
               now.setFullYear( now.getFullYear() + 2 );
            document.cookie="items="+items+"; expires=" + now.toUTCString() + "; " + "path=/";
        
    
});


function createBasket(){
        
    
    
    for(var i=0; i<items.length; i++){
        console.log(items[i]+" "+i+" "+items.length);
        
        
        var jsonItem;
        
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
function addToBasket(item){
    
    
    
        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketitem");
        cardDiv.setAttribute("id", item[0]);
        document.getElementById("itemsdropdown").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketimage");
        cardDiv.setAttribute("id", "basketimage"+item[0]);
        document.getElementById(item[0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("img");                 
        cardDiv.setAttribute("class", "image");
        cardDiv.setAttribute("src","/projectfolder/img/"+jsonInfo.url[0]);
        document.getElementById("basketimage"+item[0]).appendChild(cardDiv);
            
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "basketinfo");
        cardDiv.setAttribute("id", "basketinfo"+item[0]);
        document.getElementById(item[0]).appendChild(cardDiv);
            
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonInfo.name;
        document.getElementById("basketinfo"+item[0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML="quantity: "+item[1];
        document.getElementById("basketinfo"+item[0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonInfo.price;
        document.getElementById("basketinfo"+item[0]).appendChild(cardDiv);
    
    
}

function read_cookie(key){
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}


function fixArray(){
    console.log(items);
    for(var i=0; i<items.length; i++){
        items[i]=items[i][0]+':'+items[i][1];
    }
}


    

