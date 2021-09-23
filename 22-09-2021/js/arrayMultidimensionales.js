let activities = [
    ['work',9],
    ['Eat',1],
    ['Play Game',2],
    ['Sleep',8],
    ['Drink',7],
];


console.table(activities);
console.log(activities[1][1]);
activities.push(['Run',6]);

console.table(activities);

activities.forEach(function(elemento, indice, array){

   // console.log('indice -> ' + indice)
    elemento.forEach(function(elementoDos, indiceDos, arrayDos){

        //console.log('elemento -> ' + elementoDos)
    });
});


//While 

let n = 0;
let x = 0;

while (n < 7){
    n++;
    x += n ;

    console.log(n);
}
console.log('El valor de mi variable es : '+ x);