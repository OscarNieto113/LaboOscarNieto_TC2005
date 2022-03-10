const mistborn = [
    {nombre: "The last Empire"},
    {nombre: "The well of ascention"},
    {nombre: "The hero of ages"},
];

module.exports = class Mistborn {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        mistborn.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return mistborn;
    }

}
