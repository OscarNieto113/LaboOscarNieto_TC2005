/*
//variables, constantes, consolas
var numero_cervezas = 0; //Alcance local
let numero_cervezas2 = 1; //Alcance local reducido, preferencia utilizar let para nombrar variables
const numero_cervezas3 = 2; //Alcance local reducido, no se puede modificar

console.log(numero_cervezas; //imprime en la copnsola
console.info(numero_cervezas); //imprime en la copnsola: exclamacion
console.warn(numero_cervezas);//imprime en la copnsola: alerta
console.error(numero_cervezas); //imprime en la copnsola: error
 */

//Problema 1
function tabla_cuadrados(){
  const numCuadrados = prompt("Escribe un numero positivo de un digito"); //Mensaje para que el usuario escriba
  let table = '<table><tr> <th>Iteracion</th ><th>n**2</th> <th>n**3</th> </tr>'; //Creacion de la tabla

  for (let i = 1; i <= numCuadrados; i++){
    table +="<tr> <td>" +i+ "</td> <td>" +i*i+ "</td> <td>" +i*i*i+ "</td> </tr>";
  }
  table += "</table>";
  return table;
}
document.getElementById("resultado1").innerHTML = tabla_cuadrados(); //Se manda a llamar la funcion
