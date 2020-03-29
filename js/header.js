

    







var itemsFile;
var usersFile;
var categoriesFile=[[],[],[]];
function start(){
    
    var items=read_cookie('items');
var loggedin=read_cookie('loggedin');
var user;
    if(loggedin==='1'){
        user=read_cookie('user');

    }
    if(loggedin===null){
        var now = new Date();
               now.setFullYear( now.getFullYear() + 2 );
      document.cookie="loggedin=0; expires=" + now.toUTCString() + "; " + "path=/";  
         loggedin=read_cookie('loggedin');

    }

fetch('/projectfolder/db/items1.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
        itemsFile=myJson;
    loadBasket();

    
    
});
fetch('/projectfolder/db/users.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
        usersFile=myJson;
    loadProfile();

    
    
});
    
    
    fetch('/projectfolder/db/sections.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
        categoriesFile[0]=myJson;
        
        fetch('/projectfolder/db/categories.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
        categoriesFile[1]=myJson;
            
            fetch('/projectfolder/db/subcategories.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
        categoriesFile[(1+1)]=myJson;
            loadCategories();});

    
    
});

    
    
});
    

addSearch();

function loadProfile(){
    if(loggedin==='0'){
        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "dropdown-content-profile");
        cardDiv.setAttribute("id", "dropdown-content-profile");
        document.getElementById("dropdown-profile").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "shoppingtitle");
        cardDiv.setAttribute("id", "shoppingtitle");
        document.getElementById("dropdown-content-profile").appendChild(cardDiv);
        
        cardDiv = document.createElement("h4");                 
cardDiv.innerHTML='New customer?';
document.getElementById("shoppingtitle").appendChild(cardDiv);

cardDiv = document.createElement("p");                 
cardDiv.innerHTML='Register now for some reason.';
document.getElementById("shoppingtitle").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "signin");
        cardDiv.setAttribute("id", "signin");
        document.getElementById("dropdown-content-profile").appendChild(cardDiv);
        
        cardDiv = document.createElement("button");                 
        cardDiv.setAttribute("class", "profilebtn");
        cardDiv.innerHTML='Register/Sign in';
        document.getElementById('signin').appendChild(cardDiv);
        
        
        $(".dropbtn-profile, .profilebtn").click(function(){
            document.location.href = '/projectfolder/path/login.html';        

  });
        
        
        
    }else if(loggedin==='1'){
        if(user!==null){
        var name;
        for(var i=0; i<usersFile.length;i++){
        
        
        if(usersFile[i]['id']===user){
        name=usersFile[i]['firstName'];
        name=name+' '+usersFile[i]['lastName'];
            break;
            }
        }
            
        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "dropdown-content-profile");
        cardDiv.setAttribute("id", "dropdown-content-profile");
        document.getElementById("dropdown-profile").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "shoppingtitle");
        cardDiv.setAttribute("id", "shoppingtitle");
        document.getElementById("dropdown-content-profile").appendChild(cardDiv);
        
        cardDiv = document.createElement("h4");                 
