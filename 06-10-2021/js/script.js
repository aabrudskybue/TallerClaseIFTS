console.log("Hello World!");

let testValue = '';
function test(dato){
    let element = document.createElement("div");
    let text = document.createTextNode(dato);
    element.appendChild(text)
    document.getElementById("body_page").appendChild(element);
}

function mostrarDatos(){
    let email = document.getElementById("email");
    let textarea = document.getElementById("info");
    let estado = true;
    if ( email.value == ''){
        modalMostrar("Falta Correo", "Debe completar el Email antes de continuar")
        estado = false;
    }else if  (textarea.value == ''){
        modalMostrar("Falta Example", "Debe completar el example antes de continuar")
        estado = false;
    }
    if (estado == true ){
        test(email.value)
    }
    

}

function modalMostrar(title, description){

    let elementTitle = document.getElementById('staticBackdropLabel');
    let elementDescription = document.getElementById('textModal');


    elementTitle.innerHTML = title;
    elementDescription.innerHTML = description;

 /*   title = document.createTextNode(title);
    description = document.createTextNode(description);
    elementDescription.appendChild(description);
    elementTitle.appendChild(title)*/

    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
        keyboard: false
      })
    myModal.show();
}