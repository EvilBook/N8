
var jsonInfo;
var jsonFile;
var selection;
    var users=read_cookie('user');
var elements;
var user;

console.log(window.location.search);
console.log(decodeURIComponent(window.location.search)); 
var query=decodeURIComponent(window.location.search);
query=query.replace('?','');





$("#includedContent").load("/projectfolder/html/header.html", () =>{
    document.addEventListener('click',function(){
        console.log(event.target);
    })
    
    $("#popupaddcard").load("/projectfolder/html/popupaddcard.html", () =>{
    document.addEventListener('click',function(){
        console.log(event.target);
        $.getScript("/projectfolder/js/popupaddcard.js", function() {
        });
    })
    });

$.getScript("/projectfolder/js/header.js", function() {
    start();
    
    
    fetch('/projectfolder/db/users.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
    
    for(var i=0;i<myJson.length;i++){
    
            if(users===myJson[i].id){
            user=myJson[i];
            }
    }
        var options=document.getElementsByClassName('option');
    console.log(options);
    
    for(var ii=0; ii<options.length;ii++){
        console.log(options[ii]);
        options[ii].addEventListener('click', function(){
            var optionString=event.target.dataset.option;
            console.log(elements);
                elements.setAttribute('class','option');
            
            var selected=event.target;
            selected.setAttribute('class','selected');
            elements=(selected);
            if(optionString==='info'){
                info();
            }else if(optionString==='edit'){
                edit();
            }else if(optionString==='orders'){
                orders();
            }else if(optionString==='cards'){
                cards();
            }else if(optionString==='address'){
                address();
            }
        });
    }
        
        if(query===''){
        
                    elements=(options[0]);

    
    options[0].setAttribute('class','selected');
    info();
        }else if(query==='edit'){
            elements=(options[1]);

    
    options[1].setAttribute('class','selected');
    edit();
        }
        else if(query==='order'){
            elements=(options[2]);

    
    options[2].setAttribute('class','selected');
    orders();
        }else if(query==='wallet'){
            elements=(options[3]);

    
    options[3].setAttribute('class','selected');
    cards();
        }else if(query==='address'){
            elements=(options[4]);

    
    options[4].setAttribute('class','selected');
    cards();
        }
        
        
        
    });
    

});
    
    
});


    function read_cookie(key){
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}


var container=$('.content');



