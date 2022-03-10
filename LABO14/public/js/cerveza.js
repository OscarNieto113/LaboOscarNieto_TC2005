// variables, constantes, consola
const numero_cervezas = 2;

console.log(numero_cervezas);
console.info(numero_cervezas);
console.warn(numero_cervezas);
console.error(numero_cervezas);

for (let i = 1; i <= 10; i++) {
    const alcance = 100;
    console.log(i);
}

//La siguiente línea daría error porque la variable i murió en la llave anterior.
//console.log(i);

console.log("Puedes tomar " + numero_cervezas + " cervezas");


// alert, prompt, confirm
alert("Si toma no maneje");
const catador = prompt("¿Cuál es tu nombre?");

console.log("Hola " + catador);

const respuesta = confirm("¿Te gustan las stouts?");

console.log(respuesta);


// funciones tradicionales
function beber(numero) {
    if (numero > 1) {
        console.log("Beber " + numero + " cervezas");
    } else if (numero == 1) {
        console.log("Beber una cerveza");
    } else if (numero == 0) {
        console.log("No gracias, yo manejo");
    }
}

beber(numero_cervezas);


// funciones modernas
const disfrutar = () => console.log("Disfruta tu cerveza");

disfrutar();


const disfrutar_varias = (numero) => console.log("Disfruta tus " + numero + " cervezas");

disfrutar_varias(numero_cervezas);



document.getElementById("contenido").onclick = () => console.warn("Me duele la cabeza");


function tabla_cuadrados() {
    let resultado = "<table>";
    for (let i = 1; i <= 10; i++) {
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>";
        resultado += "</tr>"
    }
    resultado += "</table>";
    return resultado;
}

document.getElementById("resultados").innerHTML = tabla_cuadrados();


// arreglos
const cervezas = ["Good day"];
cervezas.push("República");
cervezas[10] = "Carta blanca";
cervezas["favorita"] = "Coronita";
cervezas["mala"] = "Ultra";

console.log(cervezas);

for (let i in cervezas) {
    console.log(i);
}
