


var jsonInfo;
var jsonFile;
$("#includedContent").load("/projectfolder/html/header.html", () =>{
    

$.getScript("/projectfolder/js/header.js", function() {
   console.log('loaded');
    start();

});    





    








var maxItemsDisplay=3;
var startValue=0;

(function () {

fetch('/projectfolder/db/users.json') 
    .then((response) => {
            return response.json();
        })
        .then((myJson) => {
        jsonFile=myJson;

    
    
            jsonInfo=myJson;

var login=$( ".login" );
var register=$(".register");

console.log(login, register);


$(document).ready(function(){
  $(".registerbutton").click(function(){
    console.log("SLUT");
    $( ".login" ).css("width", "8%");
    $(".register").css("width", "60%");
      $( ".logininput" ).css("opacity", "0");
    $(".registerinput").css("display", "block");
    $(".registerinput").css("opacity", "1");
    $(".buttondiv").css("opacity", "0");
    $(".buttondiv").css("display", "none");
  });
    
    /*$(".loginbutton").click(function(){
    console.log("SLUT");
    $( ".login" ).css("width", "48%");
    $(".register").css("width", "30%");
      $( ".logininput" ).css("opacity", "1");
    $(".registerinput").css("display", "none");
    $(".registerinput").css("opacity", "0");
    $(".buttondiv").css("opacity", "1");
    $(".buttondiv").css("display", "");
  });*/
    
    $(".loginbutton").click(function(){
    var email;
        var password;
        email=$('.email').val();
        password=$('.password').val();
        verify(email, password);
  });
});
    
    
    
});})();
    
});


function verify(a,b){
    
    for(var i=0; i<jsonInfo.length;i++){
        for(var name in jsonInfo[i]){
        console.log(jsonInfo[i][name]);
            }
        
        if(jsonInfo[i]['email']===a){
            if(jsonInfo[i]['password']===b){
                var now = new Date();
                            console.log(true);

               now.setFullYear( now.getFullYear() + 2 );
            document.cookie="loggedin=1; expires=" + now.toUTCString() + "; " + "path=/";
            document.cookie="user="+jsonInfo[i]['id']+"; expires=" + now.toUTCString() + "; " + "path=/";
            document.location.href = '/projectfolder/path/profile.html';
        }
        }
        
        
    }
    
    
    
}

    