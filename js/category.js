var query;
var found=[];


$("#includedContent").load("/projectfolder/html/header.html", () =>{
    

$.getScript("/projectfolder/js/header.js", function() {
   console.log('loaded');
    start();

});



var items=read_cookie('items');

    

query=decodeURIComponent(window.location.search);
query=query.replace('?','').toLowerCase();



$(document).ready(function(){
  $(".query").text('"'+query+'"');
});





var jsonInfo;
var jsonFile;
var maxItemsDisplay=0;
var startValue=0;
    
    
    $('.categorytitle').text(query);
    

(function () {

fetch('/projectfolder/db/items1.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
        jsonFile=myJson;

    
    
            jsonInfo=myJson;
    
    
    
    for(var i=0; i<jsonInfo.length; i++){
        for (var name in jsonInfo[i]) {
            console.log(query+' '+jsonInfo[i][name])
            if(jsonInfo[i][name].includes(query)){
                console.log('da fuck');
                found.push(jsonInfo[i]);
                break;
            }
        }
    }
    



var x=$(document).width();
var y=screen.height;

var navbar=document.getElementById("navbar");
navbar.setAttribute("style", "width:100%; height:"+32+"px;");

var height=navbar.offsetHeight;



$(window).resize(function() {
    x=$(window).width();
    y=screen.height;
    navbar.setAttribute("style", "width:100%; height:"+32+"px;");
var height=navbar.offsetHeight;
var wrapper=document.getElementById("categorySpace");
//wrapper.setAttribute("style", "margin-top:"+height+"px;");
});



$(window).resize(function() {


var rows=document.getElementById("itemrow");
    
    var elements=rows.childNodes; 
    
var x=$(document).width();
    var xx=window.innerWidth;
var y=screen.height;
    var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;
    for(var i=0;i<elements.length;i++){
        
        var item=document.getElementById(elements[i].getAttribute("id"));
        
        if(w>740){
    
        
        item.setAttribute("style", "width: "+Math.floor(x/4)+"px; height: "+Math.floor(y*0.8)+"px;");
        }else{
            item.setAttribute("style", "width: "+Math.floor(x/2)+"px; height: "+Math.floor(h*1.1)+"px; padding:4px;");
            
        }
        }
    
 
    });

for(var ii=startValue; ii<found.length-maxItemsDisplay; ii++){
 startValue++;   
var x=$("#main").width();
    var xx=window.innerWidth;
var y=screen.height;
    var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;
var cardDiv = document.createElement("div");      
    var containerName=found[ii].productid;

    if(w>740){    
        cardDiv.setAttribute("class", "productcontainer");
        cardDiv.setAttribute("id", containerName);
        cardDiv.setAttribute("style", "width: "+(Math.floor(x/4))+"px; height: "+Math.floor(y*0.8)+"px;");
        document.getElementById("itemrow").appendChild(cardDiv);
    }else{

        cardDiv.setAttribute("class", "productcontainer");
        cardDiv.setAttribute("id", containerName);
        cardDiv.setAttribute("style", "width: "+Math.floor(x/2)+"px; height: "+Math.floor(h*1.1)+"px; padding:4px;");
        document.getElementById("itemrow").appendChild(cardDiv);
        
    }
    $(cardDiv).click(function(){
        var now = new Date();
               now.setFullYear( now.getFullYear() + 2 );
            document.cookie="id="+$(this).attr('id')+"; expires=" + now.toUTCString() + "; " + "path=path/search.html";
        document.location.href="/projectfolder/path/item.html?"+$(this).attr('id');
    });
    
    
    var cardImg = document.createElement("img");                 
        cardImg.setAttribute("class", "productimg");
        cardImg.setAttribute("src", "/projectfolder/img/"+found[ii].url[0]);
        //cardImg.setAttribute("src", "img/loading.gif");
        document.getElementById(containerName).appendChild(cardImg);
        var ratio=cardImg.naturalWidth/cardImg.naturalHeight;
    var x=$(document).width();
    
    
    var cardDivInner= document.createElement("div");
        cardDivInner.setAttribute("class", "productdescription");
        cardDivInner.setAttribute("id", "productdescription"+containerName);
        
        document.getElementById(containerName).appendChild(cardDivInner);
    var x=$(document).width();
    
    var cardTag= document.createElement("strong");
        cardTag.innerHTML=found[ii].subcategory;
        document.getElementById("productdescription"+containerName).appendChild(cardTag);
    var x=$(document).width();
    
    var cardTitle= document.createElement("p");
        cardTitle.setAttribute("class", "producttitle");
        cardTitle.innerHTML=found[ii].name;;
     document.getElementById("productdescription"+containerName).appendChild(cardTitle);
    var x=$("#main").width();

        var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;
        
        
           var x=window.devicePixelRatio;


        
    
     var priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "price");
        priceDiv.setAttribute("id", "price"+ii);
        priceDiv.innerHTML=found[ii].price;
        document.getElementById(containerName).appendChild(priceDiv);

        

        
    
    
    
    cardDiv.addEventListener("mouseover", function(){
        //var image=this.childNodes[1].setAttribute("style", "width:60%; height:120%;");
    })
    }

var list = document.getElementById("itemrow");
list.removeChild(list.childNodes[0]);   



var rows=document.getElementById("itemrow");
    
    var elements=rows.childNodes; 
    
var x=$(document).width();
    var xx=window.innerWidth;
var y=screen.height;
var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;
    for(var i=0;i<elements.length;i++){
        
        var item=document.getElementById(elements[i].getAttribute("id"));
        
        if(w>740){
    
        
        item.setAttribute("style", "width: "+Math.floor(x/4)+"px; height: "+Math.floor(y*0.8)+"px;");
        }else{
            item.setAttribute("style", "width: "+Math.floor(x/2)+"px; height: "+Math.floor(h*1.1)+"px; padding:4px;");
         
            
            
        }
        }
    
    
    
    
});
})();




