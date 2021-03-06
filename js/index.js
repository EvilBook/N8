var x=$(window).width();
var y=screen.height;

var navbar=document.getElementById("navbar");
navbar.setAttribute("style", "width:"+x+"px; height:"+56+"px;");

var height=navbar.offsetHeight;
var wrapper=document.getElementById("wrapper");
wrapper.setAttribute("style", "padding-top:"+height+"px;");


$(window).resize(function() {
    x=$(window).width();
    y=screen.height;
    navbar.setAttribute("style", "width:"+x+"px; height:"+(0.08*y)+"px;");
var height=navbar.offsetHeight;
var wrapper=document.getElementById("wrapper");
wrapper.setAttribute("style", "padding-top:"+height+"px;");
});

var productContainer=document.getElementById("productcontainer");
var productimage=document.getElementById("productimg");









    for(var ii=11; ii<27; ii++){
var random=Math.floor(Math.random() * (200 - 200) + 200);

        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "productcontainer");
        cardDiv.setAttribute("id", "productcontainer"+ii);
        document.getElementById("container1").appendChild(cardDiv);
        
        var priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "price");
        priceDiv.setAttribute("id", "price"+ii);
        priceDiv.innerHTML=Math.floor(Math.random()*4000)+" $";
        document.getElementById("productcontainer"+ii).appendChild(priceDiv);
        
       

        var cardImg = document.createElement("img");                 
        cardImg.setAttribute("class", "productimg");
        cardImg.setAttribute("src", "img/img"+ii+".jpg");
        document.getElementById("productcontainer"+ii).appendChild(cardImg);
        var ratio=cardImg.naturalWidth/cardImg.naturalHeight;
        /*
        if(ratio===1){
        cardDiv.setAttribute("style", "width: "+200+"px; height: "+200+"px;");

        }else if(ratio<1){
                    cardDiv.setAttribute("style", "width: "+200+"px; height: "+400+"px;");


        }else if(ratio>1){
                    cardDiv.setAttribute("style", "width: "+400+"px; height: "+200+"px;");


        }*/

        

        var cardDivInner= document.createElement("div");
        cardDivInner.setAttribute("class", "productdescription");
        cardDivInner.setAttribute("id", "productdescription"+ii);
        cardDivInner.setAttribute("style", "display:none;");
        cardDiv.addEventListener("mouseover", function(event){
            event.currentTarget.childNodes[2].setAttribute("style", "");
                                      });
        cardDiv.addEventListener("mouseleave", function(event){
            event.currentTarget.childNodes[2].setAttribute("style", "display:none;");
                                      });
        document.getElementById("productcontainer"+ii).appendChild(cardDivInner);

        var cardText= document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML="Some quick example text to build on the card title and make up the bulk of the card's content";
        document.getElementById("productdescription"+ii).appendChild(cardText);
    }







/* Prevent browsers not supporting console.log from breaking the code */ if(typeof console==="undefined"){console={};console.log = function(){return;}}

var defaultArgs = {
  padding: 30,
  columns: 3,
  minWidth: 240,
  animationDuration: 200
};

(function($) {
  $.fn.arrange = function(options) {
    
    // Init variables
    var arg = $.extend({
      padding: 0,
      columns: 3,
      minWidth: 240,
      animationDuration: 200
    },options);
    var gridWidth = this.width()+arg.padding*1;
      console.log(this);
    var childrenElements = this.children(arg.selector);
    var children = [];
    var columnHeights = [];
    
    // Check the column minimum width
    while(gridWidth/arg.columns<arg.minWidth&&arg.columns>1)
      arg.columns = arg.columns-1;
    for(n=0;n<arg.columns;n+=1) columnHeights[n]=0;
    
    // Iterate children
    childrenElements.each(function(i){
      $(this).css("position","absolute");
      
      // Select the shortest column
      var col = 0;
      var top = Math.min.apply(Math,columnHeights);
      for(v=0;v<columnHeights.length;v+=1) if(columnHeights[v]==top) { 
        col = v; break; }
      
      // Calculate the new position
      var left = col*gridWidth/arg.columns;
      var width = gridWidth/arg.columns-arg.padding;
      $(this).outerWidth(width);
      var child = {
        obj: $(this),
        x: left,
        y: top,
        w: width,
        h: $(this).outerHeight(),
        n: i
      };
      columnHeights[col] = child.y+child.h+arg.padding*1;
      children[children.length] = child;
    });
    
    // Position child elements with animation
    childrenElements.each(function(i){
      $(this).stop(1,1).animate({
        left: children[i].x,
        top: children[i].y,
        width: children[i].w
      },arg.animationDuration);
    });
    
    // Set the final height of the container
    this.height(Math.max.apply(Math,columnHeights)-arg.padding);
    return this;
  };
}(jQuery));

// Call the arrange function
clearTimeout(timeout);
  timeout = setTimeout(function(){ 
    $( ".grid" ).arrange(defaultArgs);
  }, 200);

// Resize the grid when the viewport is resized.
// There is a delay of 0.3 seconds to prevent the function
// from being called before the resizing is finished.
var timeout;
$( window ).resize(function() {
  clearTimeout(timeout);
  timeout = setTimeout(function(){ 
    $( ".grid" ).arrange(defaultArgs);
  }, 200);
	
});









