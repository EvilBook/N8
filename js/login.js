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
    
    $(".loginbutton").click(function(){
    console.log("SLUT");
    $( ".login" ).css("width", "48%");
    $(".register").css("width", "30%");
      $( ".logininput" ).css("opacity", "1");
    $(".registerinput").css("display", "none");
    $(".registerinput").css("opacity", "0");
    $(".buttondiv").css("opacity", "1");
    $(".buttondiv").css("display", "");
  });
});