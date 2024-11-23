class Especialidades {
    constructor(idEspecialidad, nombre, descripcion, esstadoEspecialidad, fechaCreacion) {
        this.idEspecialidad = idEspecialidad
        this.nombre = nombre
        this.descripcion = descripcion
        this.esstadoEspecialidad = esstadoEspecialidad
        this.fechaCreacion = fechaCreacion
    }
    getIdEspecialidad(){
        return this.idEspecialidad
    }
    getNombre(){
        return this.nombre
    }
}