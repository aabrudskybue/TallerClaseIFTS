let mi_array = new Array ("btn-primary","btn-success","btn-danger","btn-info");


  

function colorBotonera( estado ){
    if (estado == true){
        let botonera = document.getElementsByClassName("btn"); //HTML Collctions
        //console.log(botonera);
        let arr_botonera = Array.prototype.slice.call(botonera) //HTML Collctions -> array
        
        arr_botonera.forEach(function(elemento, indice, array){
            elemento.classList.add(mi_array[indice]);
        });
    }
}


function showList( id , estado ){
    let mostrar = document.getElementById(id);
    if ( estado == true ){
        mostrar.classList.remove('d-none');
    }else{
        mostrar.classList.add('d-none');
    }

}