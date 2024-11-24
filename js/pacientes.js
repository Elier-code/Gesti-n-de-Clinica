class Pacientes {
    constructor (nombre, idPaciente, fechaNacimientoPaciente, direccion, telefono, correo, estadoPerfil, fechaRegistro, usuario, contrasena){
        this.nombre = nombre
        this.idPaciente = idPaciente
        this.fechaNacimientoPaciente = fechaNacimientoPaciente
        this.direccion = direccion
        this.telefono = telefono
        this.correo = correo
        this.estadoPerfil = estadoPerfil
        this.fechaRegistro = fechaRegistro
        this.usuario = usuario
        this.contrasena = contrasena
    }
    getUsuario(){
        return this.usuario
    }
    getContrasena(){
        return this.contrasena
    }
}