function info(){
    console.log(container);
        $('.content').empty();

    var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'contentofcontent');
        cardDiv.setAttribute("id", 'contentofcontent');
        container.append(cardDiv);
        
        cardDiv = document.createElement("p");                 
        cardDiv.setAttribute('style', "padding-top: 20px;");
    cardDiv.innerHTML='Account Information';
        document.getElementById('contentofcontent').appendChild(cardDiv);
           
    for(var name in user){
        console.log(name);
        if(name!=='password' && name!=='id'){
    cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'titlediv');
        cardDiv.setAttribute("id", 'titlediv');
        document.getElementById('contentofcontent').appendChild(cardDiv);
    
    cardDiv = document.createElement("p");
    cardDiv.setAttribute('class', 'notatitle');
    cardDiv.setAttribute('align', 'left');
    cardDiv.innerHTML=name;
        document.getElementById('titlediv').appendChild(cardDiv);
    
    cardDiv = document.createElement("p");
    cardDiv.setAttribute('class', 'notacontent');
                cardDiv.setAttribute('align', 'left');

    cardDiv.innerHTML=user[name];
        document.getElementById('titlediv').appendChild(cardDiv);
        }
    }
    
}
function edit(){
    $('.content').empty();

    var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'contentofcontent');
        cardDiv.setAttribute("id", 'contentofcontent');
        container.append(cardDiv);
        
        cardDiv = document.createElement("p");                 
        cardDiv.setAttribute('style', "padding-top: 20px;");
    cardDiv.innerHTML='Edit Information';
        document.getElementById('contentofcontent').appendChild(cardDiv);
           
    for(var name in user){
        if(name!=='password' && name!=='id' && name!=='email'){
    cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'titlediv');
        cardDiv.setAttribute("id", 'titlediv'+name);
        document.getElementById('contentofcontent').appendChild(cardDiv);
    
    cardDiv = document.createElement("p");
    cardDiv.setAttribute('class', 'notatitle');
    cardDiv.setAttribute('align', 'left');
    cardDiv.innerHTML=name;
        document.getElementById('titlediv'+name).appendChild(cardDiv);
    
    cardDiv = document.createElement("input");
    cardDiv.setAttribute('class', 'notaninput');
    cardDiv.setAttribute('type', 'text');
                cardDiv.defaultValue=user[name];

        document.getElementById('titlediv'+name).appendChild(cardDiv);
        }
        
    }
    cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'titlediv');
        cardDiv.setAttribute("id", 'titlediv');
        document.getElementById('contentofcontent').appendChild(cardDiv);
    
    
    
        
         cardDiv = document.createElement("div");
        cardDiv.setAttribute('class', 'emailpassword');

        cardDiv.innerHTML='change email';

        document.getElementById('titlediv').appendChild(cardDiv);
    
    cardDiv = document.createElement("div");
    cardDiv.setAttribute('class', 'emailpassword');
        cardDiv.innerHTML='change password'

        document.getElementById('titlediv').appendChild(cardDiv);
    
    cardDiv = document.createElement("button");
    cardDiv.setAttribute('class', 'save');
        cardDiv.innerHTML='save changes';
    cardDiv.addEventListener('click', function(){
        //popup('save');
    })

        document.getElementById('contentofcontent').appendChild(cardDiv);
    
}
function orders(){
    var orders;
    fetch('/projectfolder/db/orders.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
    
        orders=myJson;
    
    $('.content').empty();

    var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'contentofcontent');
        cardDiv.setAttribute("id", 'contentofcontent');
        container.append(cardDiv);
        
        cardDiv = document.createElement("p");                 
        cardDiv.setAttribute('style', "padding-top: 20px;");
    cardDiv.innerHTML='Order History';
        document.getElementById('contentofcontent').appendChild(cardDiv);
           
    for(var orderss in orders){
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'orderdiv');
        cardDiv.setAttribute("id", 'orderdiv'+orders[orderss]['id']);
        document.getElementById('contentofcontent').appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'qrcodediv');
        cardDiv.setAttribute("id", 'qrcodediv'+orders[orderss]['id']);
        document.getElementById('orderdiv'+orders[orderss]['id']).appendChild(cardDiv);
        
        var qrcode = new QRCode('qrcodediv'+orders[orderss]['id'], {
    text: orders[orderss]['id']+','+orders[orderss]['productid']+','+orders[orderss]['userid']+','+orders[orderss]['date'],
    width: 80,
    height: 80,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
        });
        
        
        for(var name in orders[orderss]){
                    if(name!=='id' && name!=='userid'){
    
    
    cardDiv = document.createElement("p");
    cardDiv.setAttribute('class', 'notatitle');
    cardDiv.setAttribute('align', 'left');
    cardDiv.innerHTML=name;
        document.getElementById('orderdiv'+orders[orderss]['id']).appendChild(cardDiv);
    
    cardDiv = document.createElement("p");
    cardDiv.setAttribute('class', 'notacontent');
                cardDiv.setAttribute('align', 'left');

    cardDiv.innerHTML=orders[orderss][name];
        document.getElementById('orderdiv'+orders[orderss]['id']).appendChild(cardDiv);
        
        }
        }
    }
    })        
        
        
        
        
        
        
        
        
    }




