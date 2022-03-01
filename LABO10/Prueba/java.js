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

//Promebla 2
function suma (){
  const num1 = Math.floor(Math.random() * (100 - 1)) + 1;// Retorna un número aleatorio entre min (incluido) y max (excluido)
  const num2 = Math.floor(Math.random() * (10 - 1)) + 1;

  const inicio = Date.now();//Inicia Cronometro
  const respuesta = prompt(`Ingrese el resultado de la operacion: ${num1} + ${num2}`);
  const final = Date.now();//Termina Cronometro

  const duracion = (final - inicio) / 1000;

  let mensaje = `El resultado es ${respuesta == num1+num2 ? 'correcto' : 'incorrecto'}. Tardaste ${Math.round(duracion)} segundos`;
  return mensaje;
}

//Promebla 3
function contador (lista){
  let contPositivo =0;
  let contNegativo =0;
  let contCero =0;
  let lenght = lista.lenght;
  for (i = 0; i <= 40; i++){
    if (lista[i] == 0 ){
      contCero++;
    }
    else if (lista[i] > 0) {
      contPositivo++;
    }
    else{
      contNegativo++;
    }
  }

  let mensaje = "Positivos: " +contPositivo+ " Negativos: " +contNegativo+ " Ceros: " +contCero+ ". <br>Lista: <br> [" +lista+ "].";
  return mensaje;
}

function randomlist(){
  const randomlist = [0];
  for (i = 1; i <= 40; i++){
    var num = Math.floor(Math.random()*99) + 1; // this will get a number between 1 and 99;
    num *= Math.round(Math.random()) ? 1 : -1; // this will add minus sign in 50% of cases
    randomlist.push(num);
  }
  return randomlist
}

//Problema 4
function promedio (){
  let matrix = [[1,2,3,4,5,6],[9,8,7,6,5,4],[1,2,3,4,5,6],[9,8,7,6,5,4]];
  const prom = (matriz) => matriz.map((arr, i, matrix) => arr.reduce((curr, num) => curr + num,0) / matrix.length);
  let mensaje = `Matrix:<br>[1,2,3,4,5,6]<br>[9,8,7,6,5,4]<br>[1,2,3,4,5,6]<br>[9,8,7,6,5,4]<br>Promedios: <br>` + prom(matrix).join(', ') + '';
  return mensaje;
}

//Problema 5

function inverso (){
  const num1 = prompt('Ingresa un numero de dos o mas digitos');
  const inverso = (num) => num.toString().split('').reverse().join('');
  let mensaje = "Numero que escribiste: " +num1+ " Numero Inverso: " +inverso(num1)+ ". ";
  return mensaje;
}

//Problema 6
// Definicion de la clase. Arbol binario
class Node{
  constructor(item){
    this.data = item;
    this.left = null;
    this.right = null;
  }
}

var root = null;

//Solucion:
function lca(root, n1, n2){
  while (root != null){

    // Si ambos numeros son menores a la raiz entonces el lca esta a la iquierda
    if (root.data > n1 && root.data > n2)
        root = root.left;
    // Si ambos numeros son mayores a la raiz entonces el lca esta a la derecha
    else if (root.data < n1 && root.data < n2)
        root = root.right;

    else break;
  }
  return root;
}

function lowestCommonAncestor (){
  //Creamos el objeto
  root = new Node(20);
  root.left = new Node(8);
  root.right = new Node(22);
  root.left.left = new Node(4);
  root.left.right = new Node(12);
  root.left.right.left = new Node(10);
  root.left.right.right = new Node(14);

  var n1 = 10, n2 = 14;
  var t = lca(root, n1, n2);

  let mensaje = "El ancestro comun entre " + n1 + " y " + n2 + " es: " + t.data + ".";
  return mensaje;
}



document.getElementById("resultado1").innerHTML = tabla_cuadrados(); //Se manda a llamar la funcion
document.getElementById("resultado2").innerHTML = suma(); //Se manda a llamar la funcion
document.getElementById("resultado3").innerHTML = contador(randomlist()); //Se manda a llamar la funcion
document.getElementById("resultado4").innerHTML = promedio(); //Se manda a llamar la funcion
document.getElementById("resultado5").innerHTML = inverso(); //Se manda a llamar la funcion
document.getElementById("resultado6").innerHTML = lowestCommonAncestor(); //Se manda a llamar la funcion
