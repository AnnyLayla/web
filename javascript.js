// comando hamburgueza defino su nombre la dirigo al documento query selector de donde va estar la funcion
// le digo que al hacer click en la funcion valla a la navegacion
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function( ){
navBar = document.querySelector(".nav-bar");
navBar.classList.toggle("active");
}


// formulario de inscripcion





// Capcha

var arr= "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
var captcha= "";
var btn = document.getElementById("botonCaptcha");

numran()
function numran(){
for(let i=0;i<4;i++){
     let numeroRandom= Math.floor(Math.random()*(37-0));
    captcha += arr[numeroRandom];
}}

btn.addEventListener("click", function(numran){
    let valorCaptcha = document.getElementById("valorCaptcha").value;
    if ((valorCaptcha != captcha) ){
        document.getElementById("resultado").innerHTML = "El captcha fue erroneo "
    }
        else{
        document.getElementById("resultado").innerHTML = "Tu datos ya fueron enviados "
        }
        document.getElementById("name").value=''
        document.getElementById("apellido").value=''
        document.getElementById("date").value=''
        document.getElementById("email").value=''
        document.getElementById("valorCaptcha").value=''

    });

document.getElementById("captcha").innerHTML += captcha;

// dark modo oscuro



