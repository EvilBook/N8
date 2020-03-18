console.log(window.location.search);
console.log(decodeURIComponent(window.location.search)); 
var query=decodeURIComponent(window.location.search);
query=query.replace('?','');



$(document).ready(function(){
  $(".query").text('"'+query+'"');
});


var searches=document.cookie;

console.log(searches);

