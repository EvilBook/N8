for(var i=0; i<20; i++){
var para = document.createElement("div");                 
para.setAttribute("id", "row"+i);
para.setAttribute("class", "row");
document.getElementById("main").appendChild(para);
    for(var ii=0; ii<4; ii++){

var randomImg=Math.floor(Math.random() * 4) + 1;;

        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "card");
        cardDiv.setAttribute("style","width: 18rem; margin: 8px;");
        cardDiv.setAttribute("id", "card"+ii+i);
        document.getElementById("row"+i).appendChild(cardDiv);

        var cardImg = document.createElement("img");                 
        cardImg.setAttribute("class", "card-img-top");
        cardImg.setAttribute("src", "img/img"+randomImg+".jpg");
        document.getElementById("card"+ii+i).appendChild(cardImg);

        var cardDivInner= document.createElement("div");
        cardDivInner.setAttribute("class", "card-body");
        cardDivInner.setAttribute("id", "cardDivInner"+ii+i);
        document.getElementById("card"+ii+i).appendChild(cardDivInner);

        var cardText= document.createElement("p");
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML="Some quick example text to build on the card title and make up the bulk of the card's content";
        document.getElementById("cardDivInner"+ii+i).appendChild(cardText);
    }
}




