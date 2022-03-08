const storm = [
    {nombre: "The way of kings"},
    {nombre: "Words of radiance"},
    {nombre: "Oaathbringer"},
    {nombre: "Rithm of War"},
];

module.exports = class Storm {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_nombre) {
        this.nombre = nuevo_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto.
    save() {
        storm.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return storm;
    }

}
