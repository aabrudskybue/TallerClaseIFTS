console.log("HOLA MUNDO");

const url = 'equipo.json';
const request = new XMLHttpRequest();
request.open('GET', url); // setean el método, la url de api
request.responseType = 'json'; //definen el tipo de dato que les devuelve
request.send();//envían la solicitud
var equipo = '';

console.log(request.response);


request.onload = function (){ //esperan la respuesta
    console.log(request.response);
    equipo = request.response; //reciben la respuesta
    setDataTeams();
    setTableGammers();
}

function setDataTeams(){
    let dt = document.getElementById("dt");
    dt.innerHTML = equipo.dt;
    let titulo = document.getElementById("title");
    titulo.innerHTML = "<b>" + equipo["pais"] + "</b>";
    let grupo = document.getElementById("grupo");
    grupo.innerHTML = equipo.grupo;


}

$( document ).ready(function() { 

    $('#addPlayer').submit(function(e){
       e.preventDefault();
        console.log("ENVIADO FORMULARIO")
    })
});

function enviarForm(){
    $('#addPlayer').submit();
}
function setTableGammers(){
    let jugadores = equipo.jugadores;
    jugadores.forEach(element => {

        
        let elementGalery = '<div class="col"><div class="card shadow-sm" id="card'+element.id+'">';
        elementGalery += '<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>';
        elementGalery += '<div class="card-body">';
        elementGalery += '<p class="card-text"><b> NOMBRE: '+ element.nombre +' </b></p>';
        elementGalery += '<p class="card-text"><b> POSICION: </b>'+ element.posicion +' </p>';
        elementGalery += '<p class="card-text"><b> APODO: </b>'+ element.apodo +' </p>';
        elementGalery += '<p class="card-text"><b> EDAD: </b>'+ element.edad +' </p>';
        elementGalery += '<div class="d-flex justify-content-between align-items-center">';
        elementGalery += '<div class="btn-group">';
        elementGalery += '<button type="button" class="btn btn-sm btn-outline-secondary" onclick="viewPlayer(\''+element+'\')">View</button>';
        elementGalery += '<button type="button" class="btn btn-sm btn-outline-secondary" onclick="showAlert('+element.id+', true)">Alert</button>';
        elementGalery += '<button type="button" class="btn btn-sm btn-outline-secondary" onclick="showAlert('+element.id+', false)">remove Alert</button>';
        elementGalery += '</div><small class="text-muted">9 mins</small></div></div></div></div>';
        
        let gallery = document.getElementById('gallery_view');
       // gallery.innerHTML = elementGalery;
         $('#gallery_view').append(elementGalery);

        console.log( element);
    });
}

let header ='';
let navSET = '';
function headerNav(){
    header = document.getElementById("header_nav");    
    navSET = '<div class="container"> <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"><a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"><svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg></a> <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"><li><a href="#" class="nav-link px-2 text-secondary">Home</a></li> <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li> <li><a href="#" class="nav-link px-2 text-white">About</a></li> </ul><form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"><input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"></form><div class="text-end"> <button type="button" class="btn btn-outline-light me-2">Login</button> <button type="button" class="btn btn-warning">Sign-up</button></div></div></div>';
    header.innerHTML = navSET;
}

function viewPlayer(player){
    console.log(Object.values(player));
}

function showAlert(id, estado){
    if (estado==true){
        $('#card'+id).addClass('alert')
    }else{

        $('#card'+id).removeClass('alert')
    }
}

function deletePlayer(id){
    $('#card'+id).remove()
}