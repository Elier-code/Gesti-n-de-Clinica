class Medicos{
    constructor(idMedico, nombreMedico, numeroLicencia, especialidad, telefono){
        this.idMedico = idMedico
        this.nombre = nombreMedico
        this.numeroLicencia = numeroLicencia
        this.especialidad = especialidad
        this.telefono = telefono
    }
    getIdMedico(){
        return this.idMedico
    }
    getNombre(){
        return this.nombre
    }
}