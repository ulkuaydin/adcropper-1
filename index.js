
var button = document.getElementById("box");
var box = document.getElementById("box-open");
var user = document.getElementById("user-id");
var register = document.getElementById("register");

function getBoxOpen(){
  
    if(box.style.display =="none"){
        box.style.display = "block";
        button.style.transform = "rotate(90deg)";
      
    }
    else{
        box.style.display = "none";
        button.style.transform = "rotate(0)";
       
    }
}
function onRegister(){

    user.style.display = "none";
    register.style.display = "flex";
}
function onLogin(){
    register.style.display = "none";
    user.style.display = "flex";
}