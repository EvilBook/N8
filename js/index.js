$("#includedContent").load("/public/html/header.html", () => {


  $.getScript("/public/js/header.js", function() {
    console.log('loaded');
    start();

  });

  var items = read_cookie('items');
  var product_list;
  var jsonFile;
  var maxItemsDisplay = 3;
  var startValue = 0;



  fetch('http://192.168.0.105:3000/products/')
    .then(response => response.json())
    .then(data => {
      product_list = data
      for (var i = 0; i <product_list.length; i++) {
        fetchImages(product_list[i].ean, i);
      }
    }).catch(error => console.error(error));



  function fetchImages(ean, index) {
    const data = {
      ean: ean
    };

    var raw = JSON.stringify(data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch('http://192.168.0.105:3000/products/ean-img', requestOptions)
      .then(response => response.json())
      .then(data => {
        var images = [];
        data.forEach((element, index, array) => {
          images.push(element.name);
        });
        displayProducts(images, index);
      }).catch(error => console.error(error));


  }

function displayProducts(images, index) {
    ii = index;

    var x = $(document).width();
    var y = screen.height;

    var navbar = document.getElementById("navbar");
    navbar.setAttribute("style", "width:100%; height:" + 32 + "px;");

    var height = navbar.offsetHeight;



    $(window).resize(function() {
      x = $(window).width();
      y = screen.height;
      navbar.setAttribute("style", "width:100%; height:" + 32 + "px;");
      var height = navbar.offsetHeight;
      var wrapper = document.getElementById("categorySpace");
      //wrapper.setAttribute("style", "margin-top:"+height+"px;");
    });



  // $(window).resize(function() {
  //
  //
  //     var rows = document.getElementById("itemrow");
  //
  //     var elements = rows.childNodes;
  //
  //     var x = $(document).width();
  //     var xx = window.innerWidth;
  //     var y = screen.height;
  //     var ratio = window.devicePixelRatio || 1;
  //     var w = screen.width * ratio;
  //     var h = screen.height * ratio;
  //
  //     for (var i = 0; i < elements.length; i++) {
  //
  //       var item = document.getElementById(elements[i].getAttribute("id"));
  //
  //       if (w > 740) {
  //
  //
  //         item.setAttribute("style", "width: " + Math.floor(x / 4) + "px; height: " + Math.floor(y * 0.8) + "px;");
  //       } else {
  //         item.setAttribute("style", "width: " + Math.floor(x / 2) + "px; height: " + Math.floor(h * 1.1) + "px; padding:4px;");
  //
  //       }
  //     }
  //
  //
  //   });



    startValue++;
    var x = $("#main").width();
    var xx = window.innerWidth;
    var y = screen.height;
    var ratio = window.devicePixelRatio || 1;
    var w = screen.width * ratio;
    var h = screen.height * ratio;
    var cardDiv = document.createElement("div");
    //var random = Math.floor(Math.random() * 1000000000);
    var containerName = product_list[ii].id;

    if (w > 740) {
      cardDiv.setAttribute("class", "productcontainer");
      cardDiv.setAttribute("id", containerName);
      cardDiv.setAttribute("style", "width: " + (Math.floor(x / 4)) + "px; height: " + Math.floor(y * 0.8) + "px;");
      document.getElementById("itemrow").appendChild(cardDiv);
    } else {

      cardDiv.setAttribute("class", "productcontainer");
      cardDiv.setAttribute("id", containerName);
      cardDiv.setAttribute("style", "width: " + Math.floor(x / 2) + "px; height: " + Math.floor(h * 1.1) + "px; padding:4px;");
      document.getElementById("itemrow").appendChild(cardDiv);
    }
    console.log(cardDiv);
    console.log(containerName);

    $(cardDiv).click(function() {
      document.location.href = "/public/path/item.html?" + $(this).attr('id');
    });


    var cardImg = document.createElement("img");
    cardImg.setAttribute("class", "productimg");
    cardImg.setAttribute("src", '/product/product_images/'+images[0]);

    //cardImg.setAttribute("src", "public/img/loading.gif");
    document.getElementById(containerName).appendChild(cardImg);
    var ratio = cardImg.naturalWidth / cardImg.naturalHeight;
    var x = $(document).width();
    $(".productimg").on("error", function(){
        console.log('shit');
        $(this).attr('src', '/public/img/notoun.png');
    });


    var cardDivInner = document.createElement("div");
    cardDivInner.setAttribute("class", "productdescription");
    cardDivInner.setAttribute("id", "productdescription" + containerName);

    document.getElementById(containerName).appendChild(cardDivInner);
    var x = $(document).width();

    var cardTag = document.createElement("strong");
    cardTag.innerHTML = product_list[ii].subcategory;
    document.getElementById("productdescription" + containerName).appendChild(cardTag);
    var x = $(document).width();

    var cardTitle = document.createElement("p");
    cardTitle.setAttribute("class", "producttitle");
    cardTitle.innerHTML = product_list[ii].name;;
    document.getElementById("productdescription" + containerName).appendChild(cardTitle);
    var x = $("#main").width();

    var ratio = window.devicePixelRatio || 1;
    var w = screen.width * ratio;
    var h = screen.height * ratio;


    var x = window.devicePixelRatio;




    var priceDiv = document.createElement("div");
    priceDiv.setAttribute("class", "price");
    priceDiv.setAttribute("id", "price" + ii);
    priceDiv.innerHTML = product_list[ii].price;
    document.getElementById(containerName).appendChild(priceDiv);

  }




  function read_cookie(key) {
    var result;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
  }


  $(".buttontext").click(() => {
    maxItemsDisplay = 0;

    updateItems();


  });



  function updateItems() {

    for (var ii = startValue; ii < product_list.length - maxItemsDisplay; ii++) {
      startValue++;
      var x = $("#main").width();
      var xx = window.innerWidth;
      var y = screen.height;
      var ratio = window.devicePixelRatio || 1;
      var w = screen.width * ratio;
      var h = screen.height * ratio;
      var cardDiv = document.createElement("div");
      var containerName = product_list[ii].productid;

      if (w > 740) {
        cardDiv.setAttribute("class", "productcontainer");
        cardDiv.setAttribute("id", containerName);
        cardDiv.setAttribute("style", "width: " + (Math.floor(x / 4)) + "px; height: " + Math.floor(y * 0.8) + "px;");
        document.getElementById("itemrow").appendChild(cardDiv);
      } else {

        cardDiv.setAttribute("class", "productcontainer");
        cardDiv.setAttribute("id", containerName);
        cardDiv.setAttribute("style", "width: " + Math.floor(x / 2) + "px; height: " + Math.floor(h * 1.1) + "px; padding:4px;");
        document.getElementById("itemrow").appendChild(cardDiv);

      }
      $(cardDiv).click(function() {
        var now = new Date();
        now.setFullYear(now.getFullYear() + 2);
        document.cookie = "id=" + $(this).attr('id') + "; expires=" + now.toUTCString() + "; " + "path=path/search.html";
        document.location.href = "/public/path/item.html";
      });


      var cardImg = document.createElement("img");
      cardImg.setAttribute("class", "productimg");
      cardImg.setAttribute("src", "img/" + product_list[ii].url[0]);
      console.log(product_list[ii].url[0]);
      //cardImg.setAttribute("src", "img/loading.gif");
      document.getElementById(containerName).appendChild(cardImg);
      var ratio = cardImg.naturalWidth / cardImg.naturalHeight;
      var x = $(document).width();


      var cardDivInner = document.createElement("div");
      cardDivInner.setAttribute("class", "productdescription");
      cardDivInner.setAttribute("id", "productdescription" + containerName);

      document.getElementById(containerName).appendChild(cardDivInner);
      var x = $(document).width();

      var cardTag = document.createElement("strong");
      cardTag.innerHTML = product_list[ii].subcategory;
      document.getElementById("productdescription" + containerName).appendChild(cardTag);
      var x = $(document).width();

      var cardTitle = document.createElement("p");
      cardTitle.setAttribute("class", "producttitle");
      cardTitle.innerHTML = product_list[ii].name;;
      document.getElementById("productdescription" + containerName).appendChild(cardTitle);
      var x = $("#main").width();

      var ratio = window.devicePixelRatio || 1;
      var w = screen.width * ratio;
      var h = screen.height * ratio;


      var x = window.devicePixelRatio;




      var priceDiv = document.createElement("div");
      priceDiv.setAttribute("class", "price");
      priceDiv.setAttribute("id", "price" + ii);
      priceDiv.innerHTML = product_list[ii].price;
      document.getElementById(containerName).appendChild(priceDiv);







      cardDiv.addEventListener("mouseover", function() {
        console.log(this);
        //var image=this.childNodes[1].setAttribute("style", "width:60%; height:120%;");
      })
    }


  }

});



function createPage(title) {
  var page = '<!doctype html><html lang="en"><head><!-- Required meta tags --><meta charset="utf-8"><!-- jQuery library --><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><link href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap" rel="stylesheet"><link rel="stylesheet" href="/public/css/mainpage.css"><link rel="stylesheet" href="css/header.css"><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></head><body id="main"><div id="includedContent"></div><div id="wrapper"></div><div class="selectedCategory"><p>displaying itmes that match: </p><h1>' + title + '</h1></div><div id="itemrow"></div><div class="loadMore"> <div class="svg-wrapper"><svg height="60" width="320" xmlns="http://www.w3.org/2000/svg" class="parentshape"><rect class="shape" height="60" width="320" /></svg><div class="buttontext">load more</div></div></div><div class="footer"><h2 style="color:#ffffff;">Footer</h2><a>Link1</a><a>Link2</a></div><script src="/public/js/menuselection.js"></script></body></html>'


  return page;

}