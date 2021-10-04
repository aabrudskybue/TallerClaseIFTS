console.log("Inicia nuestro JS");
let array_colores = new Array ("btn-success","btn-danger","btn-info","btn-warning");


function colorCard( estado ){ 
    let botones = document.getElementsByClassName("btn");//HTML COllections
    let array_botones = Array.prototype.slice.call(botones);//Html  en un array
    var count_array = array_colores.length - 1 ;
    //console.log(count_array);
    var i = 0;
        array_botones.forEach(function(element,indice,array){
              
       
            if (estado == true){
                element.classList.remove("btn-primary");
                element.classList.add(array_colores[i]);
               
            }else{
                element.classList.remove(array_colores[i]);
                element.classList.add("btn-primary");
            }
            if (i == count_array){
                i = 0;
            }else{
                i++;
            }
        });
}

function mostrarOcultar( show , elemento){
    let row = document.getElementById(elemento);
    if (show == true){
        //mostrarFila
        row.classList.remove("d-none");
    }else{
        row.classList.add("d-none");
    }

}