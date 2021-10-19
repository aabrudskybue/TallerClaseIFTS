let casa = 0000;
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  })
  


function funcionIncial(){
    myModal.show();
    console.log('llamando desde la función ::: '+ casa);
}

function alertar(mensaje){
    alert(mensaje);
}

function funcionDos(mensaje){
    let textModal = document.getElementById('textModal');
    textModal.innerHTML=mensaje;
    myModal.show();
}

function test (){
    for (let i = 0; i < 5; i++){
       listenfuncion(i);
    }

}
function listenfuncion(i){
    console.log(i);
}
console.log('llamando después de la función ::: ' + casa);