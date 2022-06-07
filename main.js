// **Ejecutar funcion después de cierto tiempo**

//function saludo (nombre) {
   // console.log(`Hola, ${nombre}, buenas tardes`);
//}
//Para cancelar el temporizador debemos guardar el setTimeout en una variable
 //setTimeout(saludo, 2000, 'manco');      //ORIGINAL

//let temporizadorID = setTimeout(saludo, 2000, 'manco');
//clearTimeout(temporizadorID);  //LLAMANDO LA FUNCION PERO CANCELANDOLA INMEDIATAMENTE




//**ejecutar una funcion cada CIERTO tiempo**

//let IntervaloID = setInterval(saludo, 2000, 'manco')
//clearInterval(IntervaloID);

// Cuenta regresiva

//let numero =5;
// function conteo(){
//     console.log(`Lanzamiento en ${numero} segundos`)
//     numero--;
//     if (numero == 0){
//     clearInterval(lanzamiento)
//     }
// }
// let lanzamiento = setInterval(conteo, 1000);


//**conteo con método flecha**

// let lanzamiento = setInterval (()=> {
//     console.log(`Lanzamiento en ${numero} segundos`)
//     numero--;

//     if (numero == 0){
//     clearInterval(lanzamiento)
//     }
// }, 1000)




//EJERCICIO 


let mostrarFecha = document.getElementById('fecha');


let fecha = new Date();

let diaSemana=['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
let mesAnyo = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

mostrarFecha.innerHTML= `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} del ${fecha.getFullYear()}`;



let mostrarReloj =document.getElementById('reloj');
setInterval(() =>{
    let hora = new Date();
    mostrarReloj.innerHTML= hora.toLocaleTimeString()
}, 1000);