function cards(){
    var cards;
    fetch('/projectfolder/db/cards.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
    
        cards=myJson;
    
    $('.content').empty();

    var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'contentofcontent');
        cardDiv.setAttribute("id", 'contentofcontent');
        container.append(cardDiv);
        
        cardDiv = document.createElement("p");                 
        cardDiv.setAttribute('style', "padding-top: 20px;");
    cardDiv.innerHTML='Saved Cards';
        document.getElementById('contentofcontent').appendChild(cardDiv);
           
    for(var i=0;i<cards.length;i++){
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'carddiv');
        cardDiv.setAttribute("id", 'carddiv'+i);
        document.getElementById('contentofcontent').appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'cardchip');
        cardDiv.setAttribute("id", 'cardchip'+i);
        cardDiv.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px" class="cute"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
        document.getElementById('carddiv'+i).appendChild(cardDiv);
        $('.cute').click(()=>{
            for (var i = 0; i < 200; i++) {
  create(i);
}
        })
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'carddelete');
        cardDiv.setAttribute("id", 'carddelete'+i);
        cardDiv.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 20 20" width="30" class="closecard"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
        document.getElementById('carddiv'+i).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'cardnumber');
        cardDiv.setAttribute("id", 'cardnumber'+i);
        document.getElementById('carddiv'+i).appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'cardexpdate');
        cardDiv.setAttribute("id", 'cardexpdate'+i);
        cardDiv.innerHTML='<p class="cardtitle">Exp Date</p>'
        document.getElementById('carddiv'+i).appendChild(cardDiv);
        
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'cardholder');
        cardDiv.setAttribute("id", 'cardholder'+i);
                cardDiv.innerHTML='<p class="cardtitle">Name</p>'

        document.getElementById('carddiv'+i).appendChild(cardDiv);
        
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'cardlogo');
        cardDiv.setAttribute("id", 'cardlogo'+i);
        document.getElementById('carddiv'+i).appendChild(cardDiv);
        
        
        
        
    
    
    cardDiv = document.createElement("p");
    cardDiv.setAttribute('class', 'cardcontentnumber');
        cardDiv.innerHTML=cards[i]['cardnumber'].substring(0,cards[i]['cardnumber'].length/4)+' '+cards[i]['cardnumber'].substring(3,cards[i]['cardnumber'].length/4+3)+' '+cards[i]['cardnumber'].substring(7,cards[i]['cardnumber'].length/4+7)+' '+cards[i]['cardnumber'].substring(11,cards[i]['cardnumber'].length/4+11);
        document.getElementById('cardnumber'+i).appendChild(cardDiv);
    
    cardDiv = document.createElement("p");
    cardDiv.setAttribute('class', 'cardinfo');

    cardDiv.innerHTML=cards[i]['expdate'];
        document.getElementById('cardexpdate'+i).appendChild(cardDiv);
        
        cardDiv = document.createElement("p");
    cardDiv.setAttribute('class', 'cardinfo');

    cardDiv.innerHTML=cards[i]['owner'];
        document.getElementById('cardholder'+i).appendChild(cardDiv);
    }
        cardDiv = document.createElement("div");                 
    cardDiv.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="48px" height="48px" class="addcard"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>';
        cardDiv.addEventListener('click', ()=>{
            open();
        })
        document.getElementById('contentofcontent').appendChild(cardDiv);
        
        
    })        
        
        
        
        
        
        
        
        
    }


function address(){
    console.log(container);
        $('.content').empty();

    var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'contentofcontent');
        cardDiv.setAttribute("id", 'contentofcontent');
        container.append(cardDiv);
        
        cardDiv = document.createElement("p");                 
        cardDiv.setAttribute('style', "padding-top: 20px;");
    cardDiv.innerHTML='Account Information';
        document.getElementById('contentofcontent').appendChild(cardDiv);
           
    for(var name in user){
        console.log(name);
        if(name!=='password' && name!=='id'){
    cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'titlediv');
        cardDiv.setAttribute("id", 'titlediv');
        document.getElementById('contentofcontent').appendChild(cardDiv);
    
    cardDiv = document.createElement("p");
    cardDiv.setAttribute('class', 'notatitle');
    cardDiv.setAttribute('align', 'left');
    cardDiv.innerHTML=name;
        document.getElementById('titlediv').appendChild(cardDiv);
    
    cardDiv = document.createElement("p");
    cardDiv.setAttribute('class', 'notacontent');
                cardDiv.setAttribute('align', 'left');

    cardDiv.innerHTML=user[name];
        document.getElementById('titlediv').appendChild(cardDiv);
        }
    }
    
}



function popup(a){
    
    
    var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", 'popup');
document.getElementById('main').appendChild(cardDiv);    
    $('.profileinfo').css('filter','blur(4px)')    

}




function create(i) {
  var width = Math.random() * 8;
  var height = width * 0.4;
  var colourIdx = Math.ceil(Math.random() * 3);
  var colour = "red";
  switch(colourIdx) {
    case 1:
      colour = "yellow";
      break;
    case 2:
      colour = "blue";
      break;
    default:
      colour = "red";
  }
  $('<div class="confetti-'+i+' '+colour+'"></div>').css({
    "width" : width+"px",
    "height" : height+"px",
    "top" : -Math.random()*20+"%",
    "left" : Math.random()*100+"%",
    "opacity" : 1,
    "transform" : "rotate("+Math.random()*360+"deg)"
  }).appendTo('#main');  
  
  drop(i);
}

function drop(x) {
  $('.confetti-'+x).animate({
    top: "200%",
  }, Math.random()*3000 + 3000, function() {
    //reset(x);
  });
}

function reset(x) {
  $('.confetti-'+x).animate({
    "top" : -Math.random()*20+"%",
    "left" : "-="+Math.random()*15+"%"
  }, 0, function() {
    drop(x);             
  });
}









   