function read_cookie(key){
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}


$(".buttontext").click(()=>{
    maxItemsDisplay=0;
    
    updateItems();
    
    
});



function updateItems(){
    
    for(var ii=startValue; ii<jsonInfo.length-maxItemsDisplay; ii++){
 startValue++;   
var x=$("#main").width();
    var xx=window.innerWidth;
var y=screen.height;
    var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;
var cardDiv = document.createElement("div");      
    var containerName=jsonInfo[ii].productid;

    if(w>740){    
        cardDiv.setAttribute("class", "productcontainer");
        cardDiv.setAttribute("id", containerName);
        cardDiv.setAttribute("style", "width: "+(Math.floor(x/4))+"px; height: "+Math.floor(y*0.8)+"px;");
        document.getElementById("itemrow").appendChild(cardDiv);
    }else{

        cardDiv.setAttribute("class", "productcontainer");
        cardDiv.setAttribute("id", containerName);
        cardDiv.setAttribute("style", "width: "+Math.floor(x/2)+"px; height: "+Math.floor(h*1.1)+"px; padding:4px;");
        document.getElementById("itemrow").appendChild(cardDiv);
        
    }
    $(cardDiv).click(function(){
        var now = new Date();
               now.setFullYear( now.getFullYear() + 2 );
            document.cookie="id="+$(this).attr('id')+"; expires=" + now.toUTCString() + "; " + "path=path/search.html";
        document.location.href="/projectfolder/path/item.html";
    });
    
    
    var cardImg = document.createElement("img");                 
        cardImg.setAttribute("class", "productimg");
        cardImg.setAttribute("src", "img/"+jsonInfo[ii].url[0]);
    console.log(jsonInfo[ii].url[0]);
        //cardImg.setAttribute("src", "img/loading.gif");
        document.getElementById(containerName).appendChild(cardImg);
        var ratio=cardImg.naturalWidth/cardImg.naturalHeight;
    var x=$(document).width();
    
    
    var cardDivInner= document.createElement("div");
        cardDivInner.setAttribute("class", "productdescription");
        cardDivInner.setAttribute("id", "productdescription"+containerName);
        
        document.getElementById(containerName).appendChild(cardDivInner);
    var x=$(document).width();
    
    var cardTag= document.createElement("strong");
        cardTag.innerHTML=jsonInfo[ii].subcategory;
        document.getElementById("productdescription"+containerName).appendChild(cardTag);
    var x=$(document).width();
    
    var cardTitle= document.createElement("p");
        cardTitle.setAttribute("class", "producttitle");
        cardTitle.innerHTML=jsonInfo[ii].name;;
     document.getElementById("productdescription"+containerName).appendChild(cardTitle);
    var x=$("#main").width();

        var ratio = window.devicePixelRatio || 1;
var w = screen.width * ratio;
var h = screen.height * ratio;
        
        
           var x=window.devicePixelRatio;


        
    
     var priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "price");
        priceDiv.setAttribute("id", "price"+ii);
        priceDiv.innerHTML=jsonInfo[ii].price;
        document.getElementById(containerName).appendChild(priceDiv);

    }
    
    
}
    
    });
    




   