cardDiv.innerHTML=name;
document.getElementById("shoppingtitle").appendChild(cardDiv);
        
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "signin");
        cardDiv.setAttribute("id", "signin");
        document.getElementById("dropdown-content-profile").appendChild(cardDiv);
        
        cardDiv = document.createElement("button");                 
        cardDiv.setAttribute("class", "profilebtn");
        cardDiv.setAttribute("id", "order");
        cardDiv.innerHTML='Order History';
        document.getElementById('signin').appendChild(cardDiv);
            $('#order').click(function(){
                            document.location.href = '/projectfolder/path/profile.html?order';        

            });
            
            cardDiv = document.createElement("button");                 
        cardDiv.setAttribute("class", "profilebtn");
        cardDiv.setAttribute("id", "view");
        cardDiv.innerHTML='View Profile';
        document.getElementById('signin').appendChild(cardDiv);
            $('#view').click(function(){
                            document.location.href = '/projectfolder/path/profile.html';        

            });
            
            cardDiv = document.createElement("button");                 
        cardDiv.setAttribute("class", "profilebtn");
        cardDiv.setAttribute("id", "edit");
        cardDiv.innerHTML='Edit Profile';
        document.getElementById('signin').appendChild(cardDiv);
            $('#edit').click(function(){
                            document.location.href = '/projectfolder/path/profile.html?edit';        

            });
            
            cardDiv = document.createElement("button");                 
        cardDiv.setAttribute("class", "profilebtn");
        cardDiv.setAttribute("id", "wallet");
        cardDiv.innerHTML='Wallet';
        document.getElementById('signin').appendChild(cardDiv);
            $('#wallet').click(function(){
                            document.location.href = '/projectfolder/path/profile.html?wallet';        

            });
            
            
            cardDiv = document.createElement("button");                 
        cardDiv.setAttribute("class", "profilebtn");
        cardDiv.setAttribute("id", "signout");
        cardDiv.innerHTML='Sign Out';
            cardDiv.addEventListener('click',function(){signOut()});
        document.getElementById('signin').appendChild(cardDiv);
        
    }
        }
    
}
function loadBasket(){
    
    
    if(items!=null){
        items=items.split(",");
        for(var iii=0; iii<items.length; iii++){
            var smallArray=items[iii].split(':');
            items[iii]=smallArray;
        }    
    
    
    for(var i=0; i<items.length; i++){
        console.log(items[i]+" "+i+" "+items.length);        
        
        var jsonItem;
        
        for(var ii=0;ii<itemsFile.length;ii++){
    
            if(items[i][0]===itemsFile[ii].productid){
            jsonItem=itemsFile[ii];
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
    
    function loadCategories(){
        
        for(var i=0; i<categoriesFile[0].length; i++){
            
        
        
        var cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "dropdown-subcategory");
        cardDiv.setAttribute("id", "dropdown-subcategory"+categoriesFile[0][i]['name']);
        document.getElementById("navmenu").appendChild(cardDiv);
            
            cardDiv = document.createElement("a");                 
        cardDiv.setAttribute("class", "dropbtn-subcategory");
        cardDiv.setAttribute("id", "dropbtn-subcategory"+categoriesFile[0][i]['name']);
            cardDiv.innerHTML=categoriesFile[0][i]['name'];
        document.getElementById("dropdown-subcategory"+categoriesFile[0][i]['name']).appendChild(cardDiv);
            
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "dropdown-content-subcategory");
        cardDiv.setAttribute("id", "dropdown-content-subcategory"+categoriesFile[0][i]['name']);
        document.getElementById("dropdown-subcategory"+categoriesFile[0][i]['name']).appendChild(cardDiv);
       
        for(var ii=0; ii<categoriesFile[1].length; ii++){
            
            
        cardDiv = document.createElement("div");                 
        cardDiv.setAttribute("class", "category");
        cardDiv.setAttribute("id", "category"+categoriesFile[1][ii]['name']+categoriesFile[0][i]['name']);
        document.getElementById("dropdown-content-subcategory"+categoriesFile[0][i]['name']).appendChild(cardDiv);
            

        
        
        cardDiv = document.createElement("ul");                 
        cardDiv.setAttribute("id", "ul"+categoriesFile[1][ii]['name']+categoriesFile[0][i]['name']);
        document.getElementById("category"+categoriesFile[1][ii]['name']+categoriesFile[0][i]['name']).appendChild(cardDiv);
            
            cardDiv = document.createElement("li");
            cardDiv.setAttribute('class', 'title');
        cardDiv.setAttribute("id", categoriesFile[1][ii]['name']);
            cardDiv.innerHTML=categoriesFile[1][ii]['name'];
        document.getElementById("ul"+categoriesFile[1][ii]['name']+categoriesFile[0][i]['name']).appendChild(cardDiv);
            
                    for(var iii=0; iii<categoriesFile[(1+1)].length; iii++){
                        
                        
                        cardDiv = document.createElement("li");
                        cardDiv.setAttribute('class', 'sub');
        cardDiv.setAttribute("id", categoriesFile[(1+1)][iii]['name']);
                                    cardDiv.innerHTML=categoriesFile[(1+1)][iii]['name'];

        document.getElementById("ul"+categoriesFile[1][ii]['name']+categoriesFile[0][i]['name']).appendChild(cardDiv);
                        
                    }

    }
        
        
    }
    
    var titles=[]
    titles=titles.concat(document.getElementsByClassName('title'),document.getElementsByClassName('dropbtn-subcategory'),document.getElementsByClassName('sub'));
console.log(titles);
console.log(titles[0]);


for(var o=0; o<titles.length; o++){
    for(var m=0; m<titles[o].length; m++){
    
    titles[o][m].addEventListener('click',() =>{
        
 /*       console.log('fuck off');
var page=createPage(event.target.innerHTML);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
     }
    var content = '<p>What</p>';
    xmlhttp.open("GET","/projectfolder/php/makePage.php?content=" + page+'&name='+event.target.innerHTML,true);
        console.log("/projectfolder/php/makePage.php?content=" + content+'&name='+event.target.innerHTML);
    xmlhttp.send();*/
        
    document.location.href = '/projectfolder/path/category.html?'+event.target.innerHTML.toLowerCase();


    

        
        
    })
    
    
}
}
    }
    
    function read_cookie(key){
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
}
    
    
    function signOut(){
        var now = new Date();
               now.setFullYear( now.getFullYear() + 2 );
            document.cookie="loggedin=0; expires=" + now.toUTCString() + "; " + "path=/";
            document.cookie="user=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    }
    
    function addSearch(){
        
  $(".search").click(function(){
    
    $(".searchbar").css("width", "100%");
      $(".search").css("display", "none");
      $(".closesearch").css("display", "block");
      
      
  });
    
    $(".closesearch").click(function(){
        $(".searchbar").css("width", "0%");
      $(".search").css("display", "block");
      $(".closesearch").css("display", "none");

  });
    
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        if($(".inputsearch").is(":focus")){
            var now = new Date();
               now.setFullYear( now.getFullYear() + 2 );
            document.cookie="query="+$(".inputsearch").val()+":"+ $(".inputsearch").val()+"; expires=" + now.toUTCString() + "; " + "path=path/search.html";
            document.location.href = '/projectfolder/path/search.html?'+$(".inputsearch").val();
            console.log(now);
        //console.log($(".inputsearch").val());
        }
    }
});
    
    
    

        
        
    }
    
    
    
}

