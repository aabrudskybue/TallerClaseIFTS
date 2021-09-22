let variableLet = 10;
//let variablelet = 20;

/* Demostrando case sensitive . */
console.log("variableLet :: " + variableLet); //
//console.log("variablelet :: " + variablelet); //

variableLet = 20;

console.log("variableLet :: " + variableLet); 

variableLet = variableLet + 20;

console.log("variableLet :: " + variableLet);


variableLet += 20;

console.log("variableLet :: " + variableLet);


var variable_var = "20";
var variable_var = "30";

console.log("variable_var :: " + variable_var);


nueva_variable = 30;
nueva_variable = 40;
console.log("nueva_variable :: " + nueva_variable);
console.log("nueva_variable :: " + nueva_variable);

let datos = null;
console.log('Variable null -> ' + ( datos * 32 ));

let test = true;

if (test === true) {

    var x = 5;
    let y = 4;
    console.log('y -> ' + y );

}
console.log('x -> ' + x );



let frutas = ["manzana","frutilla","naranja"];//array
console.log('Tamaño de mi array -> ' + frutas.length);
console.log('primer elemento -> ' + frutas[0]);
console.log('ultimo elemento -> ' + frutas[frutas.length - 1]);

for (var i = 0; i<frutas.length ; i++){
    console.log('Valor Array for para '+ i + " --> " + frutas[i]);
}

frutas.push('kiwi');

frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
})

frutas.pop();

console.log('Luego de pop ');

frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
})


frutas.unshift('kiwi');


console.log('Luego de unshift ');

frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
})

frutas.shift(); // elimina el primer elemento

console.log('Luego de shift ');
frutas.forEach(function(elemento, indice, array){
    console.log(elemento, indice);
})

let pos = frutas.indexOf('naranja');

console.log('indexOf pos -> ' + pos);


