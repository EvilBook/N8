
$("#includedContent").load("/projectfolder/html/header.html", () =>{
    

$.getScript("/projectfolder/js/header.js", function() {
   console.log('loaded');
    start();

});


var searches=document.cookie;

var id=read_cookie('id');
    console.log(window.location.search);
console.log(decodeURIComponent(window.location.search)); 
var query=decodeURIComponent(window.location.search);
query=query.replace('?','');
    id=query;


var jsonInfo;
    var itemId;


var stringArray=read_cookie('items');
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


fetch('/projectfolder/db/items1.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
    jsonFile=myJson;
    
    for(var i=0;i<myJson.length;i++){
    
            if(id===myJson[i].productid){
            jsonInfo=myJson[i];
                itemId=myJson[i].productid;
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
        
    
    for(var name in jsonInfo){
        console.log(name)
        
        if(jsonInfo[name]!=='' || jsonInfo[name]!==null){
        if(name!=='id' && name!=='description' && name!=='price' && name!=='subcategory' && name!=='category' && name!=='section' && name!=='url' && name!=='quantity' && name!=='new_price' && name!=='name'){
$('<p class="info-'+i+'">'+name+': '+jsonInfo[name]+'</p>').css({
  }).appendTo('.actualinfo');
        }
        }
    }
        $(".displaymore").click(function(){
            if(this.id==='open'){
            $('.actualinfo').attr('class','actualinfoactive');
            $('.displaymore').html('Dislay Less');
            $('.displaymore').attr('id','close');
                }else if(this.id==='close'){
            $('.actualinfoactive').attr('class','actualinfo');
            $('.displaymore').html('Dislay More');
            $('.displaymore').attr('id','open');
                }
        })

    
    $(".prev").click(function(){plusSlides(-1)});
    $(".next").click(function(){plusSlides(1)});    
    
    
    
    
    
    
    
});



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
    quantity=parseInt(quantity);

    addToBasket([itemId,quantity]);

    });   



function addToBasket(item){
var found=false;
    var founItem;
    for(var o=0; o<objectArray.length; o++){
        if(objectArray[o][0]===item[0]){

            objectArray[o][1]=parseInt(objectArray[o][1])+item[1];
            founItem=objectArray[o];
found=true;
            break;
            }
        }
    


console.log(found);
        
    
    
    if(!found){
            objectArray.push(item);
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
                cardDiv.setAttribute("id", "quantity"+item[0]);
            cardDiv.innerHTML="quantity: "+item[1];
        document.getElementById("basketinfo"+item[0]).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");  
            cardDiv.innerHTML=jsonInfo.price;
        document.getElementById("basketinfo"+item[0]).appendChild(cardDiv);
    }else{
        $('#quantity'+founItem[0]).html(founItem[1]);
    }
    
                fixArray();

    
    
    
}

function read_cookie(key){
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
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

});

    

