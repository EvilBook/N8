document.addEventListener('click',function (){
    createClass();
})


function createClass() {
  //array for checking up on empty fields

  var class_name = "trout";

  
    
 
          var myHeaders = new Headers();
          const data = {
            'name': class_name,
            'iamge': "trout"
          };
          var raw = JSON.stringify(data);
          myHeaders.append("Content-Type", "application/json");
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch("http://192.168.0.107:3000/classifications/section", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    
    
  
    
 
          var myHeaders = new Headers();
       
          var raw = JSON.stringify(data);
          myHeaders.append("Content-Type", "application/json");
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch("http://192.168.0.107:3000/classifications/category", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
      
    
  
    
 
          var myHeaders = new Headers();
       
          var raw = JSON.stringify(data);
          myHeaders.append("Content-Type", "application/json");
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          fetch("http://192.168.0.107:3000/classifications/subcategory", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    

}

function doesItMatch(name, name_arr) {
  for (var i = 0; i < name_arr.length; i++) {
    if(name === name_arr[i]) {
      return true;
    }
  }
  return false;
}